import React, {useState} from 'react'
import './style/MyPageSetMain.scss'
import Header from '../../../components/common/Header/Header'
import Account from './Account'
import FollowList from './Follow'

const MyPageSetting:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0)
    
    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : 
                return <Account/>

            case 1 : 
                return <FollowList/>
        }
    }

    return (
        <>
        <Header/>
        <div className = "Mypage-setting-main">
            <div className = "Mypage-setting-tab">
                <div className = "Mypage-setting-tab-button">
                    <div className = {tabValue === 0 ? 'Mypage-setting-tab-clicked' : 'Mypage-setting-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>Account</div>
                    <div className = {tabValue === 1 ? 'Mypage-setting-tab-clicked' : 'Mypage-setting-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>Follow</div>
                </div>
                <div className = "Mypage-setting-tab-body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default MyPageSetting