import HashTag from '../models/Hashtag.js';

async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

async function addHashTags(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTags;
}

async function updateHashTags(hashTagDoc) {
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

export default {
  getHashTags,
  addHashTags,
  updateHashTags,
};
