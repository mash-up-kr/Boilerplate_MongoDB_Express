import Post from '../models/Post.js';
import Hashtag from '../models/Hashtag.js';
import hashTagService from './hashtagService.js';

export const create = async (data) => {
  const post = new Post(data);
  const hashtags = normalizeHashTag(data.content);
  const tags = await hashTagService.getHashTagByTags(hashtags);
  const existedTags = tags.map((t) => t.tag);
  const newTags = hashtags.filter((tag) => !existedTags.includes(tag)).map((tag) => tag);

  await hashTagService.addHashTags(newTags);

  tags.push(...newTags);
  post.hashtags.push(tags.map((tag) => tag._id));
  await post.save();
  return post;
};

export const getAll = async () => {
  const posts = await Post.find().populate('hashtags');
  return posts;
};

export const getById = async (id) => {
  const post = await Post.findById(id).populate('hashtags');
  return post;
};

export const update = async (data) => {
  const { id, ...val } = data;
  const result = await Post.updateOne(
    {
      _id: id,
    },
    val
  );
  return result;
};

export const deleteById = async (id) => {
  const result = await Post.remove({ _id: id });
  return result;
};

function normalizeHashTag(content) {
  const regExp = /#[^\s#]+/g;

  return content.match(regExp).map((tag) => tag.slice(1).toLowerCase());
}
