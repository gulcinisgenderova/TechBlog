import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi'; 
import { Link, NavLink, Navigate } from 'react-router-dom';
import './style.css';
import { UserContext } from '../../context/userContext';

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { decode } = useContext(UserContext);
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
      {decode ? (
        <>
          <div className="logoBox">
            <h1>My Blog</h1>
          </div>
          <div className="grid-container">
            {blogs.map(blog => (
              <NavLink
                key={blog._id}
                to={`/detail/${blog._id}`}
                className="grid-item-link"
              >
                <div key={blog.id} className="grid-item">
                  <div className="card">
                    <div className="relative">
                      <img className="w-full imgs" src={blog.image} alt={blog.name} />
                      <div className="edit-button-container">
                        <button className="edit-button">
                          <Link to={`/editBlog/${blog._id}`}>
                            <FiEdit className="edit-icon" />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-title">{blog.name}</div>
                      <p className="card-text">
                        {getExcerpt(blog.description, 1)}
                      </p>
                      <p className="card-text">
                        Author: {blog.username}
                      </p>
                      <p className="card-text">
                        Date: {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default MyBlog;
