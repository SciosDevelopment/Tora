import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/MyPageSetAccount.scss'
import Profile from '../../../../img/profile4.png'
import Plus from '../../../../img/plus-gray.png'
import Minus from '../../../../img/minus-gray.png'
import SNSaccounts from './SNSaccounts/SnsAccounts'

const MyPageSetAccount = () => {
    return (
        <div className = "Mypage-set-account-main">
            <div className = "Mypage-set-account-profile">
                <Title name = "Profile"/>
                <div className = "Mypage-set-account-profile-img">
                    <img src = {Profile}/>
                    <div className = "Mypage-set-account-profile-set">
                        <img src = {Plus}/>
                        <img src = {Minus}/>
                    </div>
                </div>
            </div>
            <div className = "Mypage-set-account-region">
                <Title name = "Region"/>
                <p>Region</p>
            </div>
            <div className = "Mypage-set-account-name">
                <Title name = "Name"/>
                <p>james</p>
            </div>

            <div className = "Mypage-set-account-password">
                <Title name = "Confirm Password"/>
                <p>asdasdasdasd</p>
            </div>
            <div className = "Mypage-set-account-description">
                <Title name = "Description"/>
                <p>gkernjoidsahjfioajed@naver.comgkernjoidsahjfioajed@naver.comasdasdasdasdasdsadasd</p>
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
                <SNSaccounts/>
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