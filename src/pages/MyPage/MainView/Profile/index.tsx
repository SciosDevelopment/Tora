import React from 'react'
import './style/MyPageViewProfile.scss'
import heartlogo from '../../../../img/heart64.png'
import modify from '../../../../img/tora-setting-icon.png'
import profile from '../../../../img/profile4.png'

const MyPageProfile = () => {
    return (
        <div className = "profile-view-main">
            <div className = "profile-view-modify">
                <img src = {modify}/>
            </div>
            <div className = "profile-view-img-container">
                <img src = {profile}/>
                <div className = "profile-view-profile-main">
                    <div className = "profile-view-name">
                        <p>{`이름`}</p>
                    </div>
                    <div className = "profile-view-info">
                        <p>{`자기소개`}</p>
                    </div>
                    <div className = "profile-view-email">
                            <p>{`e-mail`}</p>
                    </div>
                </div>
            </div>

            <div className = "profile-view-info-wrapper">     
                <div className = "profile-view-info-main">
                        <div className = "profile-view-follow">
                            <div className = "profile-view-follower">
                                <p>Follower 400</p>
                            </div>
                            <div className = "profile-view-following">
                                <p>Following 200</p>
                            </div>
                        </div>
                        <div className = "profile-view-total-like">
                            <div className = "profile-view-total-position">
                                <p>Position</p>
                            </div>
                            <div className = "profile-view-total-language">
                                <p>Program Language</p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default MyPageProfile