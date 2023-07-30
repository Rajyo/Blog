import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "./blog.css";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      await axiosInstance.get(`blog/blog/`).then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="blog">
        <div
          className="card_container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {blogs.map((item) => (
            <div
              className="box boxItems"
              key={item.id}
              style={{
                width: "25rem",
                height: "29.5rem",
                marginBottom: "3rem",
                marginTop: "1rem",
                cursor: "default", border: "2px solid #acb7c4"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#acb7c4", margin: "-1.25rem", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", padding: "0.25rem" }}>
                < AiOutlineUser size="1.25rem" style={{ margin: "0rem 0.5rem" }} />
                <h4>{item.author}</h4>
              </div>

              <Link to={`/details/${item.id}`}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </Link>
              <div className="details" style={{marginTop:"-0.25rem"}}>
                <div className="tag">
                  <AiOutlineTags
                    style={{
                      fontSize: "20px",
                      color: "black",
                    }}
                  />
                  <Link to={`/category/${item.category.category}`}>
                  <h4 style={{ marginTop: "-0.15rem" }}>{item.category.category}</h4>
                  </Link>
                </div>
                <h3 style={{ marginTop: "-0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", marginTop: "0.4rem", color:"#302a2a" }}>{item.desc.slice(0, 80)}...</p>
                <div className="date" style={{ display: "flex" }}>
                  <AiOutlineCalendar className="icon" style={{ marginLeft: "0.25rem" }} />{" "}
                  <p htmlFor="" style={{ fontSize: "0.9rem", color: "black"  }}>{item.date.substring(0, 10)}</p>
                  <AiOutlineClockCircle className="icon" style={{ marginLeft: "8rem" }} />{" "}
                  <p htmlFor="" style={{ fontSize: "0.9rem", color: "black"  }}>{item.date.substring(11, 19)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
