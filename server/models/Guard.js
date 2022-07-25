const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');

const reviewSchema =new Schema(
  {
    reviewText: {
      type: String,
      required: 'You need to leave a review!',
      minlength: 1,
      maxlength: 300
    },
    createdAt: {
      type : Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    managerName: {
        type: String,
        required: true
    }
  },
  {
    toJSON: {
      getters:true
    }
  }
);

const guardSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^[1-9]\d{2}-\d{3}-\d{4}/, 'Must match an phone number!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    approved: {
      type: Boolean,
      default: false
    },
    performancereviews: [reviewSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


// set up pre-save middleware to create password
guardSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
guardSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const Guard = model('Guard', guardSchema);
const Signup= model('Signup', guardSchema);

module.exports = {Guard , Signup};
