import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ setId }) {
  const [Profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  console.log("Profile: ", Profiles);
  // Fetch profiles on page load
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
  // Call the getApiData function once when the component mounts
  useEffect(() => {
    getApiData();
  }, []);
  // Function to navigate to the update page with the selected profile's ID
  const updateBtn = (id) => {
    setId(id);
    navigate(`/update/${id}`);
  };
  // Function to delete a profile and update the state
  const deleteBtn = async (id) => {
    await axios
      .delete(`https://65d97bd4c96fbb24c1bd109e.mockapi.io/CRUD/${id}`)
      .then((res) => setUserDelete(res.data))
      .catch((err) => {
        console.log(err);
      });
    navigate("/user");
  };
  // JSX rendering of the component

  return (
    <>
      <div className="row   d-flex  justify-content-center ">
        {Profiles.map((profile) => (
          <Container className="  col-sm-12 col-md-6 col-lg-4 col-xl mb-5">
            <Card
              style={{ width: "18rem" }}
              key={profile.id}
              className="firstPhase form h-100 justify-content-space-evenly "
            >
              <div className="mb-3 card-body d-flex justify-content-center align-items-center">
                <Card.Img
                  className="avatar"
                  variant="top"
                  src={profile.avatar}
                  style={{ width: "230px", height: "230px" }}
                />
              </div>

              <Card.Body>
                <div className=" family d-flex justify-content-center align-items-center row ">
                  <Card.Title>
                    <p>User name : {profile.name}</p>
                  </Card.Title>
                  <Card.Title>
                    <p>Job:{profile.job}</p>
                  </Card.Title>
                  <Card.Title>
                    {" "}
                    <p>Job Role:{profile.jobrole}</p>
                  </Card.Title>
                  <Card.Title>
                    {" "}
                    <p> Job Description:{profile.description}</p>
                  </Card.Title>
                </div>

                <div className="BtnCss d-flex justify-content-between  align-items-center">
                  <Button
                    onClick={() => updateBtn(profile.id)}
                    className="btn btn-primary"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => deleteBtn(profile.id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Container>
        ))}
      </div>
    </>
  );
}

export default Home;
