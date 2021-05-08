import axios from 'axios'
import React, {FunctionComponent, useState} from 'react'
import './style/LoginView.scss'
import {useCookies} from 'react-cookie'
import {history} from '../../../configureStore'
import useUser from '../../../hooks/useUser'

const LoginView:FunctionComponent<any> = () => {

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [userinfo, setUserinfo] = useState({userID:"", password:""})
    const [cookies, setCookie] = useCookies(['ToraLoginToken', 'ToraID'])
    const {onSetUserInfo} = useUser()

    const handleChange = (e) => {
        const{target : {name, value}} = e
        setUserinfo({...userinfo, [name]:value})
    }

    const gotoRegister = () => { history.push('/register') }
    const gotoReset = () => { history.push('/reset_pw') }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }

    const login = () => {
        const data = {user:{email: userinfo.userID, password:userinfo.password}}
        axios.put(`${SERVER_IP}/api/v1/user/login`, data)
        .then((res)=> {
            // 200
            const {accessToken} = res.data
            axios.defaults.headers.common['Authorization'] = `${process.env.REACT_APP_TOKEN_FRONT} ${accessToken} ${process.env.REACT_APP_TOKEN_BACK}`
            const TOKEN_EXPIRY_TIME = 30 * 24 * 3600 * 1000 // 30일 유지

            setCookie('ToraLoginToken', axios.defaults.headers.common['Authorization'], {maxAge:TOKEN_EXPIRY_TIME})
            setCookie('ToraID', userinfo.userID, {maxAge:TOKEN_EXPIRY_TIME})
            onSetUserInfo(userinfo.userID)
            alert(`Welcome ${cookies.ToraID}`)
        })
        .catch((e)=>{
              if(e.response) {
                var status = e.response.status // or use message
                if(status === 401) alert("id or password is invalid")
                if(status === 400) alert(e)
                
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

    }

    return (
        <div className = "LoginView-main">
        <div className = "Login-main-container">
            <form className = "Login-input-container" onSubmit ={handleSubmit}>
                <div>
                    <p>Email Address</p>
                    <div className = "Login-input">
                        <input name = "userID" type = "input" required value = {userinfo.userID} onChange = {handleChange}/>
                    </div>
                </div>
                <div>
                    <p>Password</p>
                    <div>
                        <input name = "password" type = "password" required value = {userinfo.password} onChange = {handleChange}/>
                    </div>
                </div>

                <button>Login</button>
               
            </form>

            <div className = "Login-button-etc-info-container">

                <div className = "Login-etc-info">
                    <p onClick = {gotoRegister}>Sign up for Tora</p>
                    <p onClick = {gotoReset}>Search Email Address</p>
                    {/* <p>Social Login</p> */}
                </div>
                <div className = "Social-login-container">
                </div>
            </div>

        </div>
        <div className = "Login-main-text-area">
            <div className = "Login-main-title-area">
                {
                    `Built for
                    developers`
                }
            </div>
            <div className = "Login-main-description-area">
                <p>Tora is a development platform inspired by the way you work. From open source to business, 
                   you can host and review code, manage projects, and build software alongside 50 million developers.</p>
            </div>
        </div>
    </div>
    )
}

export default LoginView