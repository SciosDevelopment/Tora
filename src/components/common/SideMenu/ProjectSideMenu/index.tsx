import React from 'react'
import './style/ProjectSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Fork from '../../../../img/forkblack.png'
import IDE from '../../../../img/toralogobutton.png'
import Chat from '../../../../img/communication80.png'
import SideMenuItem from '../Item'

const ProjectSideMenu = () => {
    return (
        <div className = "ProjectSideMenu">
            <SideMenuItem content = {0} image = {Star} onAction={()=>console.log("like")}/>
            <SideMenuItem content = {"Share"} image = {Share} onAction={()=>console.log("Share")}/>
            <SideMenuItem content = {"Fork"} image = {Fork} onAction={()=>console.log("Fork")}/>
            <SideMenuItem content = {"IDE"} image = {IDE} onAction={()=>console.log("IDE")}/>
            <SideMenuItem content = {"Chat"} image = {Chat} onAction={()=>console.log("Chat")}/>
        </div>
    )
}

export default ProjectSideMenu