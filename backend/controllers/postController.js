const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const newPost = new Post({
      content,
      author: req.user.id,
      files: req.files ? req.files.map(file => ({ filename: file.filename, path: file.path })) : []
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).populate('author', 'username');
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');

  }
};
