import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
// Main
import MainPage from '../pages/Main/index'

// Login : login, register, findpw, delete
import Login from '../pages/Login/Main'
import Logout from '../pages/Login/Logout'
import ChangePassword from '../pages/Login/ChangePassword'
import Confirm from '../pages/Login/Confirm'

// Business
import Business from '../pages/Business'

// Service : ServiceMain, ServiceList
import ServiceMain from '../pages/Service'
import ServiceList from '../pages/Service/ServiceList'

// License
import LicenseMain from '../pages/License'

// Post
import Post from '../pages/Post'
import PostWrite from '../pages/Post/Write'
import PostDetail from '../pages/Post/Detail'

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

const Router:React.FC = () => (
    <Switch>
        <Route path = "/" exact component={MainPage}/>

        {/* Login */}
        <Route path = "/login" render={()=><Login page="login"/>}/>
        <Route path = "/logout" component={Logout}/>
        <Route path = "/signup" render={()=><Login page="signup"/>}/>
        <Route path = "/reset_pw/" render={()=><Login page="reset_pw"/>}/>
        <Route path = "/secess" render={()=><Login page="secess"/>}/>

        <Route path = "/change_pw" exact component={ChangePassword}/>
        <Route path = "/change_pw/:token" component={ChangePassword}/>

        <Route path = "/confirm/signup/:token"  component={Confirm}/>
        <Route path = "/confirm/reset_pw/:token"  component={Confirm}/>

        {/* Business */}
        <Route path = "/business" component={Business}/>

        {/* Service */}
        <Route path = "/service" exact component={ServiceMain}/>
        <Route path = "/service/:token" component={ServiceList}/>
        <Route path = "/service/:token/:id" component={ServiceList}/>

        {/* License */ }
        <Route path = "/license" component={LicenseMain}/>      

        {/* Post */}
        <Route path = "/post" exact component={Post}/>
        <Route path = "/post/edit/:id" component={PostWrite}/>
        <Route path = "/post/write" component={PostWrite}/>
        <Route path = "/post/:sorted/:query" component={Post}/>
        <Route path = "/post/:id" component={PostDetail}/>

        {/* MyPage */}
        <Route path = "/mypage/me/setting" exact component={MyPageSetting}/>
        <Route path = "/mypage/:username" component={MyPage}/>
        <Route path = "/mypage" exact component={MyPage}/>
        
        {/* Project */}
        <Route path = "/project" exact component={Project}/>
        <Route path = "/project/:id" component={Project}/>

        {/* IDE */}
        <Route path = "/ide" exact component={IDE}/>

        {/* OpenSource */}
        <Route path = "/opensource" component={OpenSource}/>

        <Route path = "/authgit" component= {Redirect}/>

        {/* Chat2 */}
        <Route path = "/chat2" component={Chat2}/>
    </Switch>
)

export default Router