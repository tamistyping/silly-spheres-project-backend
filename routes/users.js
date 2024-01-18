import express from 'express';
const router = express.Router(); // create router
import userControllers from '../controllers/users.js'; 

router.post('/login', userControllers.createUser);

export default router;