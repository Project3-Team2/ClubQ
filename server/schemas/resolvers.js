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

    managerLogin: async (parent, { email, password }) => {
      const user = await Manager.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    guardLogin: async (parent, { email, password }) => {
      const user = await Guard.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addGuard: async (parent, args, context) => {
      if(context.manager) {
        const guard= await Guard.create({...args});

        await Manager.findByIdAndUpdate(
          {_id: context.manager._id},
          { $push: { guards: guard._id}},
          { new: true}
        );
        return guard;
      }
    },

    addReview: async (parent,{ guardId, reviewText}, context) => {
      if(context.manager) {
        const updatedReview = await Guard.findByIdAndUpdate(
          { _id: guardId },
          { $push: {performancereviews: {reviewText, managerName: context.manager.username}}},
          { new: true, runValidators: true }
        );
        return updatedReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    changeApproved: async (parent,{ signupId }, context) => {
      if(context.manager) {
        const updatedSignup = await Signup.findByIdAndUpdate(
          {_id: signupId},
          { approved: !approved },
          { new: true}
        );

          // code here to remove updatedSignup from list of Signups and add it to Guards list

        return updatedSignup;
      }
      throw new AuthenticationError('You need to be logged in!');

    },

    addCustomer: async (parent, args) => {
      const user = await Customer.create(args);
      return user;
    },

    deleteCustomer: async (parent, { customerId }) => {
      const deletedCustomer = await Customer.findOneAndDelete({_id:customerId});
      
      // I dont think this portion would work with graphql
      
      // .then((dbData) => {
      //   if(!dbData) {
      //       res.status(404).json({ message: 'No customer found with this id!'});
      //       return;
      //   }
      //   res.json({message:'Following record has been deleted!',dbData});
      // })
      // .catch(err => {
      //   console.log(err);
      //   res.status(400).json(err);
      // });
      return deletedCustomer;
    },

    deleteSignup: async (parent, { signupId }) => {
      const deletedSignup = await Signup.findOneAndDelete({_id:signupId});
      
      // I dont think this portion would work with graphql
      
      // .then((dbData) => {
      //   if(!dbData) {
      //       res.status(404).json({ message: 'No user found with this id!'});
      //       return;
      //   }
      //   res.json({message:'Following record has been deleted!',dbData});
      // })
      // .catch(err => {
      //   console.log(err);
      //   res.status(400).json(err);
      // });

      return deletedSignup;
    },
  }




};



  
  module.exports = resolvers;

  