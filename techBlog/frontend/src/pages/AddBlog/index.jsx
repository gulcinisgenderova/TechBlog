import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../AddBlog/style.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function AddBlog() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const { decode } = useContext(UserContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3000/api/blogs/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleAdd(values) {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("image", image);

    fetch("http://localhost:3000/api/blogs/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function deleteById(id) {
    fetch("http://localhost:3000/api/blogs/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function search(e) {
    setInput(e.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  return (
    <>
  {decode ? (
<>

<div className="addPage">
        <div className="forms">
          <Formik
            initialValues={{ username: "", name: "", description: "" }}
            validationSchema={Yup.object({
              username: Yup.string().required("Please enter username"),
              name: Yup.string().required("Please enter name"),
              description: Yup.string().required("Please enter description"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handleAdd(values);
                setSubmitting(false);
                resetForm();
                setImage(null);
              }, 400);
            }}
          >
            <Form className="form">
              <label htmlFor="username">Author</label>
              <Field
                name="username"
                type="text"
                className="field"
                placeholder="Author"
              />
              <ErrorMessage name="username" component="span" />

              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                className="field"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="span" />

              <label htmlFor="description">Description</label>
              <Field
                name="description"
                type="text"
                className="field"
                placeholder="Description"
              />
              <ErrorMessage name="description" component="span" />

              <label htmlFor="image">Image</label>
              <input
                name="image"
                type="file"
                className="field"
                onChange={handleImageChange}
              />
              <ErrorMessage name="image" component="span" />

              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
      </div>
</>

  ):(
    <Navigate to={"/login"}></Navigate>
  )}
    </>
  );
}

export default AddBlog;
