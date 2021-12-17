import React, {useEffect, useState} from 'react'
import axios from 'axios'
import useUser from '../../../hooks/useUser'
import {history} from 'src/configureStore'
import {useCookies} from 'react-cookie'

const SecessionView:React.FC = () => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [inputs, setInputs] = useState({userID:"", password:"", confirmmessage:""})
    const {onSetUserInfo, onGetUserInfo} = useUser()
    const [cookies, _, removeCookie] = useCookies(['ToraLoginToken', 'ToraID'])

    useEffect(()=>{
        // 로그인이 되어있지 않다면, 메인으로 이동
        if(onGetUserInfo === null) {
            alert("you need to login")
            history.replace("/")
            return
        }
        setInputs({...inputs, userID:onGetUserInfo.toString()})
    },[])

    const logout = () => {
        // remove client data
        onSetUserInfo(null)
        removeCookie('ToraLoginToken')
        removeCookie('ToraID')
        axios.defaults.headers.common['Authorization'] = null
    }

    const secession = async() => {
        // 204: 성공
        // 400: 오류
        // 404: 유저를 찾을 수 없음
        const data = {user:{email:inputs.userID, password:inputs.password}}
        console.log(data)
        console.log(axios.defaults.headers.common)
        axios.put(`${SERVER_IP}/api/v1/user/secession`, data)
        .then((res)=>{ // 204
            logout()
            alert("success secession")
            history.replace("/")
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                
                // 비밀번호 및 토큰이 유효하지 않을 때,
                if(status === 401) { 
                    alert("비밀번호가 맞지 않거나, 로그인 세션이 만료되었습니다.") 
                }
                
                // 이미 삭제된 사용자일때
                if(status === 404) {
                    alert("already seceded user")
                    logout()
                    history.replace("/")
                }

                if(status === 400) alert(e)
                
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                alert("internal server error")
            }
            else console.log('Client Error', e.message)
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
        <div className = "secess">
            <div className = "title">
                {`Are you sure to delete this account ?`}
            </div>
            <div className = "subtext">
                {
                    `Once you delete your account,
                    you can not restore your repos,
                    community posts, and etc.
                    After you delete your account,
                    your username could be used by 
                    other users.`
                }

            </div>

            <form className = "form" onSubmit ={handleSubmit}>
                <div className = "wrapper2">
                    {
                        `type in your password to 
                        procede to delete account`
                    }
                     <div className = "input">
                        <input type = "input" name="password" required onChange={handleChange}/>
                    </div>
                </div>
                <div className = "wrapper2">
                    {
                        `type "delete account" below 
                        to finish deleting your account`
                    }
                      <div className = "input">
                        <input type = "input" name="confirmmessage" required onChange={handleChange}/>
                    </div>
                </div>
                <div className = "submit">
                    <button>Delete Account</button>
                </div>
            </form>
        </div>
    )
}

export default SecessionView