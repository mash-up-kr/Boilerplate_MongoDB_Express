import HashTag from '../models/Hashtag.js';

async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

async function addHashTags(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTags;
}

export default {
  getHashTags,
  addHashTags,
};
