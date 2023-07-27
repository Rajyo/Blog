import { useState } from "react";
import axiosInstance from "../../axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    await axiosInstance
      .post(
        `api/register/`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.clear();
        console.log("Registration successful", res);
        alert("Success");
        window.location.href = "/login";
      })
      .catch((e) => {
        console.log("Error");
        alert("Error", e);
        return Promise.reject(e);
      });
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
        Register
      </h1>
      <div
        className="Auth-form-container"
        style={{ marginTop: "-2rem", marginBottom: "5rem", backgroundColor:"whitesmoke"  }}
      >
        <form className="Auth-form" onSubmit={submit} style={{width:"30rem", backgroundColor:"rgb(228, 228, 228)", color:"black"}}>
          <div className="Auth-form-content">
            <div className="form-group mt-3" style={{ marginBottom: "0.2rem" }}>
              <label style={{fontWeight:"bold"}}>Username:</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Username"
                name="Username"
                type="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                style={{backgroundColor:"white", marginTop:"0.25rem"}}
              />
            </div>
            <div className="form-group mt-3" style={{ marginBottom: "0.2rem" }}>
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

export default Register;

// import { useState } from "react";
// import axiosInstance from "../../axios";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();

//     const user = {
//       username: username,
//       email: email,
//       password: password,
//     };

//     await axiosInstance
//       .post(
//         `api/register/`,
//         user,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         localStorage.clear();
//         console.log("Registration successful", res);
//         alert("Success");
//         window.location.href = "/login";
//       })
//       .catch((e) => {
//         console.log("Error");
//         alert("Error", e);
//         return Promise.reject(e);
//       });
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
//         Register
//       </h1>
//       <div
//         className="Auth-form-container"
//         style={{ marginTop: "-2rem", marginBottom: "15rem" }}
//       >
//         <form className="Auth-form" onSubmit={submit}>
//           <div className="Auth-form-content">
//             <div className="form-group mt-3" style={{ marginBottom: "0.2rem" }}>
//               <label>Username:</label>
//               <input
//                 className="form-control mt-1"
//                 placeholder="Enter Username"
//                 name="Username"
//                 type="username"
//                 value={username}
//                 required
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
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

// export default Register;
