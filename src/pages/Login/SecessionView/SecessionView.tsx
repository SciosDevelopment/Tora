import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './style/SecessionView.scss'
import useUser from '../../../hooks/useUser'
import {history} from 'src/configureStore'
import {useCookies} from 'react-cookie'
import dotenv from 'dotenv'

dotenv.config()

const SecessionView:React.FC = () => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [inputs, setInputs] = useState({userID:"", password:"", confirmmessage:""})
    const {onSetUserInfo, onGetUserInfo} = useUser()
    const [cookies, _, removeCookie] = useCookies(['ToraLoginToken', 'ToraID'])

    useEffect(()=>{
        // 로그인이 되어있지 않다면, 메인으로 이동
        if(onGetUserInfo === null) {
            history.replace("/")
            return
        }
        setInputs({...inputs, userID:onGetUserInfo.toString()})
    },[])

    const logout = () => {
        // remove client data
        onSetUserInfo("")
        removeCookie('ToraLoginToken')
        removeCookie('ToraID')
        axios.defaults.headers.common['Authorization'] = null
    }

    const secession = async() => {
        // 204: 성공
        // 400: 오류
        // 404: 유저를 찾을 수 없음
        const data = {user:{id:inputs.userID, password:inputs.password}}
        axios.put(`${SERVER_IP}/api/v1/user/secession`, data)
        .then((res)=>{ // 204
            alert("success secession")
            logout()
        })
        .catch((e)=>{
            // error : status is not defined.
            if(e.response) {
                var status = e.response.status // or use message
                // 이미 등록된 사용자일때 : temp-status
                if(status === 404) {
                    alert("already seceded user")
                    logout()
                }

                if(status === 400) alert(e)
                
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                alert("internal server error")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        })
    }
    
    const handleChange = (e) => {
        const{target : {name, value}} = e
        setInputs({...inputs, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputs.confirmmessage !== "delete account") {
            alert("incorrect confirm message")
            return
        }
        secession()
    }

    return (
        <div className = "Secess-account-view">
            <div className = "Secess-account-title">
                {`Are you sure to delete this account ?`}
            </div>
            <div className = "Secess-account-text-area">
                {
                    `Once you delete your account,
                    you can not restore your repos,
                    community posts, and etc.
                    After you delete your account,
                    your username could be used by 
                    other users.`
                }

            </div>

            <form className = "Secess-account-input-form" onSubmit ={handleSubmit}>
                <div className = "Secess-account-input-wrapper">
                    {
                        `type in your password to 
                        procede to delete account`
                    }
                     <div className = "Secess-account-input-container">
                        <input type = "input" name="password" required onChange={handleChange}/>
                    </div>
                </div>
                
                <div className = "Secess-account-input-wrapper">
                    {
                        `type "delete account" below 
                        to finish deleting your account`
                    }
                      <div className = "Secess-account-input-container">
                        <input type = "input" name="confirmmessage" required onChange={handleChange}/>
                    </div>
                </div>
                
                <div className = "Secess-account-submit-button">
                    <button>Delete Account</button>
                </div>
            </form>
        </div>
    );
};

export default SecessionView