import React from "react";
import { Card } from "../../components/blog/Card";

const Blog = () => {
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
        Blog
      </h1>
      <Card />
    </>
  );
};
export default Blog;
