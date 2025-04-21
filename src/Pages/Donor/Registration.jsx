import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";

export default () => {
  let navigate = useNavigate();
  let [registration, setRegistration] = useState({
    userId: "",
    userPassword: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userAge: "",
    userCity: "",
    userBloodGroup: "",
  });

  const handleData = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  let URL = "http://localhost:1801/user/addRegistration";

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      let response = await axios.post(URL, registration);

      navigate("/");
      alert(`Successfully Registered`);
    } catch (err) {
      console.log(err);
    }

    setRegistration({
      userId: "",
      userPassword: "",
      userName: "",
      userEmail: "",
      userPhone: "",
      userAge: "",
      userCity: "",
      userBloodGroup: "",
    });
  };
  return (
    <>
      <Header />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>Registration Form</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userId"
              className="form-control"
              id="floatingInputid"
              placeholder="ID"
              required
              onChange={handleData}
              value={registration.userId}
            />
            <label htmlFor="floatingInput">ID</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userPassword"
              className="form-control"
              id="floatingInputpassword"
              placeholder="Password"
              required
              onChange={handleData}
              value={registration.userPassword}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userName"
              className="form-control"
              id="floatingInputName"
              placeholder="name"
              required
              onChange={handleData}
              value={registration.userName}
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
              value={registration.userEmail}
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
              value={registration.userPhone}
            />
            <label htmlFor="floatingPassword">PhoneNumber</label>
          </div>
          <div className="form-floating w-50 mb-3">
            <input
              type="number"
              name="userAge"
              className="form-control"
              id="floatingAge"
              placeholder="age"
              required
              onChange={handleData}
              value={registration.userAge}
            />
            <label htmlFor="floatingPassword">Age</label>
          </div>
          <select
            className="form-select w-50 mb-3"
            aria-label="Default select example"
            defaultValue={registration.userCity}
            onChange={handleData}
            required
            name="userCity"
          >
            <option>Cities we are available at</option>
            <option value="lucknow">Lucknow</option>
            <option value="kanpur">Kanpur</option>
            <option value="delhi">Delhi</option>
          </select>

          <select
            className="form-select w-50 mb-3"
            aria-label="Default select example"
            required
            defaultValue={registration.userBloodGroup}
            onChange={handleData}
            name="userBloodGroup"
          >
            <option>BloodGroup </option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
          </select>

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
};
