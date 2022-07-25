const { Manager, Guard, Signup, Customer } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    customers: async () => {
      return Customer.find()
      .select('-__v');
    },
    customer: async (parent, { username }) => {
      return Customer.findOne({ username })
      .select('-__v');
    },
    managers: async () => {
      return Manager.find()
      .select('-__v -password')
      .populate('guards');
    },
    manager: async (parent, { username }) => {
      return Manager.findOne({ username })
      .select('-__v -password')
      .populate('guards');
    },
    guards: async () => {
      return Guard.find()
      .select('-__v -password')
      .populate('performancereviews');
    },
    guard: async (parent, { username }) => {
      return Guard.findOne({ username })
      .select('-__v -password')
      .populate('performancereviews');
    },
    signups: async () => {
      return Signup.find()
      .select('-__v -password');
    },
    signup: async (parent, { username }) => {
      return Signup.findOne({ username })
      .select('-__v -password');
    }
  },

  Mutation: {
    managerLogin: async (parent, { email, password }) => {},
    guardLogin: async (parent, { email, password }) => {},
    addGuard: async () => {},
    addReview: async () => {},
    changeApproved: async () => {},
    addCustomer: async () => {},
    deleteCustomer: async () => {},
    deleteSignup: async () => {},
  }




};



  
  module.exports = resolvers;

  