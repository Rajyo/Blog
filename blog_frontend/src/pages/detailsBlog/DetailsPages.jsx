import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "./details.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RecommendBlog from "../../components/recommendBlog/RecommendBlog";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar
} from "react-icons/ai";


export const DetailsPages = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0)
    getDetails();
  }, [id]);

  const getDetails = async () => {
    try {
      await axiosInstance.get(`blog/blog/${id}`).then((res) => {
        setBlog(res.data);
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
          marginBottom: "1rem",
        }}
      >
        Details Page
      </h1>
      {blog ? (
        <>
          <section className="singlePage">
            <div className="container">
                <div
                  className="left"
                  style={{
                  flexBasis: "50%",
                  // backgroundColor: "goldenrod",
                  }}
                >
                <img src={blog.cover} alt="" style={{ maxHeight:"34rem",width:"auto" , padding:"2rem 0rem" }} />
              </div>

              <div
                className="right"
                style={{
                  flexBasis: "50%",
                  padding: "10px",
                  // backgroundColor: "gold",
                }}
              >
                <div style={{display:"flex"}}>
                <h2 style={{color:"black", marginBottom:"-0.5rem", marginTop:"0.5rem"}}>Title:</h2>
                <p className="title" style={{marginLeft:"1rem"}}>{blog.title}</p>
                </div>

                <h3 style={{color:"black", marginTop:"1.5rem"}}>Author:</h3>
                  <p style={{color:"black"}}>
                  {blog.author}
                  </p>

                <h3 style={{color:"black", marginTop:"1.5rem"}}>Category:</h3>
                <Link
                  to={`/category/${blog.category.category}`}
                  style={{ fontSize: "large", marginBottom: "1rem" }}
                >
                  <p style={{color:"black"}}>
                  {blog.category.category}
                  </p>
                </Link>

                <p className="start">
                  <h3
                    style={{
                      fontSize: "large",
                      textAlign: "start",
                      color: "black",
                      marginTop:"0.75rem"
                    }}
                  >
                    Description:
                  </h3>
                  <p className="desc" style={{color:"black"}}>{blog.desc.slice(0, 650)}</p>
                </p>
                <div className="date time" style={{display:"flex", margin:"1rem 0rem 0.5rem 0rem", color:"black"}}>
                  <AiOutlineCalendar size="1.4rem" className="icon" />
                  <label htmlFor="">{blog.date.substring(0,10)}</label>
                  <AiOutlineClockCircle size="1.4rem" className="icon" style={{marginLeft:"4rem"}}/>
                  <label htmlFor="">{blog.date.substring(11,19)}</label>
                </div>
              </div>
            </div>
          </section>
          <RecommendBlog cat={blog.category.category} />
        </>
      ) : null}

      {/* <RecommendBlog category={blog.category.category} /> */}
      {/* <RecommendBlog /> */}
    </>
  );
};
