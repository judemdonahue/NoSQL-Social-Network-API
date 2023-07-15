const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId },
    reactionBody: { type: String, required: 'Reaction content is required !', maxChar: 280 },
    username: { type: String, required: 'Username is required !', },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
          const formattedTimestamp = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
          return formattedTimestamp;
        }
      },
    toJSON: { getters: true }
  });

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: 'Thought content is required !', minChar: 1, maxChar: 280 },
    username: { type: String, required: 'Username is required !', },
    reactions: [reactionSchema],
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
          const formattedTimestamp = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
          return formattedTimestamp;
        }
      },
    toJSON: { virtuals: true, getters: true },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

