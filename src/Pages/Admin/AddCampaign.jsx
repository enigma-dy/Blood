import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../../components/Footer";
import axios from "axios";

export default function AddCampaign() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  }, [navigate, token_data]);

  const [campaign, setCampaign] = useState({
    userName: "",
    userVenue: "",
    userOrganizer: "",
    userDescription: "",
    userDate: "",
  });

  const [photo, setPhoto] = useState("");

  const handleData = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const URL = "https://medical-backend-7ua9.onrender.com/admin/addCampaign";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form_data = new FormData();
      form_data.append("userName", campaign.userName);
      form_data.append("userVenue", campaign.userVenue);
      form_data.append("userOrganizer", campaign.userOrganizer);
      form_data.append("userDiscription", campaign.userDescription); // keep backend field name as-is
      form_data.append("userDate", campaign.userDate);
      form_data.append("photo", photo);

      await axios.post(URL, form_data);
      alert("Campaign Added");
    } catch (err) {
      console.error("Error adding campaign:", err.message);
    }

    setCampaign({
      userName: "",
      userVenue: "",
      userOrganizer: "",
      userDescription: "",
      userDate: "",
    });
    setPhoto("");
  };

  return (
    <>
      <AdminHeader />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <h1 style={{ textDecoration: "underline red" }}>Upcoming Campaigns</h1>
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
              value={campaign.userName}
            />
            <label htmlFor="floatingInputName">Name</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userVenue"
              className="form-control"
              id="floatingInputVenue"
              placeholder="Venue"
              required
              onChange={handleData}
              value={campaign.userVenue}
            />
            <label htmlFor="floatingInputVenue">Venue</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              name="userOrganizer"
              className="form-control"
              id="floatingInputOrganizer"
              placeholder="Organizer"
              required
              onChange={handleData}
              value={campaign.userOrganizer}
            />
            <label htmlFor="floatingInputOrganizer">Organizer</label>
          </div>

          <div className="form-floating mb-3 w-50">
            <textarea
              name="userDescription"
              className="form-control"
              id="floatingTextarea"
              placeholder="Description"
              required
              onChange={handleData}
              value={campaign.userDescription}
            />
            <label htmlFor="floatingTextarea">Description</label>
          </div>

          <div className="mb-3 w-50">
            <input
              type="file"
              name="photo"
              className="form-control"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <div className="mb-3 w-50">
            <input
              type="date"
              id="date"
              className="form-control"
              name="userDate"
              required
              onChange={handleData}
              value={campaign.userDate}
            />
          </div>

          <button className="btn btn-primary mb-4" type="submit">
            Add Campaign
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
