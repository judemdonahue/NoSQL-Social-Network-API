const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const moment = require('moment');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId },
    reactionBody: { type: String, required: 'Reaction content is required !', maxlength: 280 },
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

  const thoughtSchema = new Schema({
    thoughtText: { type: String, required: 'Thought content is required !', minlength: 1, maxLength: 280 },
    username: { type: String, required: 'Username is required !' },
    reactions: [reactionSchema], // Reference the reactionSchema directly (no circular dependency)
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (createdAt) {
        const formattedTimestamp = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return formattedTimestamp;
      },
    },
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  });
  
  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

  const Thought = mongoose.model('Thought', thoughtSchema);
  
  module.exports = {
    Thought,
    thoughtSchema,
    reactionSchema,
  };
