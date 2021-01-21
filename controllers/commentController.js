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

export default {
  getComments
}

