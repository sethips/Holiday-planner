const mongoose = require('mongoose');

// Genre Schema
const countrySchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Country = module.exports = mongoose.model('Country', countrySchema);

// Get Genres
module.exports.getCountries = (callback, limit) => {
	Country.find(callback).limit(limit);
}

// Add Genre
module.exports.addCountry = (country, callback) => {
	Country.create(country, callback);
}

// Update Genre
module.exports.updateCountry = (id, country, options, callback) => {
	var query = {_id: id};
	var update = {
		name: country.name
	}
	Country.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeCountry = (id, callback) => {
	var query = {_id: id};
	Country.remove(query, callback);
}
