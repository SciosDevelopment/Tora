import React,{useState} from 'react'
import './style/MyPageView.scss'
import Title from 'src/components/common/Title/Title'
import MyPageList from './List'
import MyPageProfile from './Profile'
import Activity from './Activity'
import Wallet from './Wallet'

const MypageView = () => {
    return (
        <div className = "Mypage-view-main">
            <div className = "Mypage-view-profile-container">
                <MyPageProfile/>
            </div>
            <div className = "Mypage-view-list-container">
                <MyPageList/>
            </div>            
            <div className = "Mypage-view-bottom-container">
                <div className = "Mypage-view-bottom-myAc">
                    <Title name = "My Activity"/>
                    <Activity/>
                </div>
                <div className = "Mypage-view-bottom-projectAc">
                    <Title name = "Follow Activity"/>
                    <Activity/>
                </div>
                <div className = "Mypage-view-bottom-helpcenter">
                    <Title name = "My Wallet"/>
                    <Wallet/>
                </div>           
            </div>
        </div>
    )
}

export default MypageView