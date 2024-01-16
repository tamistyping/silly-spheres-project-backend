const Star = require('../models/stars'); // Import stars model

// Get all stars
exports.getAllStars = async (req, res) => {
  try {
    const { starId } = req.query
    const stars = await Star.find({ starId })
    res.json(stars)
  } catch (error) {
    res.status(500).json({ error: 'Server error' }) // If error, send server error
  }
}

// Create a new Sun
exports.createStar = async (req, res) => {
  try {
    const { name } = req.body
    const { starId } = req.query
    // create new Sun
    const star = new Star({
      name,
      starId: starId,
    })
    await star.save()
    res.status(201).json(star)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' + error });
  }
}