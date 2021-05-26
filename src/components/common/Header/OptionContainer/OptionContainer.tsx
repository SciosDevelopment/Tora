import React, { FunctionComponent } from 'react'
import {history} from '../../../../configureStore'
import './style/OptionContainer.scss'
import Setting from '../../../../img/tora-setting-icon.png'
import Mypage from '../../../../img/tora-mypage-icon.png'
import Logout from '../../../../img/tora-logout-icon.png'
import { useCookies } from 'react-cookie'

const OptionContainer:FunctionComponent = ()=> {

    // temp function
    // userInfo is null ? history.push('/login') : history.push('/logout')
    const [cookies, _, removeCookie] = useCookies(['ToraID'])
    const openPage = (url) => { history.push(url) }

    return (
        <div className="OptionContainer">
            <div className="optionGroup">
                <div className="option"><img src={Setting} onClick={()=>openPage('/community')}/></div>
                <div className="option"><img src={Mypage} onClick={()=>openPage('/mypage')}/></div>
                {
                cookies.ToraID !== undefined ?
                <div className="option"><img src={Logout} onClick={()=>openPage('/logout')}/></div>
                :
                <div className="option"><img src={Logout} onClick={()=>openPage('/login')}/></div>
                }
                
            </div>
        </div>
    )
}

export default OptionContainer