import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // CSS dosyanızı uygun şekilde ekleyin

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
      <div className='mainContent'>
        <img src="sophia.jpg" alt="Sophia smiling" />
      </div>
      <div className="grid-container">
        {blogs.map(blog => (
          <div key={blog.id} className="grid-item">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
              <img className="w-full" src={blog.img} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.name}</div>
                <p className="text-gray-700 text-base">
                  {getExcerpt(blog.description, 1)}
                </p>
                <p className="text-red-700 text-base">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
