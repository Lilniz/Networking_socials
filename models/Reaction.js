const { Schema, model } = require('mongoose');
const { Reaction } = require('.');


const reactionSchema = new Schema(
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
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
