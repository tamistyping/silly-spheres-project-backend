const Planet = require('../models/planets') // Import planets model

// Get all Planets
exports.getAllPlanets = async (req, res) => {
  try {
    console.log(req.params.id);
    const { planetId } = req.query
    console.log(req.query);
    const planets = await Planet.find({star: req.params.id})
    res.json(planets)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' }) // If error, send server error
  }
}

exports.getPlanetById = async (req, res) => {
    try {
        const planetId = req.params.id
        const planet = await Planet.findById(planetId)
        if(!planet){
            return res.status(404).json({error: 'Planet not found'})
        }
        res.status(200).json(planet)
    } catch(error){
        console.error('Error in finding planet', error)
        res.status(500).json({error: 'Internal server error'})
    }
}

// Create a new planet
exports.createPlanet = async (req, res) => {
    try {
      const { name, star, size, lengthOfDay, lengthOfYear, atmosphere, moons } = req.body
  
      const newPlanet = new Planet({
        name,
        star,
        size,
        lengthOfDay,
        lengthOfYear,
        atmosphere,
        moons,
      });
  
      await newPlanet.save();
  
      res.status(201).json(newPlanet)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Server error ' + error.message })
    }
  }

// Update a Planet
exports.updatePlanet = async (req, res) => {
  try {
    const { id } = req.params; 
    const { name, star, size, lengthOfDay, lengthOfYear, atmosphere, moons } = req.body;
    // console.log(id)
    const planet = await Planet.findByIdAndUpdate(
      id, 
      { name, star, size, lengthOfDay, lengthOfYear, atmosphere, moons },
      { new: true }
    )
    res.json(planet)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete a Planet
exports.deletePlanet = async (req, res) => {
  try {
    const { id } = req.params
    await Planet.findOneAndDelete({ _id: id})
    res.json({ message: 'Planet deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
