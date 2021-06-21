import React, {FunctionComponent, useState} from 'react';
import './style/IDESideBar.scss'
import Folder from '../../../img/idefolder.png'
import ERD from '../../../img/ideerd.png'
import CodeCalendar from '../../../img/tora-git-sidebar-icon@2x.png'
import ImageCoding from '../../../img/imagecoding.png'
import Share from '../../../img/ideshare.png'
import SideNav from './SideNav/IDESideNav'

const IDESideBar:FunctionComponent= () => {
     
    const  [showNav, setShowNav] = useState(false)
    return (
        <div className = "IDE-SideBar">
            <div className = "IDE-SideBar-button">
                <div className = "IDE-SideBar-function">
                    <button className = "IDE-SideBar-button-icon" onClick ={() => setShowNav(!showNav)}><img src = {Folder}/></button>
                    <button className = "IDE-SideBar-button-icon" onClick ={() => setShowNav(!showNav)}><img src = {ERD}/></button>
                    <button className = "IDE-SideBar-button-icon" onClick ={() => setShowNav(!showNav)}><img src = {CodeCalendar}/></button>
                    <button className = "IDE-SideBar-button-icon" onClick ={() => setShowNav(!showNav)}><img src = {ImageCoding}/></button>
                    <button className = "IDE-SideBar-button-icon" onClick ={() => setShowNav(!showNav)}><img src = {Share}/></button>
                </div>
                <div className = "IDE-SideBar-contents">
                    {showNav &&<SideNav/>}
                </div>
            </div>
        </div>
    );
};

export default IDESideBar;