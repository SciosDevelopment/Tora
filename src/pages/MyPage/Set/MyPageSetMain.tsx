import React, {useState} from 'react';
import Header from 'src/components/common/Header/Header';
import './style/MyPageSetMain.scss'
import MyPageSetAccount from '../Set/Account/MyPageSetAccount'
import MyPageSetFollow from '../Set/Follow/MyPageSetFollowMain'


const MyPageSetMain:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0);
    
    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Mypage-set-main-account">
                        <MyPageSetAccount/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Mypage-set-main-follow">
                        <MyPageSetFollow/>
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Mypage-set-main-wallet">
                        <p>3</p>
                    </div>
                )
            }
        }
    }

    return (
        <>
        <Header/>
        <div className = "Mypage-set-main">
            <div className = "Mypage-set-main-tab">
                <div className = "Mypage-set-main-tab-button">
                    <div className = {tabValue === 0 ? 'Mypage-set-main-tab-clicked' : 'Mypage-set-main-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>Account</div>
                    <div className = {tabValue === 1 ? 'Mypage-set-main-tab-clicked' : 'Mypage-set-main-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>Follow</div>
                    <div className = {tabValue === 2 ? 'Mypage-set-main-tab-clicked' : 'Mypage-set-main-tab-closed' } onClick = {()=>setTabValue(2)} key = {2}>Wallet</div>
                </div>
                <div className = "Mypage-set-main-tab-tab-body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default MyPageSetMain;