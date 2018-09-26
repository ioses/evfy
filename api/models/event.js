'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = Schema({
    title: String,
    description: String,
    prize: String,
    location: String,
    distance: String,
    created_at: String,
    user: {type: Schema.ObjectId, ref: 'User'},
    eventType: { type: Schema.ObjectId, ref: 'eventType'}
});

module.exports = mongoose.model ('Event', EventSchema);