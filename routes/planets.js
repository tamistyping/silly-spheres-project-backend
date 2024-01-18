import express from 'express';
import planetsController from '../controllers/planets.js'; // import planets controller

const router = express.Router(); // create router

// Route for getting all planets
router.get('/list/:id', planetsController.getAllPlanets);

// Route for getting a specific planet by ID
router.get('/:id', planetsController.getPlanetById);

// Route for creating a new planet
router.post('/new', planetsController.createPlanet);

// Route for updating a planet by ID
router.put('/:id', planetsController.updatePlanet);

// Route for deleting a planet by ID
router.delete('/:id', planetsController.deletePlanet);

export default router;