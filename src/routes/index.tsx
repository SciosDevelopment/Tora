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

// Community
import CommunityMain from '../pages/Community'
import PostWrite from '../pages/Community/Post/Write'
import PostDetail from '../pages/Community/Post/Detail'
import IssueWrite from '../pages/Community/IssueBounty/Write'
import IssueDetail from '../pages/Community/IssueBounty/Detail'

// Dashboard
import DashboardMain from 'src/pages/DashBoard'

//IDE
import IDE from '../pages/IDE'

//OpenSource
import OpenSource from 'src/pages/OpenSource'

//Project
import Project from '../pages/Project'
import Redirect from '../components/common/github/Redirect'

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
        
        <Route path = "/confirm/reset_pw/:token"  component={Confirm}/>
        <Route path = "/users/:token" component={Confirm}/>

        {/* Service */}
        <Route path = "/service" exact component={ServiceMain}/>
        <Route path = "/service/:token" component={ServiceList}/>
        <Route path = "/service/:token/:id" component={ServiceList}/> 

        {/* Post : 이 부분 정리 필요 */}
        <Route path = "/community/post/edit/:id" component={PostWrite}/>
        <Route path = "/community/post/write" component={PostWrite}/>
        <Route path = "/community/:page/:sorted/:query" component={CommunityMain}/>
        <Route path = "/community/post/:id" component={PostDetail}/>
        <Route path = "/community/issue/write" component={IssueWrite}/>
        <Route path = "/community/issue/:id" component={IssueDetail}/>
        <Route path = "/community/:page" exact component={CommunityMain}/>
        
        {/* DashBoard */}
        <Route path = "/dashboard/:username/:tab" component={DashboardMain}/>

        {/* Project */}
        <Route path = "/project" exact component={Project}/>
        <Route path = "/project/:id/:tab/:dir" component={Project}/>
        <Route path = "/project/:id/:tab" component={Project}/>

        {/* IDE */}
        <Route path = "/ide" exact component={IDE}/>
        <Route path = "/ide/:projectid" component={IDE}/>

        {/* OpenSource */}
        <Route path = "/opensource" component={OpenSource}/>
        <Route path = "/opensource/:keyword/:option" component={OpenSource}/>
        <Route path = "/opensource/:keyword" component={OpenSource}/>
        

        {/* etc */}
        <Route path = "/authgit" component={Redirect}/>


        {/* 404 */}
        <Route path = "*" component={NotFound} />
    </Switch>
)

export default Router