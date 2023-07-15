const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastAccessed: { type: Date, default: Date.now },
  });

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

//THOUGHTTEXT
// -string
// -required
// -between 1 and 280 chars

//CREADTEDAT
// -date
// -set default val to current timestamp
// -user a getter method to format the timestamp on query

//USERNAME (user that created this thought)
// - String
// required

// REACTIONS (replies)
// - array of nested documents created with the reactionSchema

// SCHEMA SETTINGS 
// create a virtual called "reactionCount" that retrieves the length of the thoughts reactions array field on query

// REACTION (SCHEMA ONLY)
// REACTIONID
// use mongeesis objectId data type

// REACTION BODY
// string
// required
// 280 char max

// USERNAME
// String
// required

// CREATEDAT
// date
// det a default value to the current timestamp
// use a getter method to format the timestamp on query