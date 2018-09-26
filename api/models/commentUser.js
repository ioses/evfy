'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentUserSchema = Schema ({
    text: String,
    puntuaction: String,
    created_at: String,
    event: { type: Schema.ObjectId, ref: 'Event'},
    seller: { type: Schema.ObjectId, ref: 'User'}
    
});

module.exports = mongoose.model ('CommentUser', CommentUSerSchema);