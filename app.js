const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Country=require('./models/country');
Destination =require('./models/destination');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/travel')
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/destinations or /api/countries');
});

app.get('/api/countries', (req, res) => {
	Country.getCountries((err, countries) => {
		if(err){
			throw err;
		}
		res.json(countries);
	});
});

app.post('/api/countries', (req, res) => {
	var country = req.body;
	Country.addCountry(country, (err, country) => {
		if(err){
			throw err;
		}
		res.json(country);
	});
});

app.put('/api/countries/:_id', (req, res) => {
	var id = req.params._id;
	var country = req.body;
	Country.updateCountry(id, country, {}, (err, country) => {
		if(err){
			throw err;
		}
		res.json(country);
	});
});

app.delete('/api/countries/:_id', (req, res) => {
	var id = req.params._id;
	Country.removeCountry(id, (err, country) => {
		if(err){
			throw err;
		}
		res.json(country);
	});
});

app.get('/api/destinations', (req, res) => {
	Destination.getDestinations((err, destinations) => {
		if(err){
			throw err;
		}
		res.json(destinations);
	});
});

app.get('/api/destinations/:_id', (req, res) => {
	Destination.getDestinationById(req.params._id, (err, destination) => {
		if(err){
			throw err;
		}
		res.json(destination);
	});
});

app.post('/api/destinations', (req, res) => {
	var destination = req.body;
	Destination.addDestination(destination, (err, destination) => {
		if(err){
			throw err;
		}
		res.json(destination);
	});
});

app.put('/api/destinations/:_id', (req, res) => {
	var id = req.params._id;
	var destination = req.body;
	Destination.updateDestination(id, destination, {}, (err, destination) => {
		if(err){
			throw err;
		}
		res.json(destination);
	});
});

app.delete('/api/destinations/:_id', (req, res) => {
	var id = req.params._id;
	Destination.removeDestination(id, (err, destination) => {
		if(err){
			throw err;
		}
		res.json(destination);
	});
});

app.listen(1234);
console.log('Running on port 1234...');
