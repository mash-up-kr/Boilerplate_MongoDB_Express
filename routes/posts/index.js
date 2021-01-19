import express from 'express';
import hashTagRouter from './hashtags/index.js';

const router = express.Router();

router.use('/:postId/hashtags', hashTagRouter);

export default router;
