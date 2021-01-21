import express from 'express';
const router = express.Router();
import postRouter from './posts/index.js';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello, mobal-mobal Client. Server is running!');
});
router.use('/posts', postRouter);

export default router;
