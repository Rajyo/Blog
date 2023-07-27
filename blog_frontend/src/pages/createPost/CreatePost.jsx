import React, { useState, useRef, useEffect } from "react";
import "./createPost.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import axiosInstance from "../../axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      await axiosInstance.get(`blog/category`).then((res) => {
        console.log(res.data);
        setCategory(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const sendPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cover", selectedFile);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("category", selectedCategory);
    formData.append("author", location.state.profile.username);

    axios
      .post(`http://127.0.0.1:8000/blog/createBlog/`, formData)
      .then((res) => {
        console.log("File Upload success", res);
        navigate("/");
      })
      .catch((err) => console.log("File Upload Error", err));
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
        }}
      >
        Create Blog
      </h1>
      <form
        onSubmit={sendPost}
        style={{ marginTop: "2rem", marginBottom: "2rem", backgroundColor: "#d1b0ea24", width:"40rem" }}
      >
        <label>
          Enter Title:
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter Blog Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "1.3rem" }}>
          Enter Category:
          <select
            id="cars"
            name="category"
            value={selectedCategory}
            required
            onChange={(e) => { setSelectedCategory(e.target.value) }}
            style={{
              width: "100%",
              padding: "0.4rem 1rem",
              backgroundColor: "#d1b0ea24",
              fontSize: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <option>Select Category</option>
            {
              Array.from(category).map((item) => (
                <option value={item.category}>{item.category}</option>
              ))
            }
          </select>
        </label>
        <label>
          Enter Description:
          <textarea
            name="desc"
            value={desc}
            required
            placeholder="Enter Description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <label>
          Enter Image:
          <input
            type="file"
            required
            className="image_form"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button
            onClick={(e) => fileInput.current && fileInput.current.click()}
            className="btn btn-primary"
          />
        </label>

        <input type="submit" className="submit_form" style={{ marginBottom: "-1rem" }} />
      </form>
    </>
  );
};

export default CreatePost;
