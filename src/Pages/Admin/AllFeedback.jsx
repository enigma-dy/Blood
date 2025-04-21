import axios from "axios";
import React from "react";
import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export default function AllFeedback() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");

  useEffect(() => {
    if (!token_data) {
      navigate("/adminLogin");
    }
  }, [token_data, navigate]);

  let [feedback, setFeedback] = useState([]);

  const url = "http://localhost:1801/admin/showFeedback";

  const deleteData = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Do you want to delete")) {
      const isDelete = await axios.post(
        `http://localhost:1801/admin/deleteFeedback/${id}`
      );

      if (isDelete.data.code == 200) {
        alert("Successfully Delete");
        setFeedback(feedback.filter((item) => item._id !== id));
      }
    }
  };

  useEffect(() => {
    const fetchedData = async () => {
      try {
        let response = await axios.get(url);
        setFeedback(response.data);
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
          <h1 style={{ textDecoration: "underline red" }}>ViewFeedback</h1>
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
                UserRating
              </th>
              <th className="bg-primary" scope="col">
                UserFeedback
              </th>
              <th className="bg-primary" scope="col">
                DeleteData
              </th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => {
              return (
                <tr style={{ fontSize: "17px" }} key={item.id}>
                  <th scope="row" key={item.id}>
                    {item.userName}
                  </th>
                  <td key={item.id}>{item.userEmail}</td>
                  <td key={item.id}>{item.userRating}</td>
                  <td key={item.id}>{item.userFeedback}</td>
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
