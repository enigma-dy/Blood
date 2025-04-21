import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  let url = "https://medical-backend-7ua9.onrender.com/user/viewcampaign";
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCampaign(response.data);
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
          <div
            key={item._id}
            className=" card shadow-lg"
            style={{ marginLeft: "2%", marginTop: "2%" }}
          >
            <img
              src={`https://medical-backend-7ua9.onrender.com/campaign/${item.userPic}`}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.userOrganizer}{" "}
                <p>
                  -By {item.userName}
                  <br />
                  -on {item.userDate}{" "}
                </p>
              </h5>
              <p className="card-text">{item.userDiscription}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
