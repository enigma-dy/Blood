import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DonorHeader from "./DonorHeader";
import Footer from "../../components/Footer";

function EditProfile() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/donorLogin");
    }
  });

  const [profile, setProfile] = useState({
    id: "",
    userId: "",
    userPassword: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userAge: "",
    userCity: "",
    userBloodGroup: "",
  });

  let URL =
    "https://medical-backend-7ua9.onrender.comnd-7ua9.onrender.com/donor/editprofile";

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.post(
        `http://localhost:1801/donor/getProfile/${token_data}`
      );
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleData = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      profile.id = token_data;
      const response = await axios.put(URL, profile);
      if (response.data.acknowledged) alert("profile edit successfully......");
      navigate("/viewDonors");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DonorHeader />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>Edit Profile</h1>
        <form
          onSubmit={handleForm}
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
              value={profile.userId}
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
              value={profile.userPassword}
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
              value={profile.userName}
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
              value={profile.userEmail}
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
              value={profile.userPhone}
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
              value={profile.userAge}
            />
            <label htmlFor="floatingPassword">Age</label>
          </div>
          <select
            className="form-select w-50 mb-3"
            aria-label="Default select example"
            defaultValue={profile.userCity}
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
            defaultValue={profile.userBloodGroup}
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
            Update Profile
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default EditProfile;
