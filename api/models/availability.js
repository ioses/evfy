'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AvailabilitySchema = Schema({

    date: String,
    hour: String,
    event: {type: Schema.ObjectId, ref: 'Event'}
});

module.exports = mongoose.model ('Availability', AvailabilitySchema);