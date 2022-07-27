import { gql } from '@apollo/client';

export const QUERY_CUSTOMERS = gql`
  query Customers($username: String) {
    Customers(username: $username) {
        _id
        queueId
        username
        createdAt
        email
        phone
        partyCount
        note
        restricted
    }
  }
`;

export const QUERY_CUSTOMER = gql`
  query Customer($username: String) {
    Customer(username: $username) {
        _id
        queueId
        username
        createdAt
        email
        phone
        partyCount
        note
        restricted
    }
  }
`;

export const QUERY_MANAGER = gql`
  query Manager($username: String) {
    Manager(username: $username) {
        _id
        username
        email
        phone
    }
  }
`;

export const QUERY_QUEUE= gql`
  query Queue($id: ID!) {
    Queue(_id: $id) {
        _id: ID
    queueId: String
    createdAt: String
    note: String
    customers: {
        _id
        queueId
        username
        createdAt
        email
        phone
        partyCount
        note
        restricted
    }
  }
`;

// export const QUERY_QUERY = gql`
//   query Manager($username: String) {
//     Manager(username: $username) {
//         _id
//         username
//         email
//         phone
//     }
//   }
// `;




