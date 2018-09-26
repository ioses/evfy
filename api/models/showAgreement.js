'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShowAgreementSchema = Schema({

    dateStart: String,
    hourStart: String,
    dateFinish: String,
    hourFinish: String,
    prize: String,
    buyer: {type: Schema.ObjectId, ref: 'User'},
    seller: {type: Schema.ObjectId, ref: 'User'},
    event: {type: Schema.ObjectId, ref: 'Event'},
});

module.exports = mongoose.model ('ShowAgreement', ShowAgreementSchema);