import axios from 'axios'
import React, { useState } from 'react'
import {history} from '../../../configureStore'

const RegisterView:React.FC = () => {
    // input data
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [userInfo, setUserInfo] = useState({ username : "", email : "", pw : "", verify_pw: ""})

    const handleChange = (e) => {
        const{ name, value} = e.target
        setUserInfo({...userInfo, [name]: value})      
    }
    
    /* 유효성 검사 */
    enum Valid {PASS, INVALID_USERNAME, INVALID_EMAIL, INVALID_PW, PW_NOTSAME}
    
    const regex = {
        email_check: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, 
        pw_check:/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/ // 8~15자 문자와 숫자, 특수문자
    }

    const isvalid = () => {
        if(userInfo.username.length < 2 || userInfo.username.length > 50)
            return Valid.INVALID_USERNAME // username 부적합 : 부적절한 길이
        if(!userInfo.email.match(regex.email_check)) 
            return Valid.INVALID_EMAIL // email 부적합 : email 형태가 아님
        if(!userInfo.pw.match(regex.pw_check))
            return Valid.INVALID_PW // pw 부적합 : regex.pw_check에 위배
        if(userInfo.pw !== userInfo.verify_pw) 
            return Valid.PW_NOTSAME // pw 불일치 : pw와 verify_pw가 일치하지않음
        return Valid.PASS // pass
    }
    /* 유효성검사 끝 */

    /* 사용자 등록 */
    const RegisterErrorMessage = ["","invalid username", "invalid email", "invalid password", "not match pw/pw-verify"]
    
    const register = () => {
        const flag = isvalid()
        const data = { user : { email:userInfo.email, password:userInfo.pw, name:userInfo.username }}
        if(!flag) { // send userInfo to server : temp - alert 
            axios.post(`${SERVER_IP}/api/v1/user/sign_up`, data)
            .then((res)=> {
                    alert("we send confirm email, check mailbox")
                    //Send mail
                    history.replace("/login")
            })
            .catch(e=> {
                // error : status is not defined.
                if(e.response) {
                    var status = e.response.status // or use message
                    // 이미 등록된 사용자일때 : temp-status
                    if(status === 409) alert("already exist user")
                    if(status === 400) console.log(e.request)
                    
                    // 서버 연결 문제일때 : temp-status
                    if(status >= 500) alert("server is dead")
                }
                else if(e.request) {
                    // temp
                    alert("server is dead")
                    console.log(e.request)
                }
                else console.log('Error', e.message)
            }) 

            resetInput() // input init
        } else { // error context : 유효성검사 실패 원인 출력
            alert(RegisterErrorMessage[flag]) 
        }
    } 

    const resetInput = () => setUserInfo({ username : "", email : "", pw : "", verify_pw: ""})
    /* 사용자 등록 끝 */

    return (
        <div className = "signup">
            <div>
            <p>We always support you!</p>
                <div className = "formcontainer">
                    <div className = "form">
                        <div className = "title"><p>UserName</p></div>
                        <div className = "container">   
                            <input type = "text" name="username" required value = {userInfo.username} onChange = {handleChange}/>
                        </div>
                        <div className = "title"><p>Email Address</p></div>
                        <div className = "container">
                            <input type = "text" required name="email" value = {userInfo.email} onChange = {handleChange}/>
                        </div>
                        <div className = "title"><p>Password</p></div>
                        <div className = "container">
                            <input type = "password" required name="pw" value = {userInfo.pw} onChange = {handleChange}/> 
                        </div>
                        <div className = "title"><p>Verify-Password</p></div>
                        <div className = "container">
                            <input type = "password" required name="verify_pw" value = {userInfo.verify_pw} onChange = {handleChange}/> 
                        </div>
                        <button onClick={register}>Create account</button>
                    </div>

                    <div className = "etcInfo">
                        <div className = "wrapper">
                            <p>By clicking Register, I agree that I have read and <br/> accepted the ToraPod <a>Terms of Use and Privacy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView