import commentService from '../services/commentService.js'

async function getComments (req, res) {
  try {
    const { postId } = req.params;
    const comments = await commentService.getComments(postId);
    res.status(200).json({
      data: comments
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      data: 'internal server err'
    });
  }
}

async function postComment (req, res) {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const result = await commentService.postComment({
      postId, 
      comment
    });
    res.status(200).json({
      data: result
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: 'internal server err'
    });
  }
}

async function updateComment(req, res) {
  try {
    const { commentId } = req.params;
    const { comment } = req.body;
    const result = await commentService.updateComment({
      commentId,
      comment
    });
    res.status(200).json({
      data: result
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: 'internal server err'
    });
  }
}

export default {
  getComments,
  postComment,
  updateComment
}

