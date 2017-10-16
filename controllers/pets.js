const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) => {
	console.log('hitting the main page');
	res.send('this is the index page');
})

router.get('/new', (req, res) => {
	console.log('hitting the new pet page');
	res.send('this is the new pet page');
})

router.get('/:index', (req, res) => {
	console.log('hitting one of the show pet pages');
	res.send('this is one of the show pet pages');
})



module.exports = router;
