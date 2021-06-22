import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
// Main
import MainPage from '../pages/Main/index'

// Login : login, register, findpw, delete
import Login from '../pages/Login/Main'
import Register from '../pages/Login/Register'
import ResetPw from '../pages/Login/ResetPassword'
import DeleteAccount from '../pages/Login/Secession'
import ChangePassword from '../pages/Login/ChangePassword'
import Confirm from '../pages/Login/Confirm'

// Business
import Business from '../pages/Business'

// Service : ServiceMain, ServiceList
import ServiceMain from '../pages/Service'
import ServiceList from '../pages/Service/ServiceList'

// License
import LicenseMain from '../pages/License'

// Blog : BlogMain, BlogWrite, BlogDetail
import Blog from '../pages/Blog'
import BlogWrite from '../pages/Blog/Write'
import BlogDetail from '../pages/Blog/Detail'

// Post
import Post from '../pages/Post'
import PostWrite from '../pages/Post/Write'
import PostDetail from '../pages/Post/Detail'

//MyPage
import MyPage from '../pages/MyPage'
import MyPageSet from '../pages/MyPage/Set/MyPageSetMain'

//ProjectMain
import ProjectMain from '../pages/Project'

//IDE
import IDE from '../pages/IDE'

const Router:React.FC = () => (
    <Switch>
        <Route path = "/" exact component={MainPage}/>

        {/* Login */}
        <Route path = "/login" component={Login}/>
        <Route path = "/signup" component={Register}/>
        <Route path = "/reset_pw" component={ResetPw}/>
        <Route path = "/secess" component={DeleteAccount}/>

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

        {/* Blog */}
        <Route path = "/blog" exact component={Blog}/>
        <Route path = "/blog/edit/:id" component={BlogWrite}/>
        <Route path = "/blog/write" component={BlogWrite}/>
        <Route path = "/blog/:sorted/:query" component={Blog}/>
        <Route path = "/blog/:id" component={BlogDetail}/>

        {/* Post */}
        <Route path = "/post" exact component={Post}/>
        <Route path = "/post/edit/:id" component={PostWrite}/>
        <Route path = "/post/write" component={PostWrite}/>
        <Route path = "/post/:sorted/:query" component={Post}/>
        <Route path = "/post/:id" component={PostDetail}/>

        {/* MyPage */}
        <Route path = "/mypage" exact component={MyPage}/>
        <Route path = "/mypage/set" component={MyPageSet}/>
        
        {/* Project */}
        <Route path = "/project" exact component={ProjectMain}/>
        <Route path = "/project/:token" component={ProjectMain}/>
        <Route path = "/project/:token/:id" component={ProjectMain}/>

        {/* IDE */}
        <Route path = "/ide" exact component={IDE}/>

    </Switch>
)

export default Router