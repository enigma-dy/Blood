import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateDonation() {
  const { hospitalId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("TokenKey");

  const [formData, setFormData] = useState({
    donationDate: "",
    bloodType: "",
    units: 1,
    notes: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/donation/${hospitalId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log(response.data);
        alert("Donation recorded successfully!");
        navigate("/donations");
      } else {
        setError(response.data.error || "Failed to record donation");
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      console.error("Donation error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h2>New Donation</h2>
              <p>Hospital ID: {hospitalId}</p>
            </div>
            <div>
              {error && <div>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="">
                  <label htmlFor="donationDate" className="form-label">
                    Donation Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="donationDate"
                    name="donationDate"
                    value={formData.donationDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Blood Type</label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
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

                <div>
                  <label>Units Donated</label>
                  <input
                    type="number"
                    className="form-control"
                    id="units"
                    name="units"
                    min="1"
                    max="5"
                    value={formData.units}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="">
                  <label>Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Donation"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDonation;
