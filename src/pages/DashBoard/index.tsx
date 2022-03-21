import React, {useEffect, useState} from 'react'
import {history} from '../../configureStore'
import iconArrowExpend from '../../img/icon_arrow_expend.png'
import iconProfile from '../../img/profile4.png'
import iconStar from '../../img/icon_star.png'
import Header from 'src/components/common/Header/Header'
import Searchbar from 'src/components/common/Searchbar'
import DashBoardProject from './Project'
import axios from 'axios'
import DashBoardCommunity from './Community'
import DashBoardIssues from './Issues'
import DashBoardFollow from './Follow'
import DashboardSetting from './Account'


const DashboardMain = (props) => {
    const {username, tab} = props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

    const [userdata, setUserdata] = useState({about_me:null, followers:0, followings:0, photo:{url:null}, name:null, email:null, score:0})
    const [userId, setUserId] = useState(-1)

    useEffect(()=>{
        const userId = username === "me" ? "mypage": username
        if(username !== "me" && tab == token_.Setting) { history.goBack(); return}
        
        axios.get(`${SERVER_IP}/api/v1/user/${userId}`).then((res)=>{
            const data = res.data.data.attributes
            setUserdata(data)
            setUserId(res.data.data.id)
        }).catch(e=>{console.log(e)}) 
        setTabValue(tab)
        setTabsort((tab === token_.Setting || tab === token_.Acitivities) ? "Account" : "Dashboard")
    },[tab])
    

    enum token_ {Project="project", Community="community", Issues="issues", Follow="follow", Setting="setting", Acitivities="activities"}
    const [tabValue, setTabValue] = useState(token_.Project)
    const [tabsort, setTabsort] = useState(null)

    const switchTab = (tabValue) => {
        switch(tabValue){
            case token_.Project : return <DashBoardProject userId={userId}/>
            case token_.Community : return <DashBoardCommunity userId={userId}/>
            case token_.Issues :  return <DashBoardIssues userId={userId}/>
            case token_.Follow: return <DashBoardFollow userId={userId}/>
            case token_.Setting : return <DashboardSetting/>
            case token_.Acitivities: return <div/>
        }
    }
    const TabList = () => {
        if(tabsort === "Dashboard") 
            return (<>
                <div className = {tabValue === token_.Project ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/${username}/project`)}>Project</div>
                <div className = {tabValue === token_.Community ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/${username}/community`)}>Community</div>
                <div className = {tabValue === token_.Issues ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/${username}/issues`)}>Issues</div>
                <div className = {tabValue === token_.Follow ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/${username}/follow`)}>Follow</div>
            </>)
        else if(tabsort === "Account")
            return (<>
                <div className = {tabValue === token_.Setting ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/me/setting`)}>Setting</div>
                <div className = {tabValue === token_.Acitivities ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/me/activities`)}>Activities</div>
            </>)
        else return <></>
        
    }
    return (
    <>
        <Header/>
        <div className= "dashboard">
            <div className= "dashboard-tab">
                <div className="location">
                    <span>Support</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>FAQ</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>Product</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>Git 서비스 사용 방법</span>
                </div>
                <div className="profiles">
                    <div className="proimg">
                    <img src = {userdata.photo.url === null 
                        ? iconProfile : `${SERVER_IP}/${userdata.photo.url}`}
                        alt={userdata.photo.url === null ? "profile" : userdata.name}/>
                    </div>
                    <div className="desc">
                        <p>{userdata.name}</p>
                        <p>{userdata.about_me ? userdata.about_me : ""}</p>
                    </div>
                    <div className="details">
                        <div><img src={iconArrowExpend} alt="follow"/> <p>{userdata.followers} follower {userdata.followings} following</p></div>
                        <div><img src={iconArrowExpend} alt="email"/> <p>{userdata.email}</p></div>
                        <div><img src={iconArrowExpend} alt="location"/> <p>this is not location</p></div>
                    </div>
                    <div className="star">
                        <img src={iconStar} alt="star"/>
                        <p>{userdata.score}</p>
                    </div>
                </div>
                <div className="toptab">
                    <div className="Upper">
                        {/* left */}
                        <div className="btnbox">
                            <div className = {tabsort === "Dashboard"? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/${username}/project`)}>DashBoard</div>
                            {username === "me" && <div className = {tabsort === "Account" ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/dashboard/me/setting`)}>Account</div>}
                        </div>
                        
                    </div>

                    <div className="Under">
                        <div className="btnbox">
                            <TabList/>
                        </div>
                        <div className='searchbar'>
                            <Searchbar/>
                        </div>
                    </div>
                </div>

                <div className = "dashboardview"> 
                    {switchTab(tabValue)}
                </div>
            </div>
        </div>
    </>
    )
}

export default DashboardMain