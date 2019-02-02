const mongoose = require('mongoose');

// Book Schema
const destinationSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	country:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	image_url:{
		type: String
	},
	book_hotel_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Destination = module.exports = mongoose.model('Destination', destinationSchema);

// Get Books
module.exports.getDestinations = (callback, limit) => {
	Destination.find(callback).limit(limit);
}

// Get Book
module.exports.getDestinationById = (id, callback) => {
	Destination.findById(id, callback);
}

// Add Book
module.exports.addDestination = (destination, callback) => {
	Destination.create(destination, callback);
}

// Update Book
module.exports.updateDestination = (id, destination, options, callback) => {
	var query = {_id: id};
	var update = {
		title: destination.title,
		country: destination.country,
		description: destination.description,
		image_url: destination.image_url,
		book_hotel_url: destination.book_hotel_url
	}
	Destination.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeDestination = (id, callback) => {
	var query = {_id: id};
	Destination.remove(query, callback);
}
