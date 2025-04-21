// import CampaignCard from "../CampaignCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import DonorHeader from "./DonorHeader";
import Footer from "../../components/Footer";

export default () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/donorLogin");
    }
  });
  return (
    <>
      {/* <DonorHeader /> */}
      <div className="text-center" style={{ marginTop: "2%" }}>
        <h1 style={{ textDecoration: "underline red" }}>OUR CAMAPAIGNS</h1>
      </div>
      {/* <CampaignCard /> */}

      <Footer />
    </>
  );
};
