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

export default {
  getComments,
  postComment
}