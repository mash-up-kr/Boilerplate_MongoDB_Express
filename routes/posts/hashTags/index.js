import express from 'express';
import hashtagController from '../../../controllers/hashtagController.js';

const router = express.Router();

router.get('/', hashtagController.getHashTags);
router.get('/:hashTagId', hashtagController.getHashTag);
router.post('/', hashtagController.addHashTag);
router.put('/:hashTagId', hashtagController.updateHashTag);
router.delete('/:hashTagId', hashtagController.deleteHashTag);

export default router;
