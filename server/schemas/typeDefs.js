const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    _id: ID
    queueId: String
    username: String
    createdAt: String
    email: String
    phone: String
    partyCount: Int
    note: String
    restricted: Boolean
  }

  type Manager {
    _id: ID
    username: String
    email: String
    phone: String
  }

  type ManagerAuth {
    token: ID!
    # This part needs to be reviewed, what does auth return in our case?
    manager: Manager
  }

  type Queue {
    _id: ID
    queueId: String
    createdAt: String
    note: String
    customers: [Customer]
  }

  type Query {
    customers: [Customer]
    customer(_id: ID!): Customer
    manager: [Manager]
    queues: [Queue]
    queue(queueId: String!): Queue
  }

  type Mutation {
    managerLogin(email: String!, password: String!): ManagerAuth
    addCustomer(
      username: String!
      email: String!
      phone: String!
      partyCount: Int!
    ): Customer
    deleteCustomer(customerId: ID!): Customer
  }
`;

module.exports = typeDefs;
