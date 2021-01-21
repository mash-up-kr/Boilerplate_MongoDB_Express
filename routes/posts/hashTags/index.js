import express from 'express';
import hashtagController from '../../../controllers/hashtagController.js';

const router = express.Router();

router.get('/', hashtagController.getHashTags);
router.post('/', hashtagController.addHashTag);

export default router;
