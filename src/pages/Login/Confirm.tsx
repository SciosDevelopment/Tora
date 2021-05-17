import axios from 'axios'
import React from 'react'
import {history} from '../../configureStore'
const ConfirmPage = (props) => {
    const {token} = props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

    const confirm = () => {
        const {url} = props.match
        const t = url.split("/")
        console.log(t[2])

        switch(t[2]) {
            case "reset_pw" :
                ConfirmResetpw()
                return
            case "signup":
                ConfirmRegister()
                return
            }
        }
    
    const ConfirmRegister = ()=> {
        axios.get(`${SERVER_IP}/confirm_register`) // temp url
        .then((res) => {
            console.log(res)
            history.replace("/")
        })
        .catch((e)=>{

        })
    }

    const ConfirmResetpw = ()=>{
        axios.get(`${SERVER_IP}/confirm_reset_pw`) // temp url
        .then((res) => {
            console.log(res)
            history.replace("/change_pw")
        })
        .catch((e)=>{

        })
    }
    
    return (
        <><div>
            <input type="button" value="Test" onClick={confirm}/>
        
        </div>
        </>
    )
}

export default ConfirmPage