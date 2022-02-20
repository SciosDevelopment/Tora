import axios from 'axios'
import React, {FunctionComponent, useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {history} from '../../../configureStore'
import useUser from '../../../hooks/useUser'

const LoginView:FunctionComponent<any> = () => {

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [userinfo, setUserinfo] = useState({userID:"", password:""})
    const [cookies, setCookie] = useCookies(['ToraLoginToken', 'ToraID', 'ToraNoID'])
    const {onSetUserInfo, onSetUserID, onGetUserInfo} = useUser()
    
    useEffect(()=>{
        // 로그인이 되어있으면, 메인으로 이동
        if(onGetUserInfo !== null || cookies.ToraLoginToken || axios.defaults.headers.common['Authorization']) {
            alert("already login")
            history.replace("/")
            return
        }
    },[])

    const handleChange = (e) => {
        const{target : {name, value}} = e
        setUserinfo({...userinfo, [name]:value})
    }

    const gotoRegister = () => { history.push('/signup') }
    const gotoReset = () => { history.push('/reset_pw') }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }
    
    const login = () => {
        const data = {user:{email: userinfo.userID, password:userinfo.password}}
        axios.post(`${SERVER_IP}/api/v1/user/login`, data)
        .then((res)=> {
            const accessToken = res.data[`JWT token`]
            axios.defaults.headers.common['Authorization'] = `${accessToken}`
            var ExpiryTime = new Date()
            const TOKEN_EXPIRY_TIME = 10
            ExpiryTime.setDate(new Date().getDate() + TOKEN_EXPIRY_TIME) // 10시간 유지
            setCookie('ToraLoginToken', axios.defaults.headers.common['Authorization'], {expires:ExpiryTime})
            setCookie('ToraID', userinfo.userID, {expires:ExpiryTime})
            setCookie('ToraNoID', res.data[`userInfo`].id, {expires:ExpiryTime})
            onSetUserInfo(userinfo.userID)
            onSetUserID(res.data[`userInfo`].id)
            alert(`Welcome ${userinfo.userID}`)
            history.replace("/")
        })

        .catch((e)=>{
              if(e.response) {
                var status = e.response.status // or use message
                const {message} =JSON.parse(e.request.response)
                // 메일 미인증 : 401
                if(status === 401) {
                    // 인증메일 재전송 부분 : 구현 필요
                    alert(message)
                }

                // id 미존재 혹은 pw 불일치 : 404
                if(status === 404) {
                    alert(message)
                }
                
                if(status === 400) console.log(e.response.message)
                
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
        <div className = "loginMain">
            <div>
            <p>Sign into your account ToraPod</p>
            <div className = "formcontainer">
                <form className = "form" onSubmit ={handleSubmit}>
                    <div><p>Email Address</p></div>
                    <div className='container'>
                        <input name = "userID" type = "input" required value = {userinfo.userID} onChange = {handleChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <p onClick = {gotoReset}>Forgot your password?</p>
                    </div>
                    <div className='container'>
                        <input name = "password" type = "password" required value = {userinfo.password} onChange = {handleChange}/>
                    </div>

                    <button>Sign in</button>
                </form>
                <div className = "etcInfo">
                    <div className = "wrapper">
                        <p>Don't have an account?</p><p onClick = {gotoRegister}>Sign up for Tora</p>
                    </div>
                </div>
                {/* google, github login button 위치 */}
            </div>
            </div>
        </div>
    )
}

export default LoginView