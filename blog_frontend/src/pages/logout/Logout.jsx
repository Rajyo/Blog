import { useEffect } from "react";
import axiosInstance from "../../axios";
//import axios from "axios";

export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const token = {
          refresh_token: localStorage.getItem("refresh_token"),
        };
        console.log(token);
        const { data } = await axiosInstance.post(
          `api/logout/`,
          token,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          { withCredentials: true }
        );

        console.log("logout", data);
        localStorage.clear();
        axiosInstance.defaults.headers["Authorization"] = null;
        window.location.href = "/login";
      } catch (e) {
        console.log("logout not working");
        localStorage.clear();
        axiosInstance.defaults.headers["Authorization"] = null;
        window.location.href = "/login";
      }
    })();
  }, []);

  // console.log(data)
  // localStorage.clear();
  // localStorage.setItem('token', data.access);
  // localStorage.setItem('refresh_token', data.refresh);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
  // window.location.href = '/'

  return (
    <div>
      <h2>Logout</h2>
    </div>
  );
};

export default Logout;
