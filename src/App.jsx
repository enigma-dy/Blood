import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommonPage from "./Pages/CommonPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/Admin/ContactUs";

import Registration from "./Pages/Donor/Registration";
import DonorLogin from "./Pages/Donor/DonorLogin";
import DonorHome from "./Pages/Donor/DonorHome";
import Feedback from "./Pages/Donor/Feedback";
import DonorViewCampaign from "./Pages/Donor/DonorViewCampaign";
import AllDonorDonor from "./Pages/Donor/AllDonorDonor";
import EditProfile from "./Pages/Donor/EditProfile";

import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminRegistration from "./Pages/Admin/AdminRegistration";
import AddCampaign from "./Pages/Admin/AddCampaign";
import DeleteCampaignCard from "./Pages/Admin/DeleteCampaignCard";
import AllContacts from "./Pages/Admin/AllContacts";
import AllFeedback from "./Pages/Admin/AllFeedback";
import AllDonor from "./Pages/Admin/AllDonor";

import AllDonorCommon from "./components/AllDonorCommon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/adminregistration" element={<AdminRegistration />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/addCampaign" element={<AddCampaign />} />
        <Route path="/allContact" element={<AllContacts />} />
        <Route path="/donorLogin" element={<DonorLogin />} />
        <Route path="/donorViewCampaign" element={<DonorViewCampaign />} />
        <Route path="/donorHome" element={<DonorHome />} />
        <Route path="/viewAdminDonor" element={<AllDonor />} />
        <Route path="/viewFeedback" element={<AllFeedback />} />
        <Route path="/viewDonors" element={<AllDonorDonor />} />
        <Route path="/addFeedback" element={<Feedback />} />

        <Route path="/viewDonor" element={<AllDonorCommon />} />

        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/deleteCampaign" element={<DeleteCampaignCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
