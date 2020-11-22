import mongoose, { Document, Model, Schema } from 'mongoose'

interface PostAttrs {
  title: string
  text: string
  userId: string
}

interface PostDocument extends Document {
  title: string
  text: string
  userId: string
}

interface PostModel extends Model<PostDocument> {
  build(attrs: PostAttrs): PostDocument
  fetchPosts(): PostDocument[]
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id
        ret.user_id = ret.userId
        delete ret._id
        delete ret.userId
        delete ret.__v
      },
    },
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs)
}

postSchema.statics.fetchPosts = async () => {
  return await Post.find({})
}

export const Post = mongoose.model<PostDocument, PostModel>('Post', postSchema)
