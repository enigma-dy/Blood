import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default () => {
  let [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const dataFetch = (evt) => {
    setLogData({ ...logData, [evt.target.name]: evt.target.value });
  };

  const URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`;

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(URL, logData);

      if (response.data.success) {
        localStorage.setItem("TokenKey", response.data.token);
        navigate("/donorHome");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred during login.");
    }

    setLogData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1>Donor Login</h1>
        <form
          onSubmit={handleForm}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={dataFetch}
              required
              value={logData.email}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={dataFetch}
              required
              value={logData.password}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "2%" }}
          >
            Donor Login
          </button>
        </form>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};
