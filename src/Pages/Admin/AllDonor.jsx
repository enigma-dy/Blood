import axios from "axios";
import React from "react";
import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function AllDonor() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  });
  let [donor, setDonor] = useState([]);

  const url = "https://medical-backend-7ua9.onrender.com/admin/showDonor";

  const deleteData = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete")) {
      const isDelete = await axios.delete(
        `https://medical-backend-7ua9.onrender.com/admin/deleteDonor/${id}`
      );

      if (isDelete.data.code == 200) {
        alert("Successfully Delete");
        setDonor(donor.filter((item) => item._id !== id));
      }
    }
  };

  useEffect(() => {
    const fetchedData = async () => {
      try {
        let response = await axios.get(url);
        setDonor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div>
        <div className="text-center ">
          <h1 style={{ textDecoration: "underline red" }}>All Donor</h1>
        </div>
        <table className="table shadow-lg" style={{ margin: "2%" }}>
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
              <th className="bg-primary" scope="col">
                DeleteData
              </th>
            </tr>
          </thead>
          <tbody className="rounded-pill">
            {donor.map((item) => {
              return (
                <tr style={{ fontSize: "17px" }} key={item.id}>
                  <th scope="row" key={item.id}>
                    {item.userName}
                  </th>
                  <td key={item.id}>{item.userEmail}</td>
                  <td key={item.id}>{item.userId}</td>
                  <td key={item.id}>{item.userBloodGroup}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => deleteData(e, item._id)}
                    >
                      Delete
                    </button>
                  </td>
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
}
