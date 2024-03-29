// import React from "react";
// import Layout from "./../../components/Layout/Layout";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../styles/AuthStyles.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [answer, setAnswer] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         answer,

//       });

//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);

//         navigate("/login");
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
//       <Layout title="Register - Ecommer App">
//         <div className="form-container" style={{ minHeight: "90vh" }}>
//           <form onSubmit={handleSubmit}>
//             <h4 className="title">REGISTER FORM</h4>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Name"
//                 required
//                 autoFocus
//               />
//             </div>
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
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Phone"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Address"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Fav Sport"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Fav Sport"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 placeholder="Enter Your Fav Sport"
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               REGISTER
//             </button>
//           </form>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Register;

import React from "react";
import Layout from "./../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
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
      <Layout title="Register - Ecommerce App">
        <div className="register_page">
          <form
            className="register"
            onSubmit={handleSubmit}
            style={{
              marginTop: "40px",
            }}
          >
            <h3
              style={{
                textAlign: "center", // Center align the text
                fontWeight: "bold", // Make the text bold
                color: "grey", // Set the text color to grey
                marginBottom: "30px",
              }}
            >
              REGISTER FORM
            </h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
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

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />

            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Fav Sport"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100px" }}
            >
              REGISTER
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
