const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phone: {
      //I can't figure out if this should be a string or integer, but integer doesnt work
      type: String,
      required: true,
      unique: true,
      match: [/^[1-9]\d{2}-\d{3}-\d{4}/, 'Must match an phone number!']
    },
    partyCount: {
      //Same with this, it should be an integer
      type: String,
      required: true,
      unique: true,
      match: [/[1-9]/, 'Must me a number between 1-9!']
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const managerSchema = new Schema(
  {
    managerName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
