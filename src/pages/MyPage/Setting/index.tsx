import React, {useState} from 'react'
import Header from '../../../components/common/Header/Header'
import Account from './Account'
import FollowList from './Follow'

const MyPageSetting:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0)
    
    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : return <Account/>
            case 1 : return <FollowList/>
        }
    }

    return (
        <div className= "settingPage">
        <Header/>
            <div className = "body">
                <div className = "tabcontainer">
                    <div className = "tablist">
                        <div className = {tabValue === 0 ? 'tab-clicked' : 'tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>Account</div>
                        <div className = {tabValue === 1 ? 'tab-clicked' : 'tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>Follow</div>
                    </div>
                    <div className = "tabContent">
                        { switchTab(tabValue) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPageSetting