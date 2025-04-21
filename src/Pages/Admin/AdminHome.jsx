import AdminHeader from "./AdminHeader";
import Carousal from "../Carousal";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  });
  return (
    <>
      <AdminHeader />
      <Carousal />
      <Footer />
    </>
  );
};
