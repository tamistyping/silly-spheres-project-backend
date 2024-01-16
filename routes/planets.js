const express = require('express');
const router = express.Router(); // create router
const planetsController = require('../controllers/planets') // import planets controller

// Route for getting all planets
router.get('/', planetsController.getAllPlanets)

// Route for getting a specific planet by ID
router.get('/:id', planetsController.getPlanetById)

// Route for creating a new planet
router.post('/', planetsController.createPlanet)

// Route for updating a planet by ID
router.put('/:id', planetsController.updatePlanet)

// Route for deleting a planet by ID
router.delete('/:id', planetsController.deletePlanet)

module.exports = router