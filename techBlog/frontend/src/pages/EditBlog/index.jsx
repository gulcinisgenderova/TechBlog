
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";
import './style.css'; 

function EditBlog() {
  const myFileInput = useRef();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    getBlog(id);
  }, [id]);

  async function getBlog(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const blogData = await response.json();
      setImage(blogData.image);
      setImagePreview(blogData.image);
      setName(blogData.name);
      setDescription(blogData.description);
      setUsername(blogData.username);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("username", username);

    const data = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (data.ok) {
      window.location.href = "/myBlog";
    }
    console.log("Product updated successfully");
  }

  async function deleteById() {
    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      console.log("Blog deleted successfully");
      window.location.href = "/myBlog";
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        {imagePreview && (
          <div className="imgBox">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <input
          type="file"
          onChange={handleImageChange}
          ref={myFileInput}
          className="noneInput"
        />
        <div
          className="upload"
          onClick={() => {
            myFileInput.current.click();
          }}
        >
         <MdDriveFolderUpload />
        </div>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Edit Blog</button>
        
        <div className="deletBut">
          <button onClick={deleteById} className="delete-button">
            <MdDelete />
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;

