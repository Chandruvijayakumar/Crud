import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Update from "./Components/Update";
import Add from "./Components/Add";
import "./index.css";
import User from "./Components/User";
import NavBar from "./Components/NavBar";
import './App.css'
const App = () => {
  const [id, setId] = useState(0);
  return (
    <>
      <BrowserRouter className="col col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home setId={ setId} />} />
          <Route path="/user" element={<User setId={setId} />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update id={id} />} />
          {/* <Route path="/update" element={<Update id={id} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
