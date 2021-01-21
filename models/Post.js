import mongoose from 'mongoose';
const { model, Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  hashtags: [
    {
      type: ObjectId,
      ref: 'HashTag'
    }
  ]
});

export default model('Post', postSchema);
