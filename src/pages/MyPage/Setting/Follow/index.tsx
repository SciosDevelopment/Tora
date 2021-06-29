import React, {useState} from 'react';
import Searchbar from 'src/components/common/Searchbar'
import './style/SettingFollowMain.scss'
import Follower from './Follower'
import Following from './Following'

const SettingFollowMain:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Setting-follow-follower">
                        <Follower/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Setting-follow-main-follow">
                        <Following/>
                    </div>
                )
            }
        }
    }
    return (
        <div className = "Setting-follow-main">
            <div className = "Setting-follow-search">
                <Searchbar/>
            </div>
            <div className = "Setting-follow-tab">
                <div className = "Setting-follow-tab-button">
                    <div className = {tabValue === 0 ? 'Setting-follow-tab-clicked' : 'Setting-follow-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>
                        <div className = "Setting-follow-tab-follower-number">
                            300
                        </div>
                        <div className = "Setting-follow-tab-follower-text">
                            Follower
                        </div>
                        
                    </div>
                    <div className = {tabValue === 1 ? 'Setting-follow-tab-clicked' : 'Setting-follow-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>
                        <div className = "Setting-follow-tab-following-number">
                            100
                        </div>
                        <div className = "Setting-follow-tab-following-text">
                            Following
                        </div>
                    </div>
                </div>
                <div className = "Setting-follow-tab-body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    )
}

export default SettingFollowMain