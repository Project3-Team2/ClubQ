const { Manager, Queue, Customer } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    manager: async () => {
      return Manager.find();
    },

    customers: async () => {
      return Customer.find();
    },
    customer: async (parent, { _id }) => {
      return Customer.findOne({ _id }).select("-__v -password");
    },
    queues: async () => {
      return Queue.find().populate("customers");
    },
    queue: async (parent, { queueId }) => {
      return Queue.findOne({ queueId }).populate("customers");
    },
  },

  Mutation: {
    managerLogin: async (parent, { email, password }) => {
      const user = await Manager.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
