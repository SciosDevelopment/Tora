import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/AccountSetting.scss'
import Profile from '../../../../img/profile4.png'
import Plus from '../../../../img/plus-gray.png'
import Minus from '../../../../img/minus-gray.png'
import SnsAccounts from './SnsAccounts'
import DeleteAccount from './DeleteAccount/MyPageDeletAccount'
import ChangePassWord from './ChangePassword/MyPageChangePassword'

const AccountSetting = () => {
    return (
        <div>
            <div className = "Setting-account-main">
                <div className = "Setting-account-profile">
                    <Title name = "Profile"/>
                    <div className = "Setting-account-profile-img">
                        <img src = {Profile} alt=""/>
                        <div className = "Setting-account-profile-set">
                            <img src = {Plus} alt=""/>
                            <img src = {Minus} alt=""/>
                        </div>
                    </div>
                </div>
                <div className = "Setting-account-region">
                    <Title name = "Region"/>
                    <p>Region</p>
                </div>
                <div className = "Setting-account-name">
                    <Title name = "Name"/>
                    <p>james</p>
                </div>

                <div className = "Setting-account-password">
                    <Title name = "Confirm Password"/>
                    <p>asdasdasdasd</p>
                </div>
                <div className = "Setting-account-description">
                    <Title name = "Description"/>
                    <p>gkernjoidsahjfioajed@naver.comgkernjoidsahjfioajed@naver.comasdasdasdasdasdsadasd</p>
                </div>
                <div className = "Setting-account-program-language">
                    <Title name = "Program Language"/>
                    <p>Program Language</p>
                </div>
                <div className = "Setting-account-position">
                    <Title name = "Position"/>
                    <p>Position</p>
                </div>
                <div className = "Setting-account-sns-accounts">
                    <Title name = "SNS accounts"/>
                    <SnsAccounts/>
                </div>
                <div className = "Setting-account-save-button">
                    <p>Save Changes</p>
                </div>
                <div className = "Setting-account-button">
                    <div className = "Setting-account-delete-button">
                        <p>Delete My Account</p>
                    </div> 
                    <div className = "Setting-account-change-button">
                        <p>Change Password</p>
                    </div> 
                </div>

            </div>
            <div className = "Setting-account-delete-account">
                <DeleteAccount/>
            </div>
            <div className = "Setting-account-change-password">
                <ChangePassWord/>
            </div>
        </div>
    );
};

export default AccountSetting