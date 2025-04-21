import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import DonorHeader from "./DonorHeader";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/donorLogin");
    }
  });
  let [donor, setDonor] = useState([]);

  const url = "https://medical-backend-7ua9.onrender.com/admin/showDonor";

  useEffect(() => {
    const fetchedData = async () => {
      try {
        let response = await axios.get(url);
        console.log(response.data);
        setDonor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  return (
    <>
      <DonorHeader />

      <div className="text-center " style={{ margin: "2%" }}>
        <div className="text-center ">
          <h1 style={{ textDecoration: "underline red" }}>All Donors</h1>
        </div>
        <table
          className="table shadow-lg "
          style={{ margin: "2%", marginRight: "2%" }}
        >
          <thead>
            <tr style={{ fontSize: "17px" }}>
              <th className="bg-primary" scope="col">
                UserName
              </th>
              <th className="bg-primary" scope="col">
                UserEmail
              </th>
              <th className="bg-primary" scope="col">
                UserId
              </th>
              <th className="bg-primary" scope="col">
                BloodGroup
              </th>
            </tr>
          </thead>
          <tbody className="rounded-pill">
            {donor.map((item) => {
              return (
                <tr style={{ fontSize: "17px" }} key={item.id}>
                  <td scope="row" key={item.id}>
                    {item.userName}
                  </td>
                  <td key={item.id}>{item.userEmail}</td>
                  <td key={item.id}>{item.userId}</td>
                  <td key={item.id}>{item.userBloodGroup}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="foot">
        <Footer />
      </div>
    </>
  );
};
