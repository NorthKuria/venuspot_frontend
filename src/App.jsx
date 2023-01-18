import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route exact path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfileUserPage />} /> */}
      </Routes>

    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}
