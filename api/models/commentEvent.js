'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentEventSchema = Schema ({
    text: String,
    puntuaction: String,
    created_at: String,
    event: { type: Schema.ObjectId, ref: 'Event'},
    buyer: { type: Schema.ObjectId, ref: 'User'}
    
});

module.exports = mongoose.model ('CommentEvent', CommentEventSchema);