import mongoose, { Document, Model, Schema } from 'mongoose'
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

interface UserAttrs {
  firstName: string
  lastName: string
  screenName: string
  email: string
  password: string
}

interface UserDocument extends Document {
  email: string
  firstName: string
  lastName: string
  screenName: string
  password: string
}

interface UserModel extends Model<UserDocument> {
  build(attrs: UserAttrs): UserDocument
  fetchByEmail(email: string): Promise<UserDocument>
  fetchAllWithoutEmail(): Promise<Omit<UserAttrs, 'email'>[]>
}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    screenName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      },
    },
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const password = this.get('password')
    const salt = randomBytes(8).toString('hex')
    const buffer = (await promisify(scrypt)(password, salt, 64)) as Buffer
    const hashedPassword = `${buffer.toString('hex')}.${salt}`
    this.set('password', hashedPassword)
  }
  done()
})

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

userSchema.statics.fetchByEmail = async (email: string) => {
  return User.findOne({ email })
}

userSchema.statics.fetchAllWithoutEmail = async () => {
  const users = await User.find({})

  return users.map((user) => {
    return user.toJSON({
      transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.email
        delete ret.__v
      },
    })
  })
}

export const User = mongoose.model<UserDocument, UserModel>('User', userSchema)
