import HashTag from '../models/Hashtag.js';

async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

async function getHashTag(hashTagId) {
  const hashTag = await HashTag.findOne({ _id: hashTagId });

  return hashTag;
}

async function addHashTag(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTag;
}

async function addHashTags(tags) {
  const hashTags = await HashTag.insertMany(tags);

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

async function getHashTagByTags(hashTags) {
  const hashTagsDoc = await HashTag.find({ tag: { $in: hashTags } });

  return hashTagsDoc;
}

export default {
  getHashTags,
  getHashTag,
  addHashTag,
  addHashTags,
  updateHashTag,
  deleteHashTag,
  getHashTagByTags,
};
