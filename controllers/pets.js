const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) => {
	console.log('hitting the main page');
	pet.find((err, pets) => {
		if(err){
			res.send('there was an error with the database');
		} else {
			console.log(pets);
			res.render('index', { pet: pets });
		}
	})
})

router.get('/new', (req, res) => {
	console.log('hitting the new pet page');
	res.render('new', {});
})

router.get('/:index', (req, res) => {
	console.log('hitting one of the show pet pages');
	pet.findById(req.params.index, (err, pet) => {
		res.render('show', { pet: pet });
	})
})

router.get('/:index/edit', (req, res) => {
	console.log('hitting the edit pet page');
	console.log(req.params.index);
	pet.findById(req.params.index, (err, pet) => {
		if(err){
			res.send('there was an error with the database on the edit page');
		} else {
			res.render('edit', { pet: pets });
		}
	})
})

router.post('/create', (req, res) => {
	console.log('activating post route');
	console.log(req.body);
	if(req.body.goodToOwn === 'on'){
		req.body.goodToOwn = true;
	} else {
		req.body.goodToOwn = false;
	}
	pet.create(req.body, (err, pet) => {
		if(err){
			res.send('there was an error when creating the pet');
		} else {
			console.log(pet);
			res.redirect('/pets');
		}
	})
})

router.put('/:index/edit', (req, res) => {
	console.log('activating edit route');
	console.log(req.body);
	if(req.body.goodToOwn === 'on'){
		req.body.goodToOwn = true;
	} else {
		req.body.goodToOwn = false;
	}
	pet.findByIdAndUpdate(req.params.index, (err, pet) => {
		if(err){
			res.send('there was an error when editing the pet');
		} else {
			res.redirect('/pets');
		}
	})
})

router.delete('/:index', (req, res) => {
	console.log('activating delete route');
	console.log(req.params.index);
	pet.findByIdAndRemove(req.params.index, (err, pet) => {
		if(err){
			res.send('there was an error when deleting the pet');
		} else {
			res.redirect('/pets');
		}
	})
})



module.exports = router;
