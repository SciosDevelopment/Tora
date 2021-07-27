import axios from 'axios'
import React, { useState } from 'react'
import './style/ChangePassword.scss'

const ChangePassword = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [data, setData] = useState({password:"",new_password:"",confirm_password:""})
    const {close} = props
    
    const handleChange = (e) => {
        const {target : {name, value}} = e
        setData({...data, [name]: value})
    }

    const changePw = async() => {   
        
        const data_ = {user : {password:data.password, new_password:data.new_password, confirm_password:data.confirm_password}}
        
        if(data.new_password !== data.confirm_password) {
            alert("변경할 비밀번호가 서로 일치하지 않습니다.")
            return
        }
        
        axios.put(`${SERVER_IP}/api/v1/user/change_password`, data_)
        .then(()=>{ 
            alert("change Password complete")
            close("") // close modal
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message

                if(status === 400) alert(e) // temp error
                if(status === 401) alert("현재 비밀번호가 일치하지 않습니다.")
                if(status === 404) { // re-login
                    alert("로그인이 필요합니다.")
                    // history.replace("/login")
                }

                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                alert("internal server error")
            }
            else console.log('Client Error', e.message)
        })
    }

    return (
        <div className = "ChangePassword-main">
            <div className = "ChangePassword-form">
                <p>Current Password</p>
                <input type = "password" name="password" onChange={handleChange}/>
                <p>Change Password</p>
                <input type = "password" name="new_password" onChange={handleChange}/>
                <p>Verify Password</p>
                <input type = "password" name="confirm_password" onChange={handleChange}/>
            </div>
            <div className = "ChangePassword-footer">
                <div className = "ChangePassword-cancel">
                    <input type = "button" value = "취소" onClick={()=>close("")}/>
                </div>
                <div className = "ChangePassword-confirm">
                    <input type = "button" value = "확인" onClick={changePw}/>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword