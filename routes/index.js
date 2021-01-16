import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello, mobal-mobal Client. Server is running!');
});
export default router;
