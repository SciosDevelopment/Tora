import React, {useState} from 'react'
import './style/ProjectSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Fork from '../../../../img/forkblack.png'
import IDE from '../../../../img/toralogobutton.png'
import Chat from '../../../../img/communication80.png'
import SideMenuItem from '../Item'
import {history} from '../../../../configureStore'
import CustomModal from '../../Modal/modal';
import { useCallback } from 'react'


const ProjectSideMenu = (props) => {

    const openPage = (url) => { history.push(url) }

    //Star버튼 
    const [Liked,setLiked] = useState(0)

    //Share버튼
    const {id} =props;
    
    const handleOnShare = useCallback(() => {
        console.log("프로젝트 정보 : " ,id);
        openModal();
    },[])
    //Share Modal기능
    const [modalOpen, setModalOpen] = useState(false)
    
        const openModal = () =>{
            setModalOpen(true)
        }

        const closeModal = () =>{
            setModalOpen(false)
        }

    return (
        <div className = "ProjectSideMenu">
            <button className="like"><SideMenuItem content = {Liked} image = {Star} onAction={()=>setLiked(Liked +1)}/></button>
            <button><SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare}/></button>
            <CustomModal modalOpen ={modalOpen} modalClose = {closeModal} header="Tora Share">
                공유하시겠습니까?<br />
                <a href={window.location.href}>{window.location.href}</a>
            </CustomModal>
            <SideMenuItem content = {"Fork"} image = {Fork} onAction={()=>console.log("Fork")}/>
            <button><SideMenuItem content = {"IDE"} image = {IDE} onAction={()=>openPage('/IDE')}/></button>
            <SideMenuItem content = {"Chat"} image = {Chat} onAction={()=>console.log("Chat")}/>
        </div>
    )
}

export default ProjectSideMenu