import React, {useState} from 'react'
import './style/IssueSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Save from '../../../../img/filesave.png'
import UPArrow from '../../../../img/uparrow.png'
import Close from '../../../../img/closeicon.png'
import SideMenuItem from '../Item'
import CustomModal from '../../Modal/modal';
import { useCallback } from 'react'

const IssueSideMenu = (props) => {

    //Star 버튼
    const [Liked,setLiked] = useState(0)

    //Issue openclose toggle버튼
    const [Opened, setOpened] = useState(false)

    const OpenClosed = () => setOpened(!Opened)

    //Share버튼
    const {id} =props;

    const handleOnShare = useCallback(() => {
        console.log("이슈 정보 : " ,id);
        openModal();
    },[])
    //Share modal
    const [modalOpen, setModalOpen] = useState(false)
     
      const openModal = () =>{
          setModalOpen(true)
      }

      const closeModal = () =>{
          setModalOpen(false)
      }

      const axios = require('axios');   

    const handleOnSave = useCallback(() => {
        console.log("포스트 정보 : " ,id);
        axios.post(`http://localhost:3000/api/v1/collections/toggle`);
    },[])

    return (
        <div className = "IssueSideMenu">
            <button className="like"><SideMenuItem content = {Liked} image = {Star} onAction={()=>setLiked(Liked + 1)}/></button>
            <button><SideMenuItem content = {"Save"} image = {Save} onAction={handleOnSave}/></button>
            <button><SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare}/></button>
            <CustomModal modalOpen ={modalOpen} modalClose = {closeModal} header="Tora Share">
                공유하시겠습니까?<br />
                <a href={window.location.href}>{window.location.href}</a>
            </CustomModal>
            <SideMenuItem content = {"Upload"} image = {UPArrow} onAction={()=>console.log("Upload")}/>
            <button><SideMenuItem content = {Opened ? 'Open' : 'Close'} image = {Opened ? Save : Close } onAction={OpenClosed}/></button>
        </div>
    )
}

export default IssueSideMenu