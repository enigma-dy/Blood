import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
    bloodType: "",
    phone: "",
    address: "",
    state: "",
    lga: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/register`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, registration);
      alert("Successfully Registered");
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
    }

    setRegistration({
      name: "",
      email: "",
      password: "",
      role: "donor",
      bloodType: "",
      phone: "",
      address: "",
      state: "",
      lga: "",
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
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              required
              onChange={handleData}
              value={registration.name}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              onChange={handleData}
              value={registration.email}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={handleData}
              value={registration.password}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
              onChange={handleData}
              value={registration.phone}
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              required
              onChange={handleData}
              value={registration.address}
            />
            <label htmlFor="address">Address</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              required
              onChange={handleData}
              value={registration.state}
            />
            <label htmlFor="state">State</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="lga"
              className="form-control"
              placeholder="LGA"
              required
              onChange={handleData}
              value={registration.lga}
            />
            <label htmlFor="lga">LGA</label>
          </div>

          <select
            className="form-select w-50 mb-3"
            name="bloodType"
            required
            onChange={handleData}
            value={registration.bloodType}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
          </select>

          <button className="btn btn-primary mb-3" type="submit">
            Submit form
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
