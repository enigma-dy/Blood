// import { useState, useEffect } from "react";
// import axios from "axios";
// import AdminHeader from "./AdminHeader";
// import Footer from "../Footer";
// import { useNavigate } from "react-router-dom";

// export default DeleteCampaignCard () => {
//   const navigate = useNavigate();
//   const token_data = localStorage.getItem("TokenKey");
//   useEffect(() => {
//     if (!token_data) {
//       navigate("/adminLogin");
//     }
//   });

//   let url = "http://localhost:1801/user/viewcampaign";
//   const [campaign, setCampaign] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         setCampaign(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteData = async (e, id) => {
//     e.preventDefault();
//     if (window.confirm("Do you want to delete")) {
//       const isDelete = await axios.delete(
//         `http://localhost:1801/admin/deleteCampaign/${id}`
//       );

//       if (isDelete.data.code == 200) {
//         alert("Successfully Delete");
//         setCampaign(campaign.filter((item) => item._id !== id));
//       }
//     }
//   };

//   return (
//     <>
//       <AdminHeader />
//       <div
//         className="d-flex items-align-center justify-content-center flex-wrap "
//         style={{ marginBottom: "2%" }}
//       >
//         {campaign.map((item) => (
//           <div
//             key={item._id}
//             className=" card shadow-lg"
//             style={{ marginLeft: "2%", marginTop: "2%" }}
//           >
//             <img
//               src={`http://localhost:1801/campaign/${item.userPic}`}
//               className="card-img-top"
//               alt="..."
//               style={{ height: "300px" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">
//                 {item.userOrganizer}{" "}
//                 <p>
//                   -By {item.userName}
//                   <br />
//                   -on {item.userDate}{" "}
//                 </p>
//               </h5>
//               <p className="card-text">{item.userDiscription}</p>
//               <button
//                 className="btn btn-primary"
//                 onClick={(e) => deleteData(e, item._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer/>
//     </>
//   );
// };


import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const DeleteCampaignCard = () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  }, [token_data, navigate]); // Added dependency array for better control

  const [campaign, setCampaign] = useState([]);
  const url = "http://localhost:1801/user/viewcampaign";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCampaign(response.data);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    };

    fetchData();
  }, []); // This useEffect runs only once on component mount

  const deleteData = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete this campaign?")) {
      try {
        const response = await axios.delete(
          `http://localhost:1801/admin/deleteCampaign/${id}`
        );

        if (response.data.code === 200) {
          alert("Successfully Deleted");
          setCampaign(campaign.filter((item) => item._id !== id));
        } else {
          alert("Error deleting campaign");
        }
      } catch (error) {
        console.error("Error deleting campaign:", error);
        alert("Failed to delete campaign");
      }
    }
  };

  return (
    <>
      <AdminHeader />
      <div
        className="d-flex items-align-center justify-content-center flex-wrap"
        style={{ marginBottom: "2%" }}
      >
        {campaign.map((item) => (
          <div
            key={item._id}
            className="card shadow-lg"
            style={{ marginLeft: "2%", marginTop: "2%" }}
          >
            <img
              src={`http://localhost:1801/campaign/${item.userPic}`}
              className="card-img-top"
              alt="Campaign"
              style={{ height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.userOrganizer}
                <p>
                  -By {item.userName}
                  <br />
                  -on {item.userDate}
                </p>
              </h5>
              <p className="card-text">{item.userDiscription}</p>
              <button
                className="btn btn-danger"
                onClick={(e) => deleteData(e, item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DeleteCampaignCard;
