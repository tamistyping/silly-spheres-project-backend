import express from 'express';
const router = express.Router(); // create router
import userController from '../controllers/users'; 

router.post('/login', userController.createUser);

export default router;