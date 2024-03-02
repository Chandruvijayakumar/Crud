import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ id }) => {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
    name: "",
    jobrole: "",
    description: "",
    job: "",
  });
  console.log("Update :", setUpdateData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD/${id}`)
      .then((res) => setUpdateData(res.data))
      .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .put(`https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD/${id}`, updateData)
      .catch((err) => console.log(err));
    navigate("/user");
  };
  return (
    <>
      <h1>Update User</h1>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="update1 col-sm-12">
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
        <div className="update2 col-sm-12">
          <label>
            Jobrole :
            <input
              type="text"
              name="jobrole"
              value={updateData.jobrole}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="update3 col-sm-12">
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
        <div className="update4 col-sm-12">
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
        <div className="update5">
          <button type="Submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Update;
