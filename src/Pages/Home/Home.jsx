import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar.jsx';
import './Home.css';
import passwordImage from '../../components/Assets/passManagerPF.png'; // Import image

const Home = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/Home/pass'); // Navigate on click
    };

    return (
        <div className="HomeContainer">
            <Navbar />
            <div className="apps-container">
                <h1>Welcome to the Dashboard</h1>
                <div className="app-links">
                    <div className="achievement-container" onClick={handleImageClick}>
                        <img 
                            src={passwordImage} 
                            alt="Password Manager" 
                            className="achievement-image"
                        />
                        <div className="achievement-overlay">
                            <p>View Password Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
