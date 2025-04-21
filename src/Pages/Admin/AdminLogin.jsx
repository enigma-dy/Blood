// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header";

// export default () => {
//   let [logData, setLogData] = useState({
//     emailId: "",
//     password: "",
//   });
//   const dataFetch = (evt) => {
//     setLogData({ ...logData, [evt.target.name]: evt.target.value });
//   };
//   let URL = "http://localhost:1801/admin/doLogin";

//   const navigate = useNavigate();

//   const handleForm = async (e) => {
//     e.preventDefault();

//     try {
//       let response = await axios.post(URL, logData);
//       if (response.data.code == 200) {
//         navigate("/adminHome");
//         localStorage.setItem("TokenKey", response.data.token); 
//       } else if (response.data.code == 404) {
//         alert(response.data.message);
//       } else {
//         alert("Email Not found");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     setLogData({
//       emailId: "",
//       password: "",
//     });
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="text-center shadow-lg rounded-pill"
//         style={{ margin: "2%" }}
//       >
//         <h1>Admin Portal</h1>
//         <form
//           onSubmit={handleForm}
//           className="d-flex flex-column justify-content-center align-items-center "
//         >
//           <div className="form-floating mb-3 w-50">
//             <input
//               type="email"
//               name="emailId"
//               className="form-control"
//               id="emailId"
//               placeholder="name@example.com"
//               onChange={dataFetch}
//               required
//               value={logData.emailId}
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>

//           <div className="form-floating mb-3 w-50">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               id="passwordId"
//               placeholder="Password"
//               onChange={dataFetch}
//               required
//               value={logData.password}
//             />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary "
//             style={{ marginBottom: "2%" }}
//           >
//             Admin Login
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function AdminLogin() {
  const [logData, setLogData] = useState({
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();
  const URL = "http://localhost:1801/admin/doLogin";

  const dataFetch = (e) => {
    setLogData({ ...logData, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, logData);

      if (response.data.code === 200) {
        localStorage.setItem("TokenKey", response.data.token);
        navigate("/adminHome");
      } else if (response.data.code === 404) {
        alert(response.data.message);
      } else {
        alert("Email not found");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }

    setLogData({
      emailId: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
      <div className="text-center shadow-lg rounded-3 p-4 mx-auto" style={{ maxWidth: "500px", marginTop: "2%" }}>
        <h1 className="mb-4">Admin Portal</h1>
        <form onSubmit={handleForm}>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="emailId"
              className="form-control"
              id="emailId"
              placeholder="name@example.com"
              value={logData.emailId}
              onChange={dataFetch}
              required
            />
            <label htmlFor="emailId">Email address</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              id="passwordId"
              placeholder="Password"
              value={logData.password}
              onChange={dataFetch}
              required
            />
            <label htmlFor="passwordId">Password</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Admin Login
          </button>
        </form>
      </div>
    </>
  );
}
