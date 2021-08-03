import React, {FunctionComponent, useState} from 'react'
import './style/IDESideBar.scss'
import Folder from '../../../img/idefolder.png'
import ERD from '../../../img/ideerd.png'
import CodeCalendar from '../../../img/tora-git-sidebar-icon@2x.png'
import ImageCoding from '../../../img/imagecoding.png'
import Share from '../../../img/ideshare.png'
import SideNav from './SideNav'

import Header from '../Terminal'

const IDESideBar:FunctionComponent= () => {
    const [showNav, setShowNav] = useState(-1)
    // temp list, 추후 구현예정
    //common Component - Folder, ERD, CodeCalendar, ImageCoding, Share.
    const list = [  <Header/>,
                    <Header/>,
                    <Header/>,
                    <Header/>,
                    <Header/> ]

    const setSideNav = (num)=>{
        // need toggleBtn active
        if(num > list.length) setShowNav(-1)
        if(showNav === num) setShowNav(-1)
        else setShowNav(num)
    }

    return (
        <div className = "IDE-SideBar-main">
            <div className = "IDE-SideBar-button">
                <div className = "IDE-SideBar-function">
                    <button value = {0} className = "IDE-SideBar-button-icon" onClick ={() => setSideNav(0)}><img src = {Folder}/></button>
                    <button value = {1} className = "IDE-SideBar-button-icon" onClick ={() => setSideNav(1)}><img src = {ERD}/></button>
                    <button value = {2} className = "IDE-SideBar-button-icon" onClick ={() => setSideNav(2)}><img src = {CodeCalendar}/></button>
                    <button value = {3} className = "IDE-SideBar-button-icon" onClick ={() => setSideNav(3)}><img src = {ImageCoding}/></button>
                    <button value = {4} className = "IDE-SideBar-button-icon" onClick ={() => setSideNav(4)}><img src = {Share}/></button>
                </div>
                <div className = "IDE-SideBar-contents">
                    {showNav!==-1 && <SideNav nav={showNav} list={list}/>}
                </div>
            </div>
        </div>
    )
}

export default IDESideBar