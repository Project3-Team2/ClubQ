import { gql } from '@apollo/client';

export const ADD_CUSTOMER = gql`
  mutation addCustomer($email: String!) {
    addCustomer(email: $email) {
      token
      Customer {
        _id
        username
        phone
      }
    }
  }
`;

// export const REMOVE_CUSTOMER = gql`
//   mutation removeCustomer($id: ID!) {
//     removeCustomer(id: $id) {
//       _id
//       username
//       phone
//     }
//   }
// `;

export const LOGIN_MANAGER = gql`
  mutation login($email: String!) {
    login(email: $email) {
      token
      Manager {
        _id
        username
        phone
      }
    }
  }
`;

export const QUERY_QUEUE = gql`
  mutation Queue($id: ID!) {
    Queue(_id: $id) {
      token
      Queue {
        _id:
    queueId
    createdAt
    note
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
  }
`;

