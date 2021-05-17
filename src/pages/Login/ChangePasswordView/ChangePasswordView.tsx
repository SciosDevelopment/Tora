import React, { useState } from 'react'
import './style/ChangePasswordView.scss'

const ChangePasswordView:React.FC = () => {
    const [checkEmail, setCheckEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("example@email.com");
    const checkEmailStatus = () => {
        //server connect-> if data === true;
        //
    }
    return (
        <div className = "Change-password-view-main">
            <div className = "Change-password-title-container">
                {`Please fill out the password you want to change`}
            </div>
            
            <form className = "Change-password-view-form">
                <div className = "Change-password-view-title-change">
                    <p>Password to change</p>
                </div>

                <div className = "Change-password-view-input-container">
                    <input/>
                </div>

                <div className = "Change-password-view-title-confirm">
                    <p>Confirm Password to Change</p>
                </div>

                <div className = "Change-password-view-input-container">
                    <input/>
                </div>

                <div className = "Change-password-view-submit-button">
                    <button onClick = {()=>checkEmailStatus}>Confirm change</button>
                </div>
            </form>

        </div>
    );
};

export default ChangePasswordView