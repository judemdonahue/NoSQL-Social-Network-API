const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: 'Thought content is required !', minChar: 1, maxChar: 280 },
    createdAt: { type: Date, default: Date.now,  },
    // // use a getter method to format the timestamp on query
    username: { type: String, required: 'Username is required !', },
    reactions: [reactionSchema] 

})

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId },
    reactionBody: { type: String, required: 'Reaction content is required !', maxChar: 280 },
    username: { type: String, required: 'Username is required !', },
    createdAt: { type: Date, default: Date.now,  }
    // // use a getter method to format the timestamp on query
  });

  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

