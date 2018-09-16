const { ApolloServer, gql } = require("apollo-server");

const todos = [
  { task: "wash car", completed: false },
  { task: "wash dog", completed: true },
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const resolvers = {
  Query: {
    getTodos: function() {
      return todos;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server listening on ${url}`);
});
