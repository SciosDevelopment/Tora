import * as React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// Main
import MainPage from '../pages/Main/index'

// Login : login, register, findpw, delete
import Login from '../pages/Login/Main'
import Register from '../pages/Login/Register'
import ResetPw from '../pages/Login/ResetPassword'
import DeleteAccount from '../pages/Login/Secession'

const Router:React.FC = () => (
    <BrowserRouter>
        <Route path = "/" exact component={MainPage}/>
        <Route path = "/signin" component={Login}/>
        <Route path = "/signup" component={Register}/>
        <Route path = "/reset_pw" component={ResetPw}/>
        <Route path = "/secess" component={DeleteAccount}/>
    </BrowserRouter>
)

export default Router