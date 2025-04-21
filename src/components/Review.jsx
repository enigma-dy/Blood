import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  let url = "http://localhost:1801/user/viewFeedback";
  const [campaign, setfeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setfeedback(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="d-flex items-align-center justify-content-center flex-wrap "
        style={{ marginBottom: "2%" }}
      >
        {campaign.map((item) => (
          <div key={item._id} className="card shadow-lg " style={{ marginLeft: "2%", marginTop: "2%" }}>
            <div className="card-body">
              <h5 className="card-title">{item.userName} <p>{item.userRating} </p></h5>
              <p className="card-text">
                {item.userFeedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
