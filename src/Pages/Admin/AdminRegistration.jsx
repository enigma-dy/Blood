import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import AdminHeader from "./AdminHeader";

export default function AdminRegistration() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  }, [token_data, navigate]);

  const [registration, setRegistration] = useState({
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

  const URL = "https://medical-backend-7ua9.onrender.com/user/addRegistration";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, registration);
      alert("Successfully Registered");
      navigate("/adminHome");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Please try again.");
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
      <AdminHeader />
      <div
        className="text-center shadow-lg rounded-3 p-4 mx-auto"
        style={{ maxWidth: "700px", marginTop: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>Registration Form</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {/* ID */}
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              name="userId"
              className="form-control"
              id="userId"
              placeholder="ID"
              value={registration.userId}
              onChange={handleData}
              required
            />
            <label htmlFor="userId">ID</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              name="userPassword"
              className="form-control"
              id="userPassword"
              placeholder="Password"
              value={registration.userPassword}
              onChange={handleData}
              required
            />
            <label htmlFor="userPassword">Password</label>
          </div>

          {/* Name */}
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              name="userName"
              className="form-control"
              id="userName"
              placeholder="Name"
              value={registration.userName}
              onChange={handleData}
              required
            />
            <label htmlFor="userName">Name</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3 w-100">
            <input
              type="email"
              name="userEmail"
              className="form-control"
              id="userEmail"
              placeholder="Email"
              value={registration.userEmail}
              onChange={handleData}
              required
            />
            <label htmlFor="userEmail">Email</label>
          </div>

          {/* Phone */}
          <div className="form-floating mb-3 w-100">
            <input
              type="number"
              name="userPhone"
              className="form-control"
              id="userPhone"
              placeholder="Phone"
              value={registration.userPhone}
              onChange={handleData}
              required
            />
            <label htmlFor="userPhone">Phone Number</label>
          </div>

          {/* Age */}
          <div className="form-floating mb-3 w-100">
            <input
              type="number"
              name="userAge"
              className="form-control"
              id="userAge"
              placeholder="Age"
              value={registration.userAge}
              onChange={handleData}
              required
            />
            <label htmlFor="userAge">Age</label>
          </div>

          {/* City */}
          <div className="mb-3 w-100">
            <select
              className="form-select"
              name="userCity"
              value={registration.userCity}
              onChange={handleData}
              required
            >
              <option value="">Select City</option>
              <option value="lucknow">Lucknow</option>
              <option value="kanpur">Kanpur</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>

          {/* Blood Group */}
          <div className="mb-4 w-100">
            <select
              className="form-select"
              name="userBloodGroup"
              value={registration.userBloodGroup}
              onChange={handleData}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Submit Form
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
