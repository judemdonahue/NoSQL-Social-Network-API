const mongoose = require('mongoose');



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

const thoughtSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId },
    reactionBody: { type: String, required: true, maxChar: 280 },
    username: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now,  }
    // // use a getter method to format the timestamp on query
  });

  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

