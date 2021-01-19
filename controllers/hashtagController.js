import hashTagService from '../services/hashtagService.js';

export async function getHashTags(res, req) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).send(hashTags);
  } catch (err) {
    res.status(500).send('Error while find hashTags');
  }
}
