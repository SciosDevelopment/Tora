import React from 'react';
import './style/MyPageViewProfile.scss'
import heartlogo from '../../../../img/heart64.png'
import modify from '../../../../img/modify.png'
import profile from '../../../../img/profile4.png'
const MyPageViewProfile = () => {
    return (
        <div className = "profile-view-main">
            <div className = "profile-view-img-container">
                <img src = {profile}/>
                <div className = "profile-view-profile-main">
                    <div className = "profile-view-name">
                        <p>{`이름`}</p>
                    </div>
                    <div className = "profile-view-info">
                        <p>{`자기소개`}</p>
                    </div>
                </div>
            </div>


            <div className = "profile-view-info-wrapper">     
                <div className = "profile-view-info-main">
                    <div className = "profile-view-email-main">
                        <div className = "profile-view-email">
                            <p>{`e-mail`}</p>
                        </div>
                        <div className = "profile-view-edit-button-container">
                        <p>Edit</p>
                        </div>
                        <div className = "profile-view-modify">
                            <img src = {modify}/>
                        </div>
                    </div>

                    <div className = "profile-view-follow-like">
                        <div className = "profile-view-follow">
                            <p>Follower 400</p>
                            <p>Following 200</p>
                        </div>
                        <div className = "profile-view-total-like">
                            <img src = {heartlogo}/>
                            <p>2341</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPageViewProfile;