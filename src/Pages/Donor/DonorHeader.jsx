import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import image from "/favicon.png";
import { Link } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const tokenData = localStorage.getItem("TokenKey");

  const logout = (e) => {
    e.preventDefault();
    if (window.confirm("Do you want to log out?")) {
      localStorage.removeItem("TokenKey");
      navigate("/donorLogin");
    }
  };

  useEffect(() => {
    if (!tokenData) {
      navigate("/donorLogin");
    } else {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/me`,
            {
              headers: {
                Authorization: `Bearer ${tokenData}`,
              },
            }
          );

          if (response.data.success) {
            setUserData(response.data.data);
          } else {
            alert("Failed to fetch user data");
            navigate("/donorLogin");
          }
        } catch (err) {
          console.log(err);
          alert("An error occurred while fetching user data.");
          navigate("/donorLogin");
        }
      };

      fetchUserData();
    }
  }, [tokenData, navigate]);

  return (
    <>
      <div className="text-center">
        <h1 style={{ marginBottom: "0%" }}>
          <i className="fa fa-heartbeat" style={{ color: "red" }}></i>
          Welcome {userData ? userData.name.split(" ")[0] : "Donor"}
        </h1>
      </div>

      <hr
        style={{
          marginBottom: "0%",
          marginTop: "0%",
          borderTop: "2px solid red",
        }}
      />

      {/* NAVBAR code starts from here */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/donorHome"
            style={{ marginTop: "0%" }}
          >
            <img
              style={{ marginTop: "0%" }}
              src={image}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            BloodDonation Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid"></div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/viewDonors"
                >
                  Donors
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="/editprofile">
                  Profile
                </a>
              </li>

              <li className="nav-item forward">
                <a className="nav-link" href="/addFeedback">
                  Feedback
                </a>
              </li>

              <li className="nav-item forward">
                <Link className="nav-link" to="/hospitals">
                  Hospitals
                </Link>
              </li>

              <li className="nav-item forward">
                <a className="nav-link" href="/donorViewCampaign">
                  ViewCampaign
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/donorLogin" onClick={logout}>
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
