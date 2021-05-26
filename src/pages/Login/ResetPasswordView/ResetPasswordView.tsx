import axios from 'axios'
import React, { useState } from 'react'
import './style/ResetPasswordView.scss'

const ResetPasswordView:React.FC = () => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
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
        axios.put(`${SERVER_IP}/api/v1/user/send_reset_password_email`, data)
        .then((res)=>setCheckEmail(true))
        .catch((e)=>{
            // temp status
            if(e.response) {
                var status = e.response.status // or use message
                // 등록되지않은 사용자일때
                if(status === 404) alert("등록되지않은 사용자입니다")
                if(status === 400) console.log(e.request)
                
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                // temp
                alert("internal server error")
                console.log(e.request)
            }
            else console.log('Error', e.message)
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