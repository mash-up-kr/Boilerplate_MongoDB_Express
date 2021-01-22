import hashTagService from '../services/hashtagService.js';

async function getHashTags(req, res) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).json(hashTags);
  } catch (err) {
    res.status(500).json('Error while find hashTags');
  }
}

async function getHashTag(req, res) {
  try {
    const { hashTagId } = req.params;

    const hashTag = hashTagService.getHashTag(hashTagId);
    res.status(200).json(hashTag);
  } catch {
    res.status(500).json('Error while find hashTag');
  }
}

async function addHashTag(req, res) {
  try {
    const { tag } = req.body;

    const hashTag = hashTagService.addHashTag(tag);
    res.status(200).json(hashTag);
  } catch (err) {
    res.status(500).json('Error while add hashTag');
  }
}

async function updateHashTag(req, res) {
  try {
    const { hashTagId } = req.params;
    const { tag } = req.body;

    const hashTag = hashTagService.updateHashTag({
      _id: hashTagId,
      tag,
    });

    res.status(200).json(hashTag);
  } catch (err) {
    res.status(500).json('Error while update hashTag');
  }
}

async function deleteHashTag(req, res) {
  try {
    const { hashTagId } = req.params;

    const result = hashTagService.deleteHashTag(hashTagId);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json('Error while delete hashTag');
  }
}

export default {
  getHashTags,
  getHashTag,
  addHashTag,
  updateHashTag,
  deleteHashTag,
};
