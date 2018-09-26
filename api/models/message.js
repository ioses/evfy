'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = Schema({
	text: String,
	viewed: String,
	created_at: String,
	buyer: { type: Schema.ObjectId, ref: 'User'},
	seller: { type: Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Message', MessageSchema);