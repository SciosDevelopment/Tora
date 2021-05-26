import axios from 'axios'
import React, { useEffect } from 'react'
import {history} from '../../configureStore'
const ConfirmPage = (props) => {
    const {token} = props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

    useEffect( () => confirm(), [] )
    const confirm = () => {
        const {url} = props.match
        const t = url.split("/")

        switch(t[2]) {
            case "reset_pw":
                history.replace(`/change_pw/${token}`)
                return
            case "signup":
                ConfirmRegister()
                return
            }
        }
    
    const ConfirmRegister = ()=> {
        axios.put(`${SERVER_IP}/api/v1/user/comfirm_email/${token}`)
        .then((res) => {
            console.log("your account accepted, you can try login")
            history.replace("/login")
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                const {message} =JSON.parse(e.request.response)
                if(status === 404) // id 존재 x : 404
                    alert("this is invalid token")
                
                if(status === 409) // 이미 인증된 유저 : 409
                    alert("password is incorrect. try this again")
                
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
            history.replace("/")
        })
    }
    
    return (
        <></>
    )
}

export default ConfirmPage