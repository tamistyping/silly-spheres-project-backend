import express from 'express';
import userControllers from '../controllers/users.js'; 

const router = express.Router(); // create router

router.post('/login', userControllers.createUser);

export default router;