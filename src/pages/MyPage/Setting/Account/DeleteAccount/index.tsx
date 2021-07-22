import React, { useState } from 'react'
import './style/MyPageDeleteAccount.scss'
import {history} from '../../../../../configureStore'
import {useCookies} from 'react-cookie'
import useUser from '../../../../../hooks/useUser'
import axios from 'axios'
const MyPageDeleteAccount = (props) => {
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

        // 탈퇴 - 204: 성공, 400: 오류, 404: 유저를 찾을 수 없음
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
                
                // 비밀번호 및 토큰이 유효하지 않을 때,
                if(status === 401) { 
                    alert("비밀번호가 맞지 않거나, 로그인 세션이 만료되었습니다.") 
                }
                
                // 이미 삭제된 사용자일때
                if(status === 404) {
                    logout()
                    alert("already seceded user")
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

    return (
        (
            <div className = "MyPage-DeleteAccount">
                <div className = "MyPage-DeleteAccount-title">
                    <p>Delete My Account</p>
                </div>
                <div className = "MyPage-DeleteAccount-check">
                    <p>회원탈퇴 시 모든 자료가 삭제 됩니다. 동의하시겠습니까?</p>
                    <input type = "checkbox" name = "account" defaultChecked={agree} onChange={()=>setAgree(!agree)}/>
                </div>
                <div className = "MyPage-DeleteAccount-password">
                    <input type="password" name="pw" placeholder="Write Password" value={pw} onChange={handleChange}/>
                </div>
                <div className = "MyPage-DeleteAccount-btn">
                    <div className = "MyPage-DeleteAccount-cancel-btn">
                        <input type = "button" value = "취소"/>
                    </div>
                    <div className = "MyPage-DeleteAccount-agree-btn">
                        <input type = "button" value = "확인" onClick={secession}/>
                    </div>
                </div>
            </div>
        )
    )
};

export default MyPageDeleteAccount