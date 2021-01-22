import Comment from '../models/Comment.js';

async function getComments(postId) {
  const comments = await Comment.find({ 
    "postId": postId
  });
  return comments;
}

async function postComment(commentDoc) {
  const comment = await Comment.create({
    postId: commentDoc.postId,
    comment: commentDoc.comment
  });
  return comment;
} 

async function updateComment(commentDoc) {
  const comment = await Comment.updateOne({
    _id: commentDoc.commentId
  },
  {
    comment: commentDoc.comment
  }
  );
  return comment;
}

export default {
  getComments,
  postComment,
  updateComment
}