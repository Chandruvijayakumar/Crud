import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  // Use the useNavigate hook from React Router for easy navigation
  const navigate = useNavigate();
  // State to store form data
  const [updateData, setUpdateData] = useState({
    name: "",
    jobrole: "",
    description: "",
    job: "",
  });
  // Event handler to update state when input values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Event handler for form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Make a POST request to the mock API with the form data
    await axios
      .post(`https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD/`, updateData)
      .catch((err) => console.log(err));
    // Navigate to the "/user" route after successful submission
    navigate("/user");
  };
  // JSX rendering of the component
  return (
    <>
      <h1>Add User</h1>
      <form className="addForm" onSubmit={handleSubmit}>
        <div className="col-sm-12">
          <label>
            Name :
            <input
              type="text"
              name="name"
              value={updateData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            jobrole :
            <input
              type="text"
              name="jobrole"
              value={updateData.jobrole}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            description :
            <input
              type="text"
              name="description"
              value={updateData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Job :
            <input
              type="text"
              name="job"
              value={updateData.job}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
};
export default Add;
