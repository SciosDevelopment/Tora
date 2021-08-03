import React, { FunctionComponent } from 'react'
import {history} from '../../../../configureStore'
import './style/IDEHeaderOption.scss'
import { useCookies } from 'react-cookie'
import Mypage from '../../../../img/idemypage.png'
import Logout from '../../../../img/idelogout.png'

const IDEHeaderOption:FunctionComponent = () => {

    const [cookies] = useCookies(['ToraID'])
    const openPage = (url) => { history.push(url) }

    return (
        <div className="OptionContainer">
                <div className="option"><img src={Mypage} onClick={()=>openPage('/mypage')}/></div>
                {
                cookies.ToraID !== undefined ?
                <div className="option"><img src={Logout} onClick={()=>openPage('/logout')}/></div>
                :
                <div className="option"><img src={Logout} onClick={()=>openPage('/login')}/></div>
                }
        </div>
    );
};

export default IDEHeaderOption