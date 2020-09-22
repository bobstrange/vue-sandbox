const { ApolloServer, gql } = require("apollo-server");

const schema = gql(`
  type Query {
    currentUser: User
    postsByUser(userId: String!): [Post]
  }

  type Mutation {
    addPost(content: string): Post
  }

  type User {
    id: ID!
    username: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    userId: ID!
  }
`);

const dummyPosts = [
  {
    id: "post-1",
    content: "First post",
    userId: "user-1",
  },
  {
    id: "post-2",
    content: "Second post",
    userId: "user-1",
  },
  {
    id: "post-3",
    content: "Random post",
    userId: "user-2",
  },
];

const dummyUsers = [
  {
    id: "user-1",
    username: "johndoe",
  },
  {
    id: "user-2",
    username: "janedoe",
  },
];

const data = {
  posts: dummyPosts,
  users: dummyUsers,
};

const currentUserId = "user-1";

var resolvers = {
  Query: {
    currentUser: (_, __, context) => {
      const user = context.data.users.find(
        (u) => u.id === context.currentUserId
      );
      return user;
    },
    postsByUser: (_, args, context) => {
      const posts = context.data.posts.filter((p) => p.userId === args.userId);
      return posts;
    },
    addPost: async (_, { content }, { currentUserId, data }) => {
      const post = {
        id: `post-${data.posts.length + 1}`,
        content: content,
        userId: currentUserId,
      };
      data.posts.push(post);
      return post;
    },
  },
  User: {
    posts: (parent, __, context) => {
      const posts = context.data.posts.filter((p) => p.userId === parent.id);
      return posts;
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    currentUserId,
    data,
  },
});

const port = process.env.PORT || 8080;
server.listen(port).then(({ url }) => {
  console.log("Server is running at localhost:" + port);
});
