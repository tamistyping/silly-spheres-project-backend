import express from 'express';
import starController from '../controllers/stars.js'; // import stars controller

const router = express.Router(); // create router

router.get('/', starController.getAllStars);
router.post('/', starController.createStar);
router.put('/:id', starController.updateStar);

export default router;




