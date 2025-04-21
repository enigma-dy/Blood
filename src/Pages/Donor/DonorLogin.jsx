import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default () => {
  let [logData, setLogData] = useState({
    userId: "",
    password: "",
  });
  const dataFetch = (evt) => {
    setLogData({ ...logData, [evt.target.name]: evt.target.value });
  };
  let URL =
    "https://medical-backend-7ua9.onrender.comnd-7ua9.onrender.com/donor/dologin";

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(URL, logData);
      if (response.data.code == 200) {
        navigate("/donorHome");
        localStorage.setItem("TokenKey", response.data.token);
      } else if (response.data.code == 404) {
        alert(response.data.message);
      } else {
        alert("Email Not found");
      }
    } catch (err) {
      console.log(err);
    }
    setLogData({
      userId: "",
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
              type="text"
              name="userId"
              className="form-control"
              id="userId"
              placeholder="name@example.com"
              onChange={dataFetch}
              required
              value={logData.userId}
            />
            <label htmlFor="floatingInput">User ID</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="password"
              name="password"
              className="form-control"
              id="passwordId"
              placeholder="Password"
              onChange={dataFetch}
              required
              value={logData.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary "
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
