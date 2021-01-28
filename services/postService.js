import Post from '../models/Post.js';
import Hashtag from '../models/Hashtag.js';

export const create = async (data) => {
  const post = new Post(data);
  const hashtags = data.content.match(/#[^\s#]+/g).map(
    tag => tag.slice(1).toLowerCase()
  );
  const tags = await Hashtag.find({ tag: { $in: hashtags } });
  const existedTags = tags.map(t => t.tag);
  const newTags = await Hashtag.insertMany(
    hashtags.filter(tag => !existedTags.includes(tag)).map(
      tag => {
        return { tag };
      }
    )
  );
  tags.push(...newTags);
  post.hashtags.push(...tags.map(tag => tag._id));
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
  const result = await Post.updateOne({
    _id: id
  }, val);
  return result;
};

export const deleteById = async (id) => {
  const result = await Post.remove({ _id: id });
  return result;
};
