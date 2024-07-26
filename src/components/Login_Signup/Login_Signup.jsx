import React, { useState, useRef } from "react";
import './Login_Signup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/lock.png';

const Login_Signup = () => {
    const [action, setAction] = useState("Sign Up");
    const formRef = useRef(null);

    const handleActionChange = (newAction) => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setAction(newAction);
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form ref={formRef}>
                <div className="inputs">
                    {action === "Login" ? null : (
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="username" name="username" />
                        </div>
                    )}
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="email" name="email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type={action === "Sign Up" ? "text" : "password"} placeholder="password" name="password" />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Forgot password? <span>Click Here!</span>
                    </div>
                )}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleActionChange("Sign Up")}>
                        Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => handleActionChange("Login")}>
                        Login
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login_Signup;
