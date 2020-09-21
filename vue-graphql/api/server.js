const { ApolloServer, gql } = require("apollo-server");

const schema = gql(`
  type Query {
    currentUser: User
    postsByUser(userId: String!): [Post]
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
    currentUser: (parent, args) => {
      let user = data.users.find((u) => u.id === currentUserId);
      let posts = data.posts.filter((p) => p.userId === currentUserId);
      user = Object.assign({}, user, {
        posts: posts,
      });
      return user;
    },
    postsByUser: (parent, args) => {
      let posts = data.posts.filter((p) => p.userId === args.userId);
      return posts;
    },
  },
  User: {
    posts: (parent, args) => {
      let posts = data.posts.filter((p) => p.userId === parent.id);
      return posts;
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const port = process.env.PORT || 8080;
server.listen(port).then(({ url }) => {
  console.log("Server is running at localhost:" + port);
});
