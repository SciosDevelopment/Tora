import axios from 'axios'
import React, { useState } from 'react'
import { history } from 'src/configureStore'

const ResetPasswordView:React.FC = () => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [checkEmail, setCheckEmail] = useState<boolean>(false)
    const [emailinfo, setEmailinfo] = useState<string>("test@email.com")
    
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
        <div className = "resetPassword">
            <div>
                <p>Find your password?</p>
                <div className = "form">
                    { checkEmail !== true ?
                        <>
                        <div className = "title">
                            <p>Email Address</p>
                        </div>
                        <div className = "container">
                            <input type="text" onChange={handleChange}/>
                        </div>
                        <div className="desc"><p>Enter your ToraPod user account's verified email address</p></div>
                        <div className = "submit">
                            <button onClick = {checkEmailStatus}>Send email</button>
                        </div>
                        </>
                    :   
                        <>
                            <div className = "alertmessage">
                                You successfully sent an email <br/>
                                Please check your email
                                <p>[ {emailinfo} ]</p>
                            </div>
                            <div>
                                <button onClick = {()=>history.replace("/")}>OK</button>
                            </div>
                        </>
                    }
                   
                    <div className="desc">
                        <p>Don't have an account? <a onClick = {()=>history.push("/signup")}>Sign up for Tora</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordView