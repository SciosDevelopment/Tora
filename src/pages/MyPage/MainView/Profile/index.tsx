import React from 'react'
import './style/Profile.scss'
import heartlogo from '../../../../img/heart64.png'
import modify from '../../../../img/tora-setting-icon.png'
import profile from '../../../../img/profile4.png'

const Profile = () => {
    return (
        <div className = "Mypage-profile-main">
            <div className = "Mypage-profile-modify">
                <img src = {modify}/>
            </div>
            <div className = "Mypage-profile-default-wrapper">
                <img src = {profile}/>
                <div className = "Mypage-profile-default-main">
                    <div className = "Mypage-profile-name">
                        <p>{`name`}</p>
                    </div>
                    <div className = "Mypage-profile-desc">
                        <p>{`자기소개`}</p>
                    </div>
                    <div className = "Mypage-profile-email">
                        <p>{`e-mail`}</p>
                    </div>
                </div>
            </div>

            <div className = "Mypage-profile-info-wrapper">     
                <div className = "Mypage-profile-info-main">
                    <div className = "Mypage-profile-follow">
                        <div className = "Mypage-profile-follower">
                            <p>Follower 400</p>
                        </div>
                        <div className = "Mypage-profile-following">
                            <p>Following 200</p>
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