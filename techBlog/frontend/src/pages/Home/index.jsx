import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Home/style.css'; 

import HomeSlider from './slider';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/blogs/')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const getExcerpt = (text, sentenceCount) => {
    const sentences = text.split('. ');
    return sentences.slice(0, sentenceCount).join('. ') + (sentences.length > sentenceCount ? '...' : '');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <>
      <div >
      <HomeSlider/>
      </div>
      <div className="grid-container">
      {blogs.map(blog => (
        <NavLink 
          key={blog._id} 
          to={`/detail/${blog._id}`} 
          className="grid-item-link"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
            <img className="w-full imgs" src={blog.image} alt={blog.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.name}</div>
              <p className="text-gray-700 text-base dateBy">
                {getExcerpt(blog.description, 1)}
              </p>
              <p className="text-black-700 text-base dateBy">
                Author: {blog.username}
              </p>
              <p className="text-red-700 text-base dateBy">
                Date: {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </NavLink>
        ))}
      </div>
    </>
  );
}

export default Home;
