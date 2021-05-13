import React,{useState} from 'react';
import './style/MyPageView.scss'
import MyPageList from './List/MyPageViewList'
import MyPageProfile from './Profile/MyPageViewProfile'
import MyPageActivity from './Activity/MyPageViewActivity'
import MyPageWallet from './Wallet/MyPageViewWallet'
import Title from 'src/components/common/Title/Title';
const MypageView = () => {


    return (
        <div className = "Mypage-view-main">
            <div className = "Mypage-view-profile-container">
                <MyPageProfile/>
            </div>
            <div className = "Mypage-view-list-container">
                <MyPageList/>
            </div>            
            <div className = "Mypage-view-bottom-element-container">
                <div className = "Mypage-view-bottom-myAc">
                    <Title name = "My Activity"/>
                    <MyPageActivity/>
                </div>
                <div className = "Mypage-view-bottom-projectAc">
                    <Title name = "Follow Activity"/>
                    <MyPageActivity/>
                </div>
                <div className = "Mypage-view-bottom-helpcenter">
                    <Title name = "My Wallet"/>
                    <MyPageWallet/>
                </div>
                
            </div>
            
        </div>
    );
};

export default MypageView;