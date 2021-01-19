import mongoose from 'mongoose';

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const hashTagSchema = new Schema({
  tag: {
    type: String,
    required: true,
  },
  postIds: [
    {
      type: ObjectId,
      ref: 'Post',
    },
  ],
});

export default mongoose.model('HashTag', hashTagSchema);
