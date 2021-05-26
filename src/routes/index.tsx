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

// // Business
// import Business from '../pages/Business'


// // Service : ServiceMain, ServiceList, ServiceDetail
// import ServiceMain from '../pages/Service'
// import ServiceList from '../pages/Service/ServiceList'
// import ServiceDetail from '../pages/Service/ServiceDetail'


// // License
// import LicenseMain from '../pages/License'

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
    </Switch>
)

export default Router