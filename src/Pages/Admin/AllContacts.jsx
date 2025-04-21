import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../../components/Footer";

const AdminContactView = () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  }, [token_data, navigate]);

  const [contact, setContact] = useState([]);

  const url = "https://medical-backend-7ua9.onrender.com/admin/showContact";

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(url);
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const deleteData = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete?")) {
      try {
        const isDelete = await axios.delete(
          `https://medical-backend-7ua9.onrender.com/admin/deleteContact/${id}`
        );

        if (isDelete.data.code === 200) {
          alert("Successfully Deleted");
          setContact(contact.filter((item) => item._id !== id));
        }
      } catch (error) {
        console.log("Delete error", error);
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
              <th className="bg-primary">UserName</th>
              <th className="bg-primary">UserEmail</th>
              <th className="bg-primary">UserPhone</th>
              <th className="bg-primary">UserQuery</th>
              <th className="bg-primary">Delete Data</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr style={{ fontSize: "17px" }} key={item._id}>
                <th scope="row">{item.userName}</th>
                <td>{item.userEmail}</td>
                <td>{item.userPhone}</td>
                <td>{item.userQuery}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => deleteData(e, item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default AdminContactView;
