const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const validateEmail = function(emailInput) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(emailInput)
};

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      required: 'Email address is required!',
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [ { type: Schema.Types.ObjectId, ref: 'Thought' } ], // Reference the thoughtSchema directly (no circular dependency)
    friends: [ { type: Schema.Types.ObjectId, ref: 'User' } ], // Reference the userSchema directly (no circular dependency)
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  });
  
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;