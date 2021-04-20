import React from 'react';
import './style/RegisterView.scss'
import Title from '../../../components/common/Title/Title'
const RegisterView:React.FC = () => {
    return (
        <div className = "Register-view">
            <div className="Register-view-title-container">
                <p>Sign Up for Tora!</p>
            </div>
            <div className = "Register-view-container">
                <form className = "RegisterForm">
                    <div className = "Register-title">
                        <p>UserName</p>
                    </div>
                    <div className = "Register-form-input-container">   
                        <input type = "input" id="register-username" placeholder = "UserName" required/>
                    </div>
                    <div className = "Register-title">
                        <p>Email/ID</p>
                    </div>
                    <div className = "Register-form-input-container">
                        <input type = "input" id="register-id" placeholder = "Email/ID" required/>
                    </div>
                    <div className = "Register-title">
                        <p>Password</p>
                    </div>
                    <div className = "Register-form-input-container">
                        <input type = "password" id="register-pw" placeholder = "Password" required/> 
                    </div>
                    <div className = "Register-title">
                        <p>Verify-Password</p>
                    </div>
                    <div className = "Register-form-input-container">
                        <input type = "password" id="register-verifypw" placeholder = "Verify-Password" required/> 
                    </div>
                </form>
            </div>
            <div className = "Register-form-side-container">
                <div className = "Register-form-side-container1">
                    <input type='submit' value=""/>
                    <p>500MB 제공</p>
                </div>
                <div className = "Register-form-side-container2">
                    <input type='submit' value=""/>
                    <p>화상코딩 50명까지</p>
                </div>
            </div>
            <div className = "Register-form-submit-button-container">
                    <input type = "submit" value = "Sign-Up"/>
            </div> 
        </div>
    );
};

export default RegisterView