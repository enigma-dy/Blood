import axios from "axios";
import React, { useState, useEffect } from "react";
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
  }, [token_data, navigate]);

  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    bloodType: "",
    startDate: "",
    endDate: "",
    sortBy: "donationDate",
    sortOrder: "desc",
    page: 1,
    limit: 10,
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      if (filters.bloodType) params.append("bloodType", filters.bloodType);
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);
      params.append("sortBy", filters.sortBy);
      params.append("sortOrder", filters.sortOrder);
      params.append("page", filters.page);
      params.append("limit", filters.limit);

      const url = `${
        import.meta.env.VITE_API_BASE_URL
      }/api/v1/donation?${params.toString()}`;
      let response = await axios.get(url);
      setDonor(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const resetFilters = () => {
    setFilters({
      bloodType: "",
      startDate: "",
      endDate: "",
      sortBy: "donationDate",
      sortOrder: "desc",
      page: 1,
      limit: 10,
    });
  };

  return (
    <>
      <DonorHeader />

      <div className="container" style={{ margin: "2%" }}>
        <div className="text-center mb-4">
          <h1 style={{ textDecoration: "underline red" }}>All Donors</h1>
        </div>

        {/* Filter Section */}
        <div>
          <div>
            <h5>Filters</h5>
            <div>
              <div>
                <label htmlFor="bloodType">Blood Type</label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={filters.bloodType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="startDate">From Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleDateChange}
                />
              </div>

              <div>
                <label htmlFor="endDate">To Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleDateChange}
                />
              </div>

              <div>
                <label htmlFor="sortBy">Sort By</label>
                <select
                  id="sortBy"
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleSortChange}
                >
                  <option value="donationDate">Donation Date</option>
                  <option value="donor.name">Donor Name</option>
                </select>
              </div>

              <div>
                <label htmlFor="sortOrder">Sort Order</label>
                <select
                  id="sortOrder"
                  name="sortOrder"
                  value={filters.sortOrder}
                  onChange={handleSortChange}
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>

              <div>
                <label htmlFor="limit">Items Per Page</label>
                <select
                  id="limit"
                  name="limit"
                  value={filters.limit}
                  onChange={handleFilterChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>

              <div>
                <button onClick={resetFilters}>Reset Filters</button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <table className="table shadow-lg">
              <thead>
                <tr style={{ fontSize: "17px" }}>
                  <th className="bg-primary" scope="col">
                    Donor Name
                  </th>
                  <th className="bg-primary" scope="col">
                    Donor Blood Type
                  </th>
                  <th className="bg-primary" scope="col">
                    Hospital Name
                  </th>
                  <th className="bg-primary" scope="col">
                    Donation Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {donor.map((item) => (
                  <tr style={{ fontSize: "17px" }} key={item._id}>
                    <td scope="row">{item.donor.name}</td>
                    <td>{item.donor.bloodType}</td>
                    <td>{item.hospital.name}</td>
                    <td>{new Date(item.donationDate).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${
                    filters.page === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(filters.page - 1)}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(5)].map((_, i) => {
                  const pageNum = filters.page + i - 2;
                  if (pageNum < 1) return null;
                  return (
                    <li
                      key={pageNum}
                      className={`page-item ${
                        filters.page === pageNum ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(filters.page + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};
