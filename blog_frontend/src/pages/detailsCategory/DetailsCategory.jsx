import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";
import "./detailsCategory.css";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const DetailsCategory = () => {
  const { categoryParam } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      await axiosInstance.get(`blog/category/${categoryParam}`).then((res) => {
        setCategory(res.data);
        console.log(res.data);
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      {/* <div>DetailsCategory</div> */}
      {category ? (
        <>
          <div className="container_details">
            <h1 style={{ textAlign: "center" }}>
              Category: {category.category}
            </h1>
          </div>

          <section className="blog">
            <div
              className="card_container"
              style={{
                margin: "0px",
                padding: "0px",
              }}
            >
              {category.blogs.map((item) => (
                <div
                  className="box boxItems"
                  key={item.id}
                  style={{
                    width: "25rem",
                    height: "27rem",
                    marginBottom: "3rem",
                    marginTop: "1rem",
                    backgroundColor:"#859c5f7a",
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
                  <div className="details" style={{marginTop:"-0.75rem"}}>
                      <h3>{item.title}</h3>
                      <p style={{fontSize:"0.9rem", marginTop:"0.4rem", color:"#302a2a" }}>{item.desc.slice(0, 90)}...</p>
                    <div className="date" style={{display:"flex"}}>
                  <AiOutlineCalendar className="icon" style={{marginLeft:"0.25rem"}}/>{" "}
                  <p htmlFor="" style={{fontSize:"0.9rem", color: "black" }}>{item.date.substring(0,10)}</p>
                  <AiOutlineClockCircle className="icon" style={{marginLeft:"8rem"}}/>{" "}
                  <p htmlFor="" style={{fontSize:"0.9rem", color: "black" }}>{item.date.substring(11,19)}</p>
                </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};
export default DetailsCategory;
