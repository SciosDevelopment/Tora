import React, { FunctionComponent } from 'react'
import './style/OptionContainer.scss'
import Opt1 from '../../../../img/tora-setting-icon.png'
import Opt2 from '../../../../img/tora-mypage-icon.png'
import Opt3 from '../../../../img/tora-logout-icon.png'
import MyModal from '../../Modal/modal'

const OptionContainer:FunctionComponent = ()=> {

    // temp function
    const f_Opt1 = () => {
        alert("1")
    }
    const f_Opt2 = () => {
        window.location.href="/mypage"
        // <Link to = "Community"/>
    }
    const f_Opt3 = () => {
        alert("3")
    }

    const openCommunity = () => {
        window.location.href= "/community"
    }
    const openLogin = () => {
        window.location.href = "/login"
    }

    //modal test
    const [isModalOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        console.log("setIsOpen true")
        setIsOpen(true);
    }
    
    const closeModal = () => {
        console.log("setIsOpen false")
        setIsOpen(false);
    }
    //<button className="ModalButton" onClick = {openModal}>Open Modal</button>
    //<MyModal message = {"Hello"} modalOpen = {isModalOpen} modalClose = {closeModal}></MyModal>

    return (
        <div className="OptionContainer">
            <div className="optionGroup">
                <div className="option"><img src={Opt1} onClick={f_Opt1}/></div>
                <div className="option"><img src={Opt2} onClick={f_Opt2}/></div>
                <div className="option"><img src={Opt3} onClick={f_Opt3}/></div>
            </div>
        </div>
    )
}

export default OptionContainer