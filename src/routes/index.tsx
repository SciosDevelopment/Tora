import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
// Main
import MainPage from '../pages/Main/index'

// Login : login, register, findpw, delete
import Login from '../pages/Login/Main'
import Logout from '../pages/Login/Logout'
import ChangePassword from '../pages/Login/ChangePassword'
import Confirm from '../pages/Login/Confirm'

// Service : ServiceMain, ServiceList
import ServiceMain from '../pages/Service'
import ServiceList from '../pages/Service/ServiceList'

// License
import LicenseMain from '../pages/License'

// Community
import CommunityMain from '../pages/Community'
import PostWrite from '../pages/Community/Post/Write'
import PostDetail from '../pages/Community/Post/Detail'

//MyPage
import MyPage from '../pages/MyPage'
import MyPageSetting from '../pages/MyPage/Setting'

//IDE
import IDE from '../pages/IDE'

//OpenSource
import OpenSource from 'src/pages/OpenSource'

//Project
import Project from '../pages/Project'
import Redirect from '../components/common/github/Redirect'

//Chat2
import Chat2 from '../components/common/Chat2'
import NotFound from 'src/pages/etc/NotFound'


const Router:React.FC = () => (
    <Switch>
        <Route path = "/" exact component={MainPage}/>

        {/* Login */}
        <Route path = "/login" render={()=><Login page="login"/>}/>
        <Route path = "/logout" component={Logout}/>
        <Route path = "/signup" render={()=><Login page="signup"/>}/>
        <Route path = "/reset_pw" render={()=><Login page="reset_pw"/>}/>

        <Route path = "/change_pw" exact component={ChangePassword}/>
        <Route path = "/change_pw/:token" component={ChangePassword}/>

        <Route path = "/confirm/signup/:token"  component={Confirm}/>
        <Route path = "/confirm/reset_pw/:token"  component={Confirm}/>

        {/* Service */}
        <Route path = "/service" exact component={ServiceMain}/>
        <Route path = "/service/:token" component={ServiceList}/>
        <Route path = "/service/:token/:id" component={ServiceList}/>

        {/* License */ }
        <Route path = "/license" component={LicenseMain}/>      

        {/* Post */}
        <Route path = "/community/post/edit/:id" component={PostWrite}/>
        <Route path = "/community/post/write" component={PostWrite}/>
        <Route path = "/community/post/:id" component={PostDetail}/>
        <Route path = "/community/:page" exact component={CommunityMain}/>
        <Route path = "/community/:page/:sorted/:query" component={CommunityMain}/>
        
        {/* MyPage */}
        <Route path = "/mypage/me/setting" exact component={MyPageSetting}/>
        <Route path = "/mypage/:username" component={MyPage}/>
        <Route path = "/mypage" exact component={MyPage}/>
        
        {/* Project */}
        <Route path = "/project" exact component={Project}/>
        <Route path = "/project/:id/:tab/:dir" component={Project}/>
        <Route path = "/project/:id/:tab" component={Project}/>

        {/* IDE */}
        <Route path = "/ide" exact component={IDE}/>
        <Route path = "/ide/:projectid" component={IDE}/>

        {/* OpenSource */}
        <Route path = "/opensource" component={OpenSource}/>

        <Route path = "/authgit" component={Redirect}/>

        {/* Chat2 */}
        <Route path = "/chat2" component={Chat2}/>

        {/* 404 */}
        <Route path = "*" component={NotFound} />
    </Switch>
)

export default Router