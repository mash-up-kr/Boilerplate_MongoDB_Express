import * as postService from '../services/postService.js';

export const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      let err = new Error('required value cannot be empty');
      err.status = 400;
      throw (err);
    }
    const post = await postService.create({ title, content });
    res.status(201).json({ data: post });
  } catch (err) {
    res.status(500).json({ error: 'add post failed' });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();
    res.status(200).json({ data: posts });
  } catch (err) {
    res.status(500).json({ error: 'get all posts failed' });
  }
};

export const getById = async (req, res) => {
  try {
    const post = await postService.getById(req.params.postId);
    res.status(200).json({ data: post });
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message ?? 'find post by id failed' });
  }
};

export const update = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
      let err = new Error('required value cannot be empty');
      err.status = 400;
      throw (err);
    }
    const result = await postService.update({ id: postId, title, content });
    if (!result.n) {
      res.json({
        message: 'post not found'
      });
    }
    res.json({
      message: 'post updated'
    });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'update post failed' });
  }
};

export const deleteById = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await postService.deleteById(postId);
    if (!result.n) {
      res.json({
        message: 'post not found'
      });
    }
    res.json({
      message: 'post deleted'
    });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'delete post failed' });
  }
};
