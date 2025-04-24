import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HospitalsPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/hospitals`
        );
        if (response.data.success) {
          setHospitals(response.data.data || []);
        } else {
          setError("Failed to fetch hospitals");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) return <div>Loading hospitals...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!hospitals || hospitals.length === 0)
    return <div>No hospitals found</div>;

  return (
    <div>
      <h1>Hospitals</h1>
      <div>
        {hospitals.map((hospital) => (
          <div key={hospital._id}>
            <div>
              <div>
                <h2>{hospital.name}</h2>
                <p>
                  Email: {hospital.email}
                  <br />
                  Phone: {hospital.phone}
                  <br />
                  Address: {hospital.address}
                </p>

                <h5>Blood Bank Inventory:</h5>
                <ul>
                  {Object.entries(hospital.bloodBank).map(
                    ([type, quantity]) => (
                      <li key={type}>
                        <span>{type}: </span>
                        <span>{quantity} units</span>
                      </li>
                    )
                  )}
                </ul>

                <Link
                  to={`/donations/new/${hospital._id}`}
                  state={{ hospitalName: hospital.name }}
                >
                  Apply For Donation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsPage;
