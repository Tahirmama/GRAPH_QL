const { ApolloServer, gql } = require('apollo-server');

let students = [
  {
    "id": 1,
    "name": "Tahir",
    "email": "tahirmama@gmail.com",
    "age": 21
  },
  {
    "id": 2,
    "name": "HAshim",
    "email": "hashimraza@gmail.com",
    "age": 23
  },
  {
    "id": 3,
    "name": "Waseemazam",
    "email": "azamwaseem@gmail.com",
    "age": 25
  }
]

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (e, { input }) => {
      students.push(
        {
          name: input.name,
          age: input.age,
          email: input.email,
          id: input.id
        }
      )
      return {
        name: input.name,
        age: input.age,
        email: input.age,
        id: input.id
      }
    }
  }
};
const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }
  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    students: [Student]
  }
  type Mutation {
    addStudent(input: StdInput): Student
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});