import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  username: String,
  name: String,
  description: String, 
  img: String
}, {timestamps: true}
);

export const BlogModel = mongoose.model('BlogModel', blogSchema);
