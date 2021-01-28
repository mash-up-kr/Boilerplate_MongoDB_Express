import express from 'express';
const router = express.Router({ mergeParams: true });
import commentRouter from './comments/index.js';
import hashTagRouter from './hashtags/index.js';

router.use('/:postId/comments', commentRouter);
router.use('/:postId/hashtags', hashTagRouter);

import * as postController from '../../controllers/postController.js';

router.get('/', postController.getAll);
router.get('/:postId', postController.getById);
router.post('/', postController.create);
router.put('/:postId', postController.update);
router.delete('/:postId', postController.deleteById);

export default router;
