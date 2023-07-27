import { useState } from "react";
import axiosInstance from "../../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const { data } = await axiosInstance.post(
      `api/login/`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      { withCredentials: true }
    );

    localStorage.clear();
    localStorage.setItem("access_token", data.tokens.access);
    localStorage.setItem("refresh_token", data.tokens.refresh);
    axiosInstance.defaults.headers["Authorization"] =
      "JWT " + localStorage.getItem("access_token"); //pass authorization token to all cors origin
    console.log("Login successful", data);
    window.location.href = "/"; //opens tab in the same browser unlike window.open() which will open tab in a new browser
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
        Login
      </h1>
      <div
        className="Auth-form-container"
        style={{ marginTop: "-2rem", marginBottom: "11rem", backgroundColor:"whitesmoke" }}
      >
        <form className="Auth-form" onSubmit={submit} style={{width:"30rem", backgroundColor:"rgb(228, 228, 228)", color:"black"}}>
          <div className="Auth-form-content">
            {/* <h3
            className="Auth-form-title"
            style={{
              marginBottom: "2rem",
              marginTop: "-1rem",
              fontSize: "x-large",
            }}
          >
            Log In
          </h3> */}
            <div className="form-group mt-3" style={{ marginBottom: "0.5rem" }}>
              <label style={{fontWeight:"bold"}}>Email:</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Email"
                name="Email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{backgroundColor:"white", marginTop:"0.25rem"}}
              />
            </div>
            <div className="form-group mt-3">
              <label style={{fontWeight:"bold"}}>Password:</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{backgroundColor:"white", marginTop:"0.25rem"}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                style={{
                  color: "white",
                  fontSize: "medium",
                  backgroundColor: "black",
                  width: "100% ",
                  padding: "0.7rem",
                  borderRadius: "0.5rem",
                  marginTop: "2rem",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// import { useState } from "react";
// import axiosInstance from "../../axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//     };

//     const { data } = await axiosInstance.post(
//       `api/login/`,
//       user,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//       { withCredentials: true }
//     );

//     localStorage.clear();
//     localStorage.setItem("access_token", data.tokens.access);
//     localStorage.setItem("refresh_token", data.tokens.refresh);
//     axiosInstance.defaults.headers["Authorization"] =
//       "JWT " + localStorage.getItem("access_token"); //pass authorization token to all cors origin
//     console.log("Login successful", data);
//     window.location.href = "/"; //opens tab in the same browser unlike window.open() which will open tab in a new browser
//   };

//   return (
//     <>
//       <h1
//         style={{
//           textAlign: "center",
//           backgroundColor: "rgba(169, 112, 23, 0.82)",
//           color: "white",
//           padding: "10px",
//         }}
//       >
//         Login
//       </h1>
//       <div
//         className="Auth-form-container"
//         style={{ marginTop: "-2rem", marginBottom: "15rem" }}
//       >
//         <form className="Auth-form" onSubmit={submit}>
//           <div className="Auth-form-content">
//             {/* <h3
//             className="Auth-form-title"
//             style={{
//               marginBottom: "2rem",
//               marginTop: "-1rem",
//               fontSize: "x-large",
//             }}
//           >
//             Log In
//           </h3> */}
//             <div className="form-group mt-3" style={{ marginBottom: "0.2rem" }}>
//               <label>Email:</label>
//               <input
//                 className="form-control mt-1"
//                 placeholder="Enter Email"
//                 name="Email"
//                 type="email"
//                 value={email}
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password:</label>
//               <input
//                 name="password"
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button
//                 type="submit"
//                 style={{
//                   color: "white",
//                   fontSize: "medium",
//                   backgroundColor: "black",
//                   width: "100% ",
//                   padding: "0.7rem",
//                   borderRadius: "0.5rem",
//                   marginTop: "2rem",
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
