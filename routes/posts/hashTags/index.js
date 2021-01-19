import express from 'express';
import { getHashTags } from '../../../controllers/hashtagController.js';

const router = express.Router();

router.get('/', getHashTags);

export default router;
