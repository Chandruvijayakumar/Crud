import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { MdSystemUpdateAlt, MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// Functional component for displaying user information
const User = ({ setId }) => {
  const navigate = useNavigate();
  const [UserDelete, setUserDelete] = useState([]);
  const [Profiles, setProfiles] = useState([]);
  // Fetch user data from the API on component mount or when UserDelete changes
  useEffect(() => {
    getApiData();
  }, [UserDelete]);
  // Navigate to the Add User page
  const goToAddPage = () => {
    navigate("/add");
  };
  // Delete a user by making an API call and updating the state
  const goToDeletePage = async (id) => {
    await axios
      .delete(`https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD/${id}`)
      .then((res) => setUserDelete(res.data))
      .catch((err) => {
        console.log(err);
      });
    navigate("/user");
  };
  // Navigate to the Update User page with the selected user ID
  const goToUpdatePage = (id) => {
    setId(id);
    navigate(`/update/${id}`);
  };
  // Fetch user data from the API
  const getApiData = async () => {
    await axios
      .get("https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD")
      .then((response) => {
        // console.log(response.data);
        setProfiles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Render the User component
  return (
    <Container className="user1">
      <Button className="user2 btn btn-primary" onClick={goToAddPage}>
        ADD User
      </Button>
      <table className="user3 table mt-5">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th scope="col">JobRole</th>
            <th scope="col">Description</th>
            <th scope="col">Job</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="user4">
          {
            /* Map through the array of users and create a card for each one */
            Profiles.map((profile) => (
              <tr key={profile.id}>
                <th scope="row">{profile.id}</th>
                <td>{profile.name}</td>
                <td>
                  <img src={profile.avatar} alt="" />
                </td>
                <td>{profile.jobrole}</td>
                <td>{profile.description}</td>
                <td>{profile.job}</td>
                <td>
                  <MdSystemUpdateAlt
                    onClick={() => goToUpdatePage(profile.id)}
                    className="user6 fs-3 text-info"
                  />
                </td>
                <td>
                  <MdDeleteForever
                    onClick={() => goToDeletePage(profile.id)}
                    className="user7 fs-3 text-danger"
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
};

export default User;
