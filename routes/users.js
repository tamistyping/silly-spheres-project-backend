const express = require('express');
const router = express.Router(); // create router
const userController = require('../controllers/users') 

router.post('/login', userController.createUser)

module.exports = router;