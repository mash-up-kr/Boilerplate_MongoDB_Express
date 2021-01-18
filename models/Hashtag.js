import mongoose, { Schema } from 'mongoose';

const hashTagSchema = new Schema({
  tag: {
    type: String,
    required: true,
    ref: 'Post'
  },
})

export default mongoose.model('HashTag', hashTagSchema);
