const express = require('express');
const router = express.Router(); // create router
const starController = require('../controllers/stars') // import stars controller

router.get('/', starController.getAllStars);
router.post('/', starController.createStar);

module.exports = router;