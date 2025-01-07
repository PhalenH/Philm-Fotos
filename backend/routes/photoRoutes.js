import { Router } from 'express';
import { uploadPhoto, getPhotos } from '../controllers/photoController';
import protect from '../middleware/authMiddleware';
const router = Router();

router.post('/', protect, uploadPhoto);
router.get('/', protect, getPhotos);

export default router;