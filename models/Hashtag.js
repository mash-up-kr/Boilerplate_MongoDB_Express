import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const hashTagSchema = new Schema({
  tag: {
    type: String,
    required: true
  },
  postIds: [{
    type: ObjectId
  }],

})

export default mongoose.model('HashTag', hashTagSchema);
