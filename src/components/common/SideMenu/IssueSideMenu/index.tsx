import React from 'react'
import './style/IssueSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Save from '../../../../img/filesave.png'
import UPArrow from '../../../../img/uparrow.png'
import Close from '../../../../img/closeicon.png'
import SideMenuItem from '../Item'

const IssueSideMenu = () => {
    return (
        <div className = "IssueSideMenu">
            <SideMenuItem content = {0} image = {Star} onAction={()=>console.log("like")}/>
            <SideMenuItem content = {"Save"} image = {Save} onAction={()=>console.log("Save")}/>
            <SideMenuItem content = {"Share"} image = {Share} onAction={()=>console.log("Share")}/>
            <SideMenuItem content = {"Upload"} image = {UPArrow} onAction={()=>console.log("Upload")}/>
            <SideMenuItem content = {"Close"} image = {Close} onAction={()=>console.log("Close")}/>
        </div>
    )
}

export default IssueSideMenu