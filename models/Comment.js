import mongoose, { Schema } from 'mongoose';

const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
  postIndex: {
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