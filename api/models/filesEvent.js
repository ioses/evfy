'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filesEventSchema = Schema({
    nameFile: String,
    event: {type: Schema.ObjectId, ref: 'Event'}
});

module.exports = mongoose.model ('FilesEvent', FilesEventSchema);