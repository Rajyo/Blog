import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { AiOutlineSolution } from "react-icons/ai";
import logo from "../../assets/images/user-icon.png";
// import { useNavigate } from "react-router-dom";

const User = () => {
  var [profile, setProfile] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const getProfile = () => {
    axiosInstance(`api/userProfile/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="profile">
        {profile ? (
          <>
            <button
              className="img"
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
            >
              {/* <img
                src={profile.profile.avatar}
                alt=""
                style={{
                  width: "3rem",
                  height: "3rem",
                  marginTop: "0.3rem",
                  marginRight: "0.5rem",
                }}
              /> */}
              { profile.profile.avatar == null ? 
            <img
              src={logo}
              alt=""
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              style={{
                top: "-1.5rem",
                right: "-1rem",
                width: "3rem",
                height: "3rem",
                marginBottom:"-0.3rem",
                marginTop:"0.1rem"
              }}
            />  :
            <img
              src={profile.profile.avatar}
              alt=""
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              style={{
                top: "-1.5rem",
                right: "-1rem",
                width: "3rem",
                height: "3rem",
                marginBottom:"-0.3rem",
                marginTop:"0.1rem"
              }}
          /> }
            </button>
            {profileOpen && (
              <div
                className="openProfile boxItems"
                onClick={() => {
                  setProfileOpen(false);
                }}
              >
                <Link to="/account" state={{ profile: profile }}>
                  <div className="image" >
                    <div className="img" style={{marginTop:"0.25rem", marginLeft:"-0.35rem"}}>
                      {profile.profile.avatar == null ? <img src={logo} alt="" /> : <img src={profile.profile.avatar} alt="" />}
                    </div>
                    <div className="text" style={{marginLeft:"-0.35rem"}}>
                      <h4 style={{ textTransform: "capitalize", fontSize:"1rem" }}>
                        {profile.profile.name}
                      </h4>
                      <label>@{profile.username}</label>
                    </div>
                  </div>
                </Link>
                <hr style={{ marginBottom: "1.5rem" }}></hr>

                <Link to="/account" state={{ profile: profile }}>
                  <button className="box" style={{marginTop:"-0.25rem"}}>
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>

                <Link to="/createBlog" state={{ profile: profile }}>
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Blog</h4>
                  </button>
                </Link>

                <Link to="/myBlogs" state={{ profile: profile }}>
                  <button className="box">
                    <AiOutlineSolution size="1.35rem" className="icon" />
                    <h4>My Blogs</h4>
                  </button>
                </Link>

                <Link to="/logout">
                  <button className="box">
                    <BiLogOut className="icon" />
                    <h4>Log Out</h4>
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};

export default User;
