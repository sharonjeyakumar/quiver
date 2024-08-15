import React from "react";
import './Home.css';
import Navbar from '../../components/Navbar/navbar.jsx'


const Home = () => {

    return (
        <div className="HomeContainer">
            <Navbar></Navbar>
            <div className="apps-container">
                <a href="/Home/pass">Password Manager</a>
            </div>
        </div>
    );

};

export default Home;