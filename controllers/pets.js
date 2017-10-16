const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) => {
	console.log('hitting the main page');
	res.send('this is the index page');
})



module.exports = router;
