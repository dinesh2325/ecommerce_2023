// import React from "react";
// import Layout from "./../../components/Layout/Layout";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth"; //context for user and token
// import { useLocation } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/login", {
//         email,
//         password,
//       });
//       //checking email and password
//       //if ok then fill the auth with user data and token

//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         setAuth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token,
//         });
//         //storing in local storage
//         localStorage.setItem("auth", JSON.stringify(res.data));
//         navigate(location.state || "/");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <>
//       <Layout title="Login - Ecommerce App">
//         <div className="form-container" style={{ minHeight: "90vh" }}>
//           <form onSubmit={handleSubmit}>
//             <h4 className="title">LOGIN FORM</h4>

//             <div className="mb-3">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Email "
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Enter Your Password"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={() => {
//                   navigate("/forgot-password");
//                 }}
//               >
//                 Forgot password
//               </button>
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </form>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Register;

//*************************************************************** */

import React from "react";
import Layout from "./../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { useAuth } from "../../context/auth"; //context for user and token
import { useLocation } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      //checking email and password
      //if ok then fill the auth with user data and token

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        //storing in local storage
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout title="Login - Ecommerce App">
        <div className="login_page">
          <form className="login" onSubmit={handleSubmit}>
            <h3
              style={{
                textAlign: "center", // Center align the text
                fontWeight: "bold", // Make the text bold
                color: "grey", // Set the text color to grey
                marginBottom: "30px",
              }}
            >
              LOGIN FORM
            </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>

            <span
              style={{
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
                // textDecoration: "underline",
                marginLeft: "120px",
              }}
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot password ?
            </span>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
