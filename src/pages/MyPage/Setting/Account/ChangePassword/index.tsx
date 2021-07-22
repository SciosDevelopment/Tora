import axios from 'axios'
import React, { useState } from 'react'
import './style/ChangePassword.scss'

const ChangePassword = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [data, setData] = useState({curPw:"",chnPw:"",chnVerify:""})
    const {close} = props
    
    const handleChange = (e) => {
        const {target : {name, value}} = e
        setData({...data, [name]: value})
    }

    const changePw = async() => {   
        // 비밀번호 변경 - api 주소 없음 (구현 요청 필요)
        console.log("Hello")
        axios.put(`${SERVER_IP}/api/v1/user/changePassword`, data)
        .then((res)=>{ 
            alert("change Password complete")
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                // temp error
                if(status === 400) alert(e)
                if(status === 404) alert(e)

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
            <div className = "ChangePassword-main2">
                <p>Current Password</p>
                <input type = "password" name="curPw" onChange={handleChange}/>
                <p>Change Password</p>
                <input type = "password" name="chnPw" onChange={handleChange}/>
                <p>Verify Password</p>
                <input type = "password" name="chnVerify" onChange={handleChange}/>
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