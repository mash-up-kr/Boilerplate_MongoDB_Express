import mongoose from 'mongoose';
const { Schema } = mongoose;

const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
  postId: {
    type: ObjectId,
    required: true,
    ref: 'Post'
  },
  comment: {
    type: String,
    requried: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Comment', commentSchema);