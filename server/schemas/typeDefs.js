const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    createdAt: String
    email: String
    phone: String
    partyCount: Int
  }
  
  type Manager {
    _id: ID
    username: String
    password: String
  }

  type Query {
    users: [User]
    user(username: String!): User
  }
  
  type Mutation {
    login: User
    addUser(username: String!, createdAt: String!, email: String!, phone: String!, partyCount: String! ): User
  }
`;

module.exports = typeDefs;
