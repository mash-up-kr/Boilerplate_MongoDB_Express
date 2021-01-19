import HashTag from '../models/Hashtag.js';

export default async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}
