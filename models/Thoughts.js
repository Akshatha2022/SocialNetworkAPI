// Require Mongoose and Moment
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// ReactionsSchema
const ReactionsSchema = new Schema(
    {
            // Set custom ID 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
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
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
);

// ThoughtsSchema
const ThoughtsSchema = new Schema(
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
        // Moment
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    
     // using ReactionsSchema to validate data for a reply
    reactions: [ReactionsSchema]
},
{
toJSON: {
    virtuals: true,
    getters: true
},
id: false

    }
)

// get total count of reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// creating the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);

//exporting the Thought Moduke
module.exports = Thoughts;