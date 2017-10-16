const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: String,
	age: Number,
	color: String,
	goodToOwn: Boolean
});

module.exports = mongoose.model('Pet', PetSchema);
