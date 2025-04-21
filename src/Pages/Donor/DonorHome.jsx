import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DonorHeader from "./DonorHeader";
import Carousal from "../Carousal";
import Footer from "../Footer";

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
      <DonorHeader />
      <Carousal />
      <Footer />
    </>
  );
};
