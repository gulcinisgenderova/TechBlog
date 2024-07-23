import { BlogModel } from '../models/blogModel.js';

export const getAll = async (req, res) => {
  try {
    // const blogs = await BlogModel.find({});
    const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

export const createBlog = async (req, res) => {
  try {
    const { username, name, description } = req.body;
    const blog = new BlogModel({
      username,
      name,
      description,
      image: "http://localhost:3000/image/" + req.uploadFileName
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.error('Error in createBlog:', error);
    res.status(500).send('Server Error');
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, name, description } = req.body;


    const blog = await BlogModel.findById(id);
    if (!blog) {

      return res.status(404).json({ msg: 'Blog not found' });
    }


    if (blog.username === req.body.username) {
      const updateData = { username, name, description };


      if (req.file) {
        updateData.image = "http://localhost:3000/image/" + req.uploadFileName;
      }


      const updatedBlog = await BlogModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );
      res.json(updatedBlog);
    } else {

      return res.status(403).json({ msg: 'Unauthorized action' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};


export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.json({ msg: 'Blog deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};
