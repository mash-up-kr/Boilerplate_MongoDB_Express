import express from 'express';
import postRouter from './posts/index.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello, mobal-mobal Client. Server is running!');
});

router.use('/posts', postRouter);

export default router;
