import React, { useState, useRef } from "react";
import './Login_Signup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/lock.png';
import { useNavigate } from 'react-router-dom';


const Login_Signup = () => {
    const [action, setAction] = useState("Sign Up");
    
    const formRef = useRef(null);
    const navigate = useNavigate();     //navigation form one page to another

    const [email, setEmail] = useState('');    //test for email and password
    const [password, setPassword] = useState('');

    const handleActionChange = (newAction) => {     //to reset form page when you move from one to another page
        if (formRef.current) {
            formRef.current.reset();
        }
        setAction(newAction);
    };

    const LoginClicked = () => {    //This is the login logic
        if (password === 'pass' && email === 'email') {
            navigate('/Home');      //navigation from one page to another
        }     
        else {
            alert("Invalid credentials");
        }
    };



    return (
        <div className="containerPage-Login_Signup">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form ref={formRef}>
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleActionChange("Sign Up")}>
                        signup
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => handleActionChange("Login")}>
                        Login
                    </div>
                </div>
                <div className="inputs">
                    {action === "Login" ? null : (
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="username" name="username" />
                        </div>
                    )}
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type={action === "Sign Up" ? "text" : "password"} placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Forgot password? <span>Click Here!</span>
                    </div>
                )}

                {action === "Login" ?
                    <div className="Login-btn" onClick={LoginClicked}>
                        <div>Login</div>
                    </div> :
                    <div className="Login-btn" style={{ margin: '20px' }}>
                        <div>Sign UP</div>
                    </div>}
            </form>
        </div>
    );
};

export default Login_Signup;
