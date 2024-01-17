const Star = require('../models/stars'); // Import stars model

// Get all Stars
exports.getAllStars = async (req, res) => {
  try {
    const { starId } = req.query
    const stars = await Star.find({ starId })
    res.json(stars)
  } catch (error) {
    res.status(500).json({ error: 'Server error' }) // If error, send server error
  }
}

// Create a new Star
exports.createStar = async (req, res) => {
  try {
    const { name, image } = req.body
    const { starId } = req.query
    // create new Sun
    const star = new Star({
      name,
      image,
      starId: starId,
    })
    await star.save()
    res.status(201).json(star)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' + error });
  }
}

// Update star
exports.updateStar = async (req, res) => {
  try {
    const { id } = req.params; 
    const { name, image } = req.body;
    const star = await Star.findByIdAndUpdate(
      id, 
      { name, image },
      { new: true }
    )
    console.log(star);
    res.sendStatus(200)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}