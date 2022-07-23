const { User, Manager } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
    },
    }
  };

// const resolvers = {
//     Query: {
//       users: async () => {
//         return Manager.find()
//         .select('-__v -password')
//       },
//       user: async (parent, { username }) => {
//         return Manager.findOne({ username })
//         .select('-__v -password')
//       },
//     }
//   };


  
  module.exports = resolvers;

  