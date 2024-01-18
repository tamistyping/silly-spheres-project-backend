import express from 'express';
const router = express.Router(); // create router
import starController from '../controllers/stars'; // import stars controller

router.get('/', starController.getAllStars);
router.post('/', starController.createStar);
router.put('/:id', starController.updateStar);

export default router;




