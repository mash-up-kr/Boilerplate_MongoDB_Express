import express from 'express';
const router = express.Router({ mergeParams: true });
import commentRouter from './comments/index.js';
import hashTagRouter from './hashtags/index.js';

router.use('/:postId/comments', commentRouter);
router.use('/:postId/hashtags', hashTagRouter);

export default router;
