const mongoose = require('mongoose');
const thoughtSchema = require('./Thought');

const validateEmail = function(emailInput) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(emailInput)
};

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: 'Email address is required !', unique: true, validate: [validateEmail, 'Please fill a valid email address'], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    thoughts: [thoughtSchema],
    friends: [userSchema]
})

