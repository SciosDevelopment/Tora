import React, {FunctionComponent ,useState} from 'react';
import './style/ChatMain.scss'
import Searchicon from '../../../../img/searchNavy@2x.png'
import Profile from './Profile/ChatMainViewProfile'
import FollowerItem from './Follow/FollowerItem/ChatFollowerItem'
import FollowItem from './Follow/FollowItem/ChatFollowItem'

const MainView:FunctionComponent  = () => {

    // const FollowQuery = null

    const initData = () => {
        // if(FollowQuery != null) return Array()
        return Array(
            {key : 0, name : "taewook"},
            {key : 1, name : "suhan"},
            {key : 2, name : "junhyeong"},
            {key : 3, name : "kimtaewook"},
            {key : 4, name : "Nicolas cazy"},
            {key : 5, name : "Sirious black"},
            {key : 6, name : "Harry Potter"},
            {key : 7, name : "David slvar"},
            {key : 8, name : "Yan Dason"},
            {key : 9, name : "Harry Potter"},
        )
    }


    const [tabValue, setTabValue] = useState(0);
    const SwitchTab = (value) => {

        const [FollowListView] = useState(initData)

        switch(value){
            case 0 : {
                    return(
                        <div className = "Chat-Main-follow-main">
                            <div className = "Chat-Main-follow">
                                <div className = "Chat-Main-follow-title">
                                    <p>팔로워</p>
                                </div>
                                <div className= "Chat-Main-follow-view">
                                    {
                                        FollowListView.map(item => {
                                            return (
                                                <FollowerItem key={item.key}  name={item.name}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className = "Chat-Main-follow-recommendation">
                                <div className = "Chat-Main-follow-rcd-title">
                                    <p>추천</p>
                                </div>
                                <div className = "Chat-Main-follow-rdc-view">
                                </div>
                            </div>
                        </div>
                    )

            }
            case 1 : {
                return(
                    <div className=  "Chat-Main-follow-main">
                        <div className = "Chat-Main-follow">
                            <div className = "Chat-Main-follow-title">
                                <p>팔로잉</p>
                            </div>
                            <div className= "Chat-Main-follow-view">
                                {
                                    FollowListView.map(item => {
                                        return (
                                            <FollowItem key={item.key}  name={item.name}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className = "Chat-Main-follow-recommendation">
                                <div className = "Chat-Main-follow-rcd-title">
                                    <p>추천</p>
                                </div>
                                <div className = "Chat-Main-follow-rdc-view">
                                </div>
                            </div>
                    </div>
                )
            }
        }
    }
    return (
        <div className = "Chat-Main">
            <div className = "Chat-Main-search">
                <input type = "text"></input>
                <img src = {Searchicon}/>
            </div>
            <div className = "Chat-Main-profile">
                <Profile/>
            </div>
            <div className = "Chat-Main-main-tab">
                <div className = "Chat-Main-tab-button">
                    <div className = {tabValue === 0 ? 'Chat-Main-tab-clicked' : 'Chat-Main-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>
                        <div className = "Chat-Main-follower-number">
                            300
                        </div>
                        <div className = "Chat-Main-follower-text">
                            Follower
                        </div>
                        
                    </div>
                    <div className = {tabValue === 1 ? 'Chat-Main-tab-clicked' : 'Chat-Main-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>
                        <div className = "Chat-Main-following-number">
                            100
                        </div>
                        <div className = "Chat-Main-following-text">
                            Following
                        </div>
                    </div>
                </div>
                <div className = "Chat-Main-tab-body">
                    {
                        SwitchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainView;