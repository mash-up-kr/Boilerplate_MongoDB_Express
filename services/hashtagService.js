import HashTag from '../models/Hashtag.js';

async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

async function addHashTag(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTags;
}

async function updateHashTag(hashTagDoc) {
  const hashTag = await HashTag.updateOne(
    {
      _id: hashTagDoc._id,
    },
    {
      tag: hashTagDoc.tag,
    }
  );

  return hashTag;
}

async function deleteHashTag(id) {
  await HashTag.deleteOne({ _id: id });

  return id;
}

export default {
  getHashTags,
  addHashTag,
  updateHashTag,
  deleteHashTag,
};
