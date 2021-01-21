import express from 'express';
const router = express.Router();
import { getComments } from '../../../controllers/commentController.js';

router.get('/', getComments);

export default router;