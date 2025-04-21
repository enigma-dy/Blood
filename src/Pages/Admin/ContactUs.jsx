import { useState } from "react";
import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";

export default () => {
  let [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userQuery: "",
  });

  const handleData = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  let URL = "https://medical-backend-7ua9.onrender.com/user/addContact";

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      let response = await axios.post(URL, contact);

      alert(`Your query has uploaded`);
    } catch (err) {
      console.log(err);
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
      {/* <Header /> */}
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>
          Contact Us for any Query
        </h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userName"
              className="form-control"
              id="floatingInputName"
              placeholder="name"
              required
              onChange={handleData}
              value={contact.userName}
            />
            <label htmlFor="floatingInput">Name</label>
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
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating w-50 mb-3">
            <input
              type="number"
              name="userPhone"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              onChange={handleData}
              value={contact.userPhone}
            />
            <label htmlFor="floatingPassword">PhoneNumber</label>
          </div>
          <div className="form-floating w-50 mb-3">
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
      {/* <Footer /> */}
    </>
  );
};
