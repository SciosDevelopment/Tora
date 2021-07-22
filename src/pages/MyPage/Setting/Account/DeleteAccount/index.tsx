import React, { useState } from 'react'
import './style/DeleteAccount.scss'
import {history} from '../../../../../configureStore'
import {useCookies} from 'react-cookie'
import useUser from '../../../../../hooks/useUser'
import axios from 'axios'

const DeleteAccount = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {getEmail} = props
    const [pw, setPw] = useState("")
    const [agree, setAgree] = useState(false)
    const {onSetUserInfo, onGetUserInfo} = useUser()
    const [cookies, _, removeCookie] = useCookies(['ToraLoginToken', 'ToraID'])

    const handleChange = (e) => {
        const {target : {name, value}} = e
        setPw(value)
    }

    const logout = () => {
        // remove client data
        onSetUserInfo("")
        removeCookie('ToraLoginToken')
        removeCookie('ToraID')
        axios.defaults.headers.common['Authorization'] = null
    }

    const secession = async() => {
        
        if(!agree) {
            alert("동의가 필요합니다")
            return
        }

        // 탈퇴 - 204: 성공, 400: 오류, 404: 유저를 찾을 수 없음 (비밀번호 오류, 이미 탈퇴한 사용자)
        const data = {user:{email:getEmail(), password:pw}}
        
        axios.put(`${SERVER_IP}/api/v1/user/secession`, data)
        .then((res)=>{ // 204
            logout()
            alert("success secession")
            history.replace("/")
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                
                // if(status === 401) {}
                // 비밀번호 및 토큰이 유효하지 않을 때,
                if(status === 404) alert("비밀번호가 맞지 않거나, 로그인 세션이 만료되었습니다.") 

                // temp error
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

    return (
        (
            <div className = "DeleteAccount-main">
                <div className = "DeleteAccount-title">
                    <p>Delete My Account</p>
                </div>
                <div className = "DeleteAccount-check">
                    <p>회원탈퇴 시 모든 자료가 삭제 됩니다. 동의하시겠습니까?</p>
                    <input type = "checkbox" name = "account" defaultChecked={agree} onChange={()=>setAgree(!agree)}/>
                </div>
                <div className = "DeleteAccount-password">
                    <input type="password" name="pw" placeholder="Write Password" value={pw} onChange={handleChange}/>
                </div>
                <div className = "DeleteAccount-btn-container">
                    <div className = "DeleteAccount-cancelbtn">
                        <input type = "button" value = "취소"/>
                    </div>
                    <div className = "DeleteAccount-confirmbtn">
                        <input type = "button" value = "확인" onClick={secession}/>
                    </div>
                </div>
            </div>
        )
    )
};

export default DeleteAccount