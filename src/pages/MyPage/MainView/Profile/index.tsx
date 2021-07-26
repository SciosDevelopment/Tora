import React from 'react'
import './style/Profile.scss'
import heartlogo from '../../../../img/heart64.png'
import modify from '../../../../img/tora-setting-icon.png'
import profile from '../../../../img/profile4.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { history } from 'src/configureStore'

const Profile = (props) => {
    const {data, isMe} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const[userdata, setData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null})
    useEffect(()=>{ setData(data) },[data])

    return (
        <div className = "Mypage-profile-main">
            <div className = "Mypage-profile-modify">
                {props.isMe && <img src = {modify} onClick={()=>history.push("/mypage/me/setting")}/>}
            </div>
            <div className = "Mypage-profile-default-wrapper">
                <img src = {userdata.photo === null ? profile : SERVER_IP + userdata.photo}/>
                <div className = "Mypage-profile-default-main">
                    <div className = "Mypage-profile-name">
                        <p>{userdata.name}</p>
                    </div>
                    <div className = "Mypage-profile-desc">
                        <p>{userdata.about_me === null ? "자기소개": userdata.about_me}</p>
                    </div>
                    <div className = "Mypage-profile-email">
                        <p>{userdata.email}</p>
                    </div>
                </div>
            </div>

            <div className = "Mypage-profile-info-wrapper">     
                <div className = "Mypage-profile-info-main">
                    <div className = "Mypage-profile-follow">
                        <div className = "Mypage-profile-follower">
                            <p>Follower {userdata.followers}</p>
                        </div>
                        <div className = "Mypage-profile-following">
                            <p>Following {userdata.followings} </p>
                        </div>
                    </div>
                    <div className = "Mypage-profile-total-like">
                        <div className = "Mypage-profile-total-position">
                            <p>Position</p>
                        </div>
                        <div className = "Mypage-profile-total-language">
                            <p>Program Language</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile