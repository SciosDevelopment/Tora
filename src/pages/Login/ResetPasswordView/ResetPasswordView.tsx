import React, { useState } from 'react'
import './style/ResetPasswordView.scss'

const ResetPasswordView:React.FC = () => {
    const [checkEmail, setCheckEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("example@email.com");
    const checkEmailStatus = () => {
        //server connect-> if data === true;
        //
    }
    return (
        <div className = "Reset-password-view-main">
            <div className = "Reset-password-title-container">
                {`Reset Your Password`}
            </div>
            
            <form className = "Reset-password-view-form">
                <div className = "Reset-password-view-title">
                    <p>type in your username / email</p>
                </div>

                <div className = "Reset-password-view-input-container">
                    <input/>
                </div>
               
                <div className = "Reset-password-view-alert-text">
                    {`your temporary password
                    has been sent to your account
                    [ ${email} ]`}
                </div>

                <div className = "Reset-password-view-submit-button">
                    <button onClick = {()=>checkEmailStatus}>Reset Password</button>
                </div>
            </form>

        </div>
    );
};

export default ResetPasswordView