const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const managerSchema = new Schema(
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
    guards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Guard'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);



// set up pre-save middleware to create password
managerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
managerSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

managerSchema.virtual('guardCount').get(function() {
  return this.guards.length;
});



// Count of all the guards to be approved
// managerSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });


const Manager = model('Manager', managerSchema);

module.exports = Manager;
