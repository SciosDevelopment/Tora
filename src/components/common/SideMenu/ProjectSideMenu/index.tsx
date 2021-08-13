import React, {useState} from 'react'
import './style/ProjectSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Fork from '../../../../img/forkblack.png'
import IDE from '../../../../img/toralogobutton.png'
import Chat from '../../../../img/communication80.png'
import SideMenuItem from '../Item'
import {history} from '../../../../configureStore'
import { useCallback } from 'react'
import ShareModal from './ShareModal'


const ProjectSideMenu = () => {
    const [Liked,setLiked] = useState(0) //Star
    const [modalOpen, setModalOpen] = useState(false) //Share Modal

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const openPage = (url) => { history.push(url) }

    const handleOnShare = useCallback(() => {openModal()},[])
    //Share Modal기능

    return (
        <div className = "ProjectSideMenu">
            <SideMenuItem content = {Liked} image = {Star} onAction={()=>setLiked(Liked +1)}/>
            <SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare} />
            <ShareModal modalOpen ={modalOpen} modalClose = {closeModal}/>
            <SideMenuItem content = {"Fork"} image = {Fork} onAction={()=>console.log("Fork")}/>
            <SideMenuItem content = {"IDE"} image = {IDE} onAction={()=>openPage('/IDE')}/>
            <SideMenuItem content = {"Chat"} image = {Chat} onAction={()=>console.log("Chat")}/>
        </div>
    )
}

export default ProjectSideMenu