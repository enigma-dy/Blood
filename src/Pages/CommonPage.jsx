import Header from "../components/Header";
import Carousal from "./Carousal";
import CampaignCard from "../components/CampaignCard";
import Review from "../components/Review";
import Footer from "../components/Footer";


export default () => {
  
  return (
    <>
      <Header />
      <Carousal />
      <div className="text-center" style={{ marginTop: "2%" }}>
        <h1 style={{ textDecoration: "underline red" }}>OUR CAMAPAIGNS</h1>
      </div>
          <CampaignCard /> 
      <div className="text-center">
        <h1 style={{ textDecoration: "underline red" }}>Reviews</h1>
      </div>
        <Review />
      <Footer />
    </>
  );
};
