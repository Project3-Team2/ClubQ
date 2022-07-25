const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Customer {
    _id: ID
    username: String
    createdAt: String
    email: String
    phone: String
    partyCount: Number
    note: String
    restricted: Boolean
  }
  
  type Manager {
    _id: ID
    username: String
    email: String
    phone: String
    guards: [Guard]
  }

  type Guard {
    _id: ID
    username: String
    email: String
    phone: String
    approved: Boolean
    performancereviews: [Review]
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    managerName: String
  }

  type ManagerAuth {
    token: ID!
    # This part needs to be reviewed, what does auth return in our case?
    manager: Manager
  }

  type GuardAuth {
    token: ID!
    guard: Guard
  }

  type Query {
    customers: [Customer]
    customer(username: String!): Customer
    managers: [Manager]
    manager(username: String!): Manager
    guards: [Guard]
    guard(username: String!): Guard
    signups: [Guard]
    signup(username: String!): Guard
  }
  
  type Mutation {
    managerLogin(email: String!, password: String!): ManagerAuth
    guardLogin(email:String!, password:String!): GuardAuth
    addGuard(username:String!, email:String!, phone:String!, password:String!): GuardAuth
    addReview(guardId:ID!, reviewText:String!): Guard
    changeApproved(signupId:ID!): Guard
    addCustomer(username: String!, email: String!, phone: String!, partyCount: Number! ): Customer
    deleteCustomer(customerId:ID!): Customer
    deleteSignup(signupId:ID!): Guard
  }
`;

module.exports = typeDefs;
