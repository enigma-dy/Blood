import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DonorHeader from "./DonorHeader";
import Footer from "../../components/Footer";

function EditProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("TokenKey");
  const [isEditable, setIsEditable] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    isAvailable: false,
    profilePic: null,
    previewImage: "",
  });

  useEffect(() => {
    if (!token) {
      navigate("/donorLogin");
    } else {
      fetchProfileData();
    }
  }, [token, navigate]);

  async function fetchProfileData() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { name, email, phone, bloodType, isAvailable } = response.data.data;
      setProfile({
        name,
        email,
        phone,
        bloodType,
        isAvailable,
        profilePic: null,
        previewImage: "",
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        profilePic: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("email", profile.email);
      formData.append("phone", profile.phone);
      formData.append("bloodType", profile.bloodType);
      formData.append("isAvailable", profile.isAvailable);
      if (profile.profilePic) {
        formData.append("profilePic", profile.profilePic);
      }

      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        alert("Profile updated successfully!");
        setIsEditable(false);
        fetchProfileData();
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <>
      <DonorHeader />
      <div className="">
        <div className="">
          <div className="">
            <h2 className="">Donor Profile</h2>
          </div>
          <div className="">
            <div className="">
              <button
                className={`btn ${isEditable ? "btn-danger" : "btn-primary"}`}
                onClick={() => setIsEditable(!isEditable)}
              >
                {isEditable ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={profile.name}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                  />
                </div>
                <div className="">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={profile.phone}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                  />
                </div>
                <div className="">
                  <label className="form-label">Blood Type</label>
                  <select
                    className="form-select"
                    name="bloodType"
                    value={profile.bloodType}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div className="">
                <input
                  type="checkbox"
                  name="isAvailable"
                  className="form-check-input"
                  checked={profile.isAvailable}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                  id="availableCheck"
                />
                <label className="form-check-label" htmlFor="availableCheck">
                  Available to donate
                </label>
              </div>

              <div className="">
                <label className="form-label">Profile Picture</label>
                {profile.previewImage ? (
                  <img
                    src={profile.previewImage}
                    alt="Preview"
                    className="img-thumbnail mb-2 d-block"
                    style={{ maxWidth: "200px" }}
                  />
                ) : null}
                <input
                  type="file"
                  name="profilePic"
                  className="form-control"
                  onChange={handleFileChange}
                  disabled={!isEditable}
                  accept="image/*"
                />
              </div>

              {isEditable && (
                <div className="">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
