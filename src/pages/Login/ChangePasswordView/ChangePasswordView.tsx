import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { history } from 'src/configureStore'
import './style/ChangePasswordView.scss'

interface TokenProps {
    token:string
}

const ChangePasswordView = (tk:TokenProps) => {
    const {token} = tk
    const [PWgroup, setPWgroup] = useState({new_password:"", confirm_password:""})
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

    useEffect(()=>{
        if(token === undefined) {
            alert("token is invalid") 
            history.replace("/")
        }
    },[])

    const handleChange = (e) => {
        const{target : {name, value}} = e
        setPWgroup({...PWgroup, [name]:value})
    }
    const regex ={
        pw_check:/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/ // 8~15자 문자와 숫자, 특수문자
    }

    const isvalid = () => PWgroup.new_password.match(regex.pw_check) 

    const changePw = () => {
        if(!isvalid()) {
            alert("password length is 8~15 and consists of least 1 Eng, num, Special Character")
            return
        }

        const params = { 
                            user: {
                                    reset_password_token: token,
                                    new_password:PWgroup.new_password,
                                    confirm_password: PWgroup.confirm_password
                                } 
                        } 

        axios.put(`${SERVER_IP}/api/v1/user/reset_password`, params)
        .then((res) => {
            alert("complete password change, try login")
            history.replace("/login")
        })
        .catch((e)=> {
            if(e.response) {
                var status = e.response.status // or use message
                const {message} =JSON.parse(e.request.response)
                if(status === 404) {
                    // id 존재 x : 404
                    alert("this is invalid token")
                    history.replace("/")
                }
                if(status === 401) {
                    // pw 불일치 : 401
                    alert("password is incorrect. try this again")
                    setPWgroup({new_password:"", confirm_password:""})
                }

                if(status === 400) { // default error
                    alert("server is dead. try this again.")
                    console.log(e.response.message)
                }
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                alert("server is dead")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        })
    }

    return (
        <div className = "Change-password-view-main">
            <div className = "Change-password-title-container">
                {`Please fill out the password you want to change`}
            </div>
            
            <div className = "Change-password-view-form" >
                <div className = "Change-password-view-title-change">
                    <p>Password to change</p>
                </div>

                <div className = "Change-password-view-input-container">
                    <input name ="new_password" type="password" required value = {PWgroup.new_password} onChange={handleChange}/>
                </div>

                <div className = "Change-password-view-title-confirm">
                    <p>Confirm Password to Change</p>
                </div>

                <div className = "Change-password-view-input-container">
                    <input name ="confirm_password" type="password" required value = {PWgroup.confirm_password} onChange={handleChange}/>
                </div>

                <div className = "Change-password-view-submit-button">
                    <button onClick={changePw}>Confirm change</button>
                </div>
            </div>

        </div>
    );
};

export default ChangePasswordView