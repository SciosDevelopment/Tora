import React, {useState} from 'react'
import './style/IssueSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Save from '../../../../img/filesave.png'
import UPArrow from '../../../../img/uparrow.png'
import Close from '../../../../img/closeicon.png'
import SideMenuItem from '../Item'
import axios from 'axios'
import { useCallback } from 'react'
import ShareModal from './ShareModal'

const IssueSideMenu = (props) => {
    const {id} =props;
    const [Liked,setLiked] = useState(0) //Star
    const [Opened, setOpened] = useState(false) //Issue open/close
    const [modalOpen, setModalOpen] = useState(false) //Share Modal

    const OpenClosed = () => setOpened(!Opened)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const handleOnShare = useCallback(() => {openModal()},[])



    const handleOnSave = useCallback(() => {
    const data = {
        collection: {
            collectible_id : id,
            collectible_type : "Post" //temp
        }
    }
        axios.post(`${window.location}/api/v1/collections/toggle`, data).then((res)=>{
            // 201 : 저장 성공
            // 204 : 삭제 성공
            console.log(res)
            alert("저장 완료")
        })
        .catch((e)=>{
            // 401 : 로그인 필요
            // 이외 나머지 : 저장 실패로 처리
            alert("저장 실패") 
            console.log(e)
        })
        
    },[])

    return (
        <div className = "IssueSideMenu">
            <SideMenuItem content = {Liked} image = {Star} onAction={()=> setLiked(Liked + 1)}/>
            <SideMenuItem content = {"Save"} image = {Save} onAction={handleOnSave}/>
            <SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare}/>
            <ShareModal modalOpen ={modalOpen} modalClose = {closeModal}/>
            <SideMenuItem content = {"Upload"} image = {UPArrow} onAction={()=>console.log("Upload")}/>
            <SideMenuItem content = {Opened ? 'Open' : 'Close'} image = {Opened ? Save : Close } onAction={OpenClosed}/>
        </div>
    )
}

export default IssueSideMenu