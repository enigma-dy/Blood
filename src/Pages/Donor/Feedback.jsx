import { useState, useEffect } from "react";
import axios from "axios";
import DonorHeader from "./DonorHeader";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("TokenKey");
  useEffect(() => {
    if (!token_data) {
      navigate("/donorLogin");
    }
  });
  let [feedback, setFeedback] = useState({
    userName: "",
    userEmail: "",
    userRating: "",
    userQuery: "",
  });
  const handleData = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  let URL = "http://localhost:1801/donor/addFeedback";

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let response = await axios.post(URL, feedback);

      alert(`FeedBack Submitted Successfully`);
    } catch (err) {
      console.log(err);
    }
    
  setFeedback({
    userName: "",
    userEmail: "",
    userRating: "",
    userQuery: "",
  });

  };
  return (
    <>
      <DonorHeader />
      <div
        className="text-center shadow-lg rounded-pill"
        style={{ margin: "2%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center mt-2 "
        >
          <h1 style={{ textDecoration: "underline red" }}>FeedBack Form</h1>
          <div className="form-floating mb-3 w-50 ">
            <input
              type="name"
              name="userName"
              onChange={handleData}
              value={feedback.userName}
              className="form-control"
              id="floatingInputName"
              placeholder="name"
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              name="userEmail"
              value={feedback.userEmail}
              onChange={handleData}
              className="form-control"
              id="floatingInputEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="mb-3 w-50">
            <label className="visually-hidden" htmlFor="specificSizeSelect">
              Preference
            </label>
            <select
              defaultValue={feedback.userRating}
              onChange={handleData}
              name="userRating"
              className="form-select"
              id="rating"
            >
              <option>SubmitRating...</option>
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐ </option>
            </select>
          </div>
          <div className="form-floating w-50 mb-3">
            <textarea
              className="form-control"
              name="userQuery"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              onChange={handleData}
              value={feedback.userQuery}
            ></textarea>
            <label htmlFor="floatingTextarea2">Remark</label>
          </div>
          <button className="btn btn-primary mb-3" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </>
  );
};
