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

    //modal test
    const [isModalOpen, setIsOpen] = React.useState(false)

    const openModal = () => {
        console.log("setIsOpen true")
        setIsOpen(true)
    }
    
    const closeModal = () => {
        console.log("setIsOpen false")
        setIsOpen(false)
    }
    
    return (
        <div className="OptionContainer">
            <div className="optionGroup">
                <div className="option"><img src={Setting} onClick={()=>openPage('/blog/write')}/></div>
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