import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./main.css"
import Login_Signup from "./components/Login_Signup/Login_Signup.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./components/Contact/contact.jsx"


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Login_Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
