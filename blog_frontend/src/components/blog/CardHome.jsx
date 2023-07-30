import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "./card.css";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const CardHome = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      await axiosInstance.get(`blog/blog/`).then((res) => {
        setBlogs(res.data);
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="blog" style={{ marginTop: "5rem", cursor: "default" }}>
        <h1>Latest Blogs</h1>
        <div className="card">
          {blogs.slice(0, 4).map((item) => (
            <div
              className="box boxItems"
              key={item.id}
              style={{ width: "21rem", height: "32rem", cursor: "default", border: "2px solid #acb7c4" }}
            >

              <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#acb7c4", margin: "-1.25rem", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", padding: "0.25rem" }}>
                < AiOutlineUser size="1.25rem" style={{ margin: "0rem 0.5rem" }} />
                <h4>{item.author}</h4>
              </div>

              <div className="image_cover">
                <Link to={`/details/${item.id}`} className="link">
                  <img
                    src={item.cover}
                    alt=""
                    style={{
                      width: "100%",
                      height: "18rem",
                      marginBottom: "1rem",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <Link to={`/category/${item?.category?.category}`}>
                    <h4 style={{ marginTop: "-0.15rem", marginLeft: "-0.25rem" }}>{item.category.category}</h4>
                  </Link>
                </div>
                <h3 style={{ marginTop: "-0.85rem" }}>{item.title}</h3>
                <p className="footer_card" style={{ fontSize: "0.9rem", marginTop: "0rem", color:"#302a2a" }}>{item.desc.slice(0, 60)}...</p>
              </div>
              <div className="date" style={{ display: "flex"}}>
                <AiOutlineCalendar className="icon" style={{ marginLeft: "0.25rem" }} />{" "}
                <p htmlFor="" style={{ fontSize: "0.9rem", color: "black" }}>{item.date.substring(0, 10)}</p>
                <AiOutlineClockCircle className="icon" style={{ marginLeft: "4rem" }} />{" "}
                <p htmlFor="" style={{ fontSize: "0.9rem", color: "black" }}>{item.date.substring(11, 19)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
