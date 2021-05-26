import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/MyPageSetAccount.scss'
import Profile from '../../../../img/profile4.png'

const MyPageSetAccount = () => {
    return (
        <div className = "Mypage-set-account-main">
            <div className = "Mypage-set-account-profile">
                <Title name = "Profile"/>
                <img src = {Profile}/>
                <div className = "Mypage-set-account-profile-text">
                    <p>이미지 업로드</p>
                    <p>이미지 삭제</p>
                </div>
            </div>
            <div className = "Mypage-set-account-name">
                <Title name = "Name"/>
                <p>james</p>
            </div>
            <div className = "Mypage-set-account-region">
                <Title name = "Region"/>
                <p>Region</p>
            </div>
            <div className = "Mypage-set-account-password">
                <Title name = "Password"/>
                <p>asdasdasdasd</p>
            </div>
            <div className = "Mypage-set-account-description">
                <Title name = "Description"/>
                <p>gkernjoidsahjfioajed@naver.comgkernjoidsahjfioajed@naver.com</p>
            </div>
            <div className = "Mypage-set-account-program-language">
                <Title name = "Program Language"/>
                <p>Program Language</p>
            </div>
            <div className = "Mypage-set-account-position">
                <Title name = "Position"/>
                <p>Position</p>
            </div>
            <div className = "Mypage-set-account-sns-accounts">
                <Title name = "SNS accounts"/>
                <div className = "Mypage-set-account-sns-first">

                </div>
                <div className = "Mypage-set-account-sns-second">

                </div>
                <div className = "Mypage-set-account-sns-third">

                </div>
            </div>
            <div className = "Mypage-set-account-save-button">
                <p>Save Changes</p>
            </div>
            <div className = "Mypage-set-account-button">
                <div className = "Mypage-set-account-delete-button">
                    <p>Delete My Account</p>
                </div> 
                <div className = "Mypage-set-account-change-button">
                    <p>Change Password</p>
                </div> 
            </div>
        </div>
    );
};

export default MyPageSetAccount;