import axios from "axios";
import React from "react";
import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  });

  let [contact, setContact] = useState([]);

  const url = "https://medical-backend-7ua9.onrender.com/admin/showContact";

  useEffect(() => {
    const fetchedData = async () => {
      try {
        let response = await axios.get(url);
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  const deleteData = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete")) {
      const isDelete = await axios.delete(
        `https://medical-backend-7ua9.onrender.com/admin/deleteContact/${id}`
      );

      if (isDelete.data.code == 200) {
        alert("Successfully Delete");
        setContact(contact.filter((item) => item._id !== id));
      }
    }
  };
  return (
    <>
      <AdminHeader />
      <div>
        <div className="text-center">
          <h1 style={{ textDecoration: "underline red" }}>ViewContact</h1>
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
                UserPhone
              </th>
              <th className="bg-primary" scope="col">
                UserQuery
              </th>
              <th className="bg-primary" scope="col">
                Delete Data
              </th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => {
              return (
                <tr style={{ fontSize: "17px" }} key={item.id}>
                  <th scope="row" key={item.id}>
                    {item.userName}
                  </th>
                  <td key={item.id}>{item.userEmail}</td>
                  <td key={item.id}>{item.userPhone}</td>
                  <td key={item.id}>{item.userQuery}</td>

                  <td key={item.id}>
                    <button
                      key={item.id}
                      className="btn btn-primary"
                      onClick={(e) => deleteData(e, item._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td key={item.id}></td>
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
