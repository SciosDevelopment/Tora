import React from 'react'
import './style/SideMenu.scss'
import Star from '../../../img/yellowstar.png'
import FileSave from '../../../img/filesave.png'
import Share from '../../../img/shareicon.png'
import SideMenuItem from './Item'

const SideMenu = () => {
    return (
        <div className = "SideMenu">
            <SideMenuItem content = {0} image = {Star} onAction={()=>console.log("Star")}/>
            <SideMenuItem content = {"팔로우"} onAction={()=>console.log("Follow")}/>
            <SideMenuItem content = {"Save"} image = {FileSave} onAction={()=>console.log("Save")}/>
            <SideMenuItem content = {"Share"} image = {Share} onAction={()=>console.log("Share")}/>
        </div>
    )
}

export default SideMenu