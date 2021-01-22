import express from 'express';
const router = express.Router({ mergeParams: true });
import commentController from '../../../controllers/commentController.js';

router.get('/', commentController.getComments);
router.post('/', commentController.postComment);

export default router;