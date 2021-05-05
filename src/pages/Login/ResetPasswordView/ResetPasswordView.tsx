import axios from 'axios'
import React, { useState } from 'react'
import { history } from '../../../configureStore'
import './style/ResetPasswordView.scss'

const ResetPasswordView:React.FC = () => {
    const [checkEmail, setCheckEmail] = useState<boolean>(false)
    const [emailinfo, setEmailinfo] = useState<string>("example@email.com")
    
    // email 유효성 검사
    const checkEmailStatus = () => {
        const regex_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i 
        
        if(emailinfo.match(regex_email)) sendMail()        
        else{
            alert("email 형식이 다릅니다.")
            setEmailinfo("")
        } 
    }

    const sendMail = async() => {
        // send to email
        const data = {user:{email:emailinfo}}
        axios.put("/api/v1/user/send_reset_password_email", data)
        .then((res)=>{
            alert("send reset password email to " + emailinfo)
            setCheckEmail(true)
        })
        .catch((e)=>{
            // temp status
            alert("internal server error")
        })
    }
    
    const handleChange = (e) => {
        const{target : {_, value}} = e
        setEmailinfo(value)
    }

    return (
        <div className = "Reset-password-view-main">
            <div className = "Reset-password-title-container">
                {`Reset Your Password`}
            </div>
            
            <div className = "Reset-password-view-form">
                <div className = "Reset-password-view-title">
                    <p>type in your username / email</p>
                </div>

                { checkEmail !== true ?
                    <div className = "Reset-password-view-input-container">
                        <input onChange={handleChange}/>
                    </div>
                :
                    <div className = "Reset-password-view-alert-text">
                        your temporary password
                        has been sent to your account
                        [ {emailinfo} ]
                    </div>
                }

                <div className = "Reset-password-view-submit-button">
                    <button onClick = {checkEmailStatus}>Reset Password</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordView