import React, {useState} from 'react';
import Searchbar from 'src/components/common/Searchbar';
import './style/MyPageSetFollowMain.scss'
import Follower from '../Follow/Follower/MyPageSetFollower'
import Following from '../Follow/Following/MyPageSetFollowing'

const MyPageSetFollow:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Mypage-set-follow-follower">
                        <Follower/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Mypage-set-follow-main-follow">
                        <Following/>
                    </div>
                )
            }
        }
    }
    return (
        <div className = "Mypage-set-follow-main">
            <div className = "Mypage-set-follow-search">
                <Searchbar/>
            </div>
            <div className = "Mypage-set-follow-main-tab">
                <div className = "Mypage-set-follow-main-tab-button">
                    <div className = {tabValue === 0 ? 'Mypage-set-follow-main-tab-clicked' : 'Mypage-set-follow-main-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>
                        <div className = "Mypage-set-follow-main-tab-follower-number">
                            300
                        </div>
                        <div className = "Mypage-set-follow-main-tab-follower-text">
                            Follower
                        </div>
                        
                    </div>
                    <div className = {tabValue === 1 ? 'Mypage-set-follow-main-tab-clicked' : 'Mypage-set-follow-main-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>
                        <div className = "Mypage-set-follow-main-tab-following-number">
                            100
                        </div>
                        <div className = "Mypage-set-follow-main-tab-following-text">
                            Following
                        </div>
                    </div>
                </div>
                <div className = "Mypage-set-follow-main-tab-body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyPageSetFollow;