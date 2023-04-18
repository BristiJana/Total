import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f7efe5" }}>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
