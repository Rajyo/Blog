import axiosInstance from "../../axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser
} from "react-icons/ai";


const RecommendBlog = ({ cat }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      await axiosInstance.get(`blog/category/${cat}`).then((res) => {
        setCategory(res.data);
        console.log(res.data);
      });
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      {category ? (
        <>
          <section className="blog">
            <h2 style={{ textAlign: "center" }}>Blog Recommendation</h2>
            <div
              className="card_container"
              style={{
                margin: "0px",
                padding: "0px",
                marginTop: "1rem"
              }}
            >
              {category.blogs.map((item) => (
                <div
                  className="box boxItems"
                  key={item.id}
                  style={{
                    width: "20rem",
                    height: "23rem",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    backgroundColor: "#859c5f7a",
                    cursor: "default", border: "2px solid #acb7c4"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#acb7c4", margin: "-1.25rem", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", padding: "0.25rem", marginBottom:"1rem" }}>
                    < AiOutlineUser size="1.25rem" style={{ margin: "0rem 0.5rem" }} />
                    <h4>{item.author}</h4>
                  </div>

                  <Link to={`/details/${item.id}`} className="link">
                    <div className="img">
                      <img
                        src={item.cover}
                        alt=""
                        style={{ marginTop: "-0.5rem", marginBottom: "0.5rem", height: "14rem" }}
                      />
                    </div>
                  </Link>
                  <div className="details">
                    <h4 style={{ marginTop: "-0.25rem" }}>{item.title}</h4>

                    <p style={{ fontSize: "0.9rem", marginTop: "0.1rem" , color:"#302a2a" }}>{item.desc.slice(0, 35)}...</p>

                    <div className="date" style={{marginBottom:"-0.25rem"}}>
                      <AiOutlineCalendar size="1rem" className="icon" />
                      <p htmlFor="" style={{ fontSize: "0.8rem" , color: "black" }}>{item.date.substring(0, 10)}</p>
                      <AiOutlineClockCircle size="1rem" className="icon" style={{ marginLeft: "4rem" }} />
                      <p htmlFor="" style={{ fontSize: "0.8rem" , color: "black" }}>{item.date.substring(11, 19)}</p>
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
export default RecommendBlog;
