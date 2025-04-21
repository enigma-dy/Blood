// import { useState } from "react";
// import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";

// export default () => {
//   let [contact, setContact] = useState({
//     userName: "",
//     userEmail: "",
//     userPhone: "",
//     userQuery: "",
//   });

//   const handleData = (e) => {
//     setContact({ ...contact, [e.target.name]: e.target.value });
//   };

//   let URL = "http://localhost:1801/user/addContact";

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();

//     try {
//       let response = await axios.post(URL, contact);

//       alert(`Your query has uploaded`);
//     } catch (err) {
//       console.log(err);
//     }

//     setContact({
//       userName: "",
//       userEmail: "",
//       userPhone: "",
//       userQuery: "",
//     });
//   };
//   return (
//     <>
//       <Header />
//       <div
//         className="text-center shadow-lg rounded-pill"
//         style={{ margin: "2%" }}
//       >
//         <h1 style={{ textDecoration: "underline red" }}>
//           Contact Us for any Query
//         </h1>
//         <form
//           onSubmit={handleSubmit}
//           className="d-flex flex-column justify-content-center align-items-center "
//         >
//           <div className="form-floating mb-3 w-50">
//             <input
//               type="text"
//               name="userName"
//               className="form-control"
//               id="floatingInputName"
//               placeholder="name"
//               required
//               onChange={handleData}
//               value={contact.userName}
//             />
//             <label htmlFor="floatingInput">Name</label>
//           </div>

//           <div className="form-floating mb-3 w-50">
//             <input
//               type="email"
//               name="userEmail"
//               className="form-control"
//               id="floatingInputEmail"
//               placeholder="name@example.com"
//               required
//               onChange={handleData}
//               value={contact.userEmail}
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>
//           <div className="form-floating w-50 mb-3">
//             <input
//               type="number"
//               name="userPhone"
//               className="form-control"
//               id="floatingPassword"
//               placeholder="Password"
//               required
//               onChange={handleData}
//               value={contact.userPhone}
//             />
//             <label htmlFor="floatingPassword">PhoneNumber</label>
//           </div>
//           <div className="form-floating w-50 mb-3">
//             <textarea
//               className="form-control"
//               name="userQuery"
//               placeholder="Leave a comment here"
//               required
//               id="floatingTextarea2"
//               style={{ height: "100px" }}
//               onChange={handleData}
//               value={contact.userQuery}
//             ></textarea>
//             <label htmlFor="floatingTextarea2">Comments</label>
//           </div>
//           <button
//             className="btn btn-primary"
//             style={{ marginBottom: "2%" }}
//             type="submit"
//           >
//             Submit form
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };


import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactForm() {
  const [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userQuery: "",
  });

  const handleData = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const url = "http://localhost:1801/user/addContact";

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      let response = await axios.post(url, contact);
      if (response.data.success) {
        alert(`Your query has been submitted successfully`);
      } else {
        alert("There was an issue submitting your query. Please try again.");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred. Please try again.");
    }

    setContact({
      userName: "",
      userEmail: "",
      userPhone: "",
      userQuery: "",
    });
  };

  return (
    <>
      <Header />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>
          Contact Us for any Query
        </h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userName"
              className="form-control"
              id="floatingInputName"
              placeholder="Name"
              required
              onChange={handleData}
              value={contact.userName}
            />
            <label htmlFor="floatingInputName">Name</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              name="userEmail"
              className="form-control"
              id="floatingInputEmail"
              placeholder="name@example.com"
              required
              onChange={handleData}
              value={contact.userEmail}
            />
            <label htmlFor="floatingInputEmail">Email address</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="number"
              name="userPhone"
              className="form-control"
              id="floatingPhone"
              placeholder="Phone Number"
              required
              onChange={handleData}
              value={contact.userPhone}
            />
            <label htmlFor="floatingPhone">Phone Number</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <textarea
              className="form-control"
              name="userQuery"
              placeholder="Leave a comment here"
              required
              id="floatingTextarea2"
              style={{ height: "100px" }}
              onChange={handleData}
              value={contact.userQuery}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>

          <button
            className="btn btn-primary"
            style={{ marginBottom: "2%" }}
            type="submit"
          >
            Submit form
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
