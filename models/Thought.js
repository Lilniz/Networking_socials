const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js')

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
      }
    },
    userName: {
      type: String,
      required: true
    },
    reactSchema: [
      {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamps: {
                currentTime: () => Math.floor(Date.now() / 1000)
              }
        }
    }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
