import image from "/favicon.png";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();
  const tokenData = localStorage.getItem("TokenKey");

  const logout = (e) => {
    if (window.confirm("Do you Want to LogOut")) {
      if (!tokenData) {
        navigate("/adminLogin");
      } else {
        localStorage.removeItem("TokenKey");
        navigate("/adminLogin");
      }
    }
  };

  return (
    <>
      <header className="text-center">
        <h1 style={{ marginBottom: "0%" }}>
          Welcome Admin <i className="fa fa-heartbeat" style={{ color: "red" }}></i>
        </h1>
        <div
          className="text-center"
          style={{ marginBottom: "0%", borderTop: "1px solid red" }}
        ></div>
        <hr style={{ marginBottom: "0%", marginTop: "0%" }} />
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/adminHome" style={{ marginTop: "0%" }}>
            <img
              style={{ marginTop: "0%" }}
              src={image}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            BloodDonation Portal
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/viewAdminDonor">
                  Donors
                </Link>
              </li>
              <li className="nav-item forward">
                <Link className="nav-link" to="/allContact">
                  ViewContact
                </Link>
              </li>
              <li className="nav-item forward">
                <Link className="nav-link" to="/viewFeedback">
                  ViewFeedback
                </Link>
              </li>
              <li className="nav-item forward">
                <Link className="nav-link" to="/addCampaign">
                  AddCampaign
                </Link>
              </li>
              <li className="nav-item forward">
                <Link className="nav-link" to="/deleteCampaign">
                  DeleteCampaign
                </Link>
              </li>
              <li className="nav-item forward">
                <Link className="nav-link" to="/adminregistration">
                  AddDonor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminLogin" onClick={logout}>
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


