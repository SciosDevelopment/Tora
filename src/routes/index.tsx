import * as React from 'react'
import {Route, Switch} from 'react-router-dom'

// Main
import MainPage from '../pages/Main/index'

// Login : login, register, findpw, delete
import Login from '../pages/Login/Main'
import Register from '../pages/Login/Register'
import ResetPw from '../pages/Login/ResetPassword'
import DeleteAccount from '../pages/Login/Secession'
import ChangePw from '../pages/Login/ChangePassword'

// Business
import Business from '../pages/Business'

// Service : ServiceMain, ServiceList, ServiceDetail
import ServiceMain from '../pages/Service'
import ServiceList from '../pages/Service/ServiceList'
import ServiceDetail from '../pages/Service/ServiceDetail'

// License
import LicenseMain from '../pages/License'

// Blog
import Blog from '../pages/Blog'
import BlogWrite from '../pages/Blog/Write'
import BlogDetail from '../pages/Blog/Detail'

//BulletinBoard
import BulletinBoard from '../pages/BulletinBoard'
import BulletinBoardWrite from '../pages/BulletinBoard/Write'
import BulletinBoardDetail from '../pages/BulletinBoard/Detail'

const Router:React.FC = () => (
    <Switch>
        <Route path = "/" exact component={MainPage}/>

        {/* Login */}
        <Route path = "/login" component={Login}/>
        <Route path = "/signup" component={Register}/>
        <Route path = "/reset_pw" component={ResetPw}/>
        <Route path = "/secess" component={DeleteAccount}/>
        <Route path = "/change_pw" component={ChangePw}/>

        {/* Business */}
        <Route path = "/business" component={Business}/>

        {/* Service */}
        <Route path = "/service" exact component={ServiceMain}/>
        <Route path = "/service/list" component={ServiceList}/>
        <Route path = "/service/detail" component={ServiceDetail}/> {/* service/:id */}

        {/* License */ }
        <Route path = "/license" component={LicenseMain}/>      

        {/* Blog */}
        <Route path = "/blog" exact component={Blog}/>
        <Route path = "/blog/write" component={BlogWrite}/>
        <Route path = "/blog/detail" component={BlogDetail}/> {/* blog/:id */}

        {/*BulletinBoard*/}
        <Route path = "/bulletinboard" exact component={BulletinBoard}/>
        <Route path = "/bulletinboard/write" component={BulletinBoardWrite}/>
        <Route path = "/bulletinboard/detail" component={BulletinBoardDetail}/>
        
    </Switch>
)

export default Router