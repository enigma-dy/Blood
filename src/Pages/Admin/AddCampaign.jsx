// import CampaignCard from "../CampaignCard";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminHeader from "./AdminHeader";
// import Footer from "../Footer";
// import axios from "axios"

// export default () => {
//   const navigate = useNavigate();
//   const token_data = localStorage.getItem("TokenKey");
//   useEffect(() => {
//     if (!token_data) {
//       navigate("/adminLogin");
//     }
//   });
//   let [campaign, setCampaign] = useState({
//     userName: "",
//     userVenue: "",
//     userOrganizer: "",
//     userDiscription: "",
//     userDate: "",
//   });
//   const [photo, setPhoto] = useState("");

//   const handleData = (e) => {
//     setCampaign({ ...campaign, [e.target.name]: e.target.value });
//   };

//   let URL = "http://localhost:1801/admin/addCampaign";

//   const handlesubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const form_data = new FormData();
//       form_data.append("userName", campaign.userName);
//       form_data.append("userVenue", campaign.userVenue);
//       form_data.append("userOrganizer", campaign.userOrganizer);
//       form_data.append("userDiscription", campaign.userDiscription);
//       form_data.append("userDate", campaign.userDate);

//       form_data.append("photo", photo);

//       const response = await axios.post(URL, form_data);
//       alert(`Champaign Added`);
//     } catch (err) {
//       console.log(err.message);
//     }

//     setCampaign({
//       userName: "",
//       userVenue: "",
//       userOrganizer: "",
//       userDiscription: "",
//       userDate: "",
//     });
//     setPhoto({
//       photo:""
//     })
//   };
//   return (
//     <>
//       <AdminHeader />
//       <div
//         className="text-center shadow-lg rounded-pill"
//         style={{ margin: "2%" }}
//       >
//         <h1 style={{ textDecoration: "underline red" }}>Upcoming Campaigns</h1>
//         <form
//           onSubmit={handlesubmit}
//           className="d-flex flex-column justify-content-center align-items-center "
//         >
//           <div className="form-floating mb-3 w-50">
//             <input
//               type="text"
//               name="userName"
//               className="form-control"
//               id="floatingInputName"
//               placeholder="name"
//               required
//               onChange={handleData}
//               value={campaign.userName}
//             />
//             <label htmlFor="floatingInput">Name</label>
//           </div>

//           <div className="form-floating mb-3 w-50">
//             <input
//               type="text"
//               name="userVenue"
//               className="form-control"
//               required
//               id="floatingInputEmail"
//               placeholder="name@example.com"
//               onChange={handleData}
//               value={campaign.userVenue}
//             />
//             <label htmlFor="floatingInput">Venue</label>
//           </div>
//           <div className="form-floating w-50 mb-3">
//             <input
//               type="text"
//               name="userOrganizer"
//               className="form-control"
//               id="floatingPassword"
//               required
//               placeholder="Password"
//               onChange={handleData}
//               value={campaign.userOrganizer}
//             />
//             <label htmlFor="floatingPassword">Organizer</label>
//           </div>
//           <div className="form-floating w-50 mb-3">
//             <textarea
//               type="text"
//               name="userDiscription"
//               required
//               className="form-control"
//               id="floatingAge"
//               placeholder="age"
//               onChange={handleData}
//               value={campaign.userDiscription}
//             />
//             <label htmlFor="floatingPassword">Discription</label>
//           </div>
//           <div className="mb-3 w-50">
//             <input
//               type="file"
//               name="photo"
//               className="form-control"
//               onChange={(e) => {
//                 setPhoto(e.target.files[0]);
//               }}
//             />
//           </div>
//           <div className="mb-3 w-50">
//             <input
//               type="date"
//               id="date"
//               className="form-control"
//               name="userDate"
//               onChange={handleData}
//             />
//           </div>
//           <button
//             className="btn btn-primary"
//             style={{ marginBottom: "2%" }}
//             type="submit"
//           >
//             Add Campaign
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };


import CampaignCard from "../../components/CampaignCard";
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

  const URL = "http://localhost:1801/admin/addCampaign";

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
      <div className="text-center shadow-lg rounded-pill" style={{ margin: "2%" }}>
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
