import React,{useState} from 'react'
import './style/ContentsSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import FileSave from '../../../../img/filesave.png'
import Share from '../../../../img/shareicon.png'
import SideMenuItem from '../Item'
import CustomModal from '../../Modal/modal';
import { useCallback } from 'react'

const ContentsSideMenu = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    //Star버튼
    const [Liked,setLiked] = useState(0)

    //Follow버튼
    const [Followed, setFollowed] = useState(true)

    const FollowTrueFalse = () => setFollowed(!Followed)
    
    //Share버튼    
    const {id} =props;
    
    const handleOnShare = useCallback(() => {
        console.log("포스트 정보 : " ,id);
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

    //Save버튼
    const axios = require('axios');      
    
      const handleOnSave = useCallback(() => {
          console.log("포스트 정보 : " ,id);
          axios.post(`${SERVER_IP}/api/v1/collections/toggle/${id}`);
      },[])




    return (
        <div className = "ContentsSideMenu">
            <button className="like" ><SideMenuItem content = {Liked} image = {Star}  onAction={() => setLiked(Liked + 1)}/></button>
            <button ><SideMenuItem content = {Followed ? 'Follow' : 'Following'} onAction={FollowTrueFalse}/></button>
            <button><SideMenuItem content = {"Save"} image = {FileSave} onAction={handleOnSave} /></button>
            <button ><SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare} /></button>
            <CustomModal modalOpen ={modalOpen} modalClose = {closeModal} header="Tora Share">
                공유하시겠습니까?<br />
                <a href={window.location.href}>{window.location.href}</a>
            </CustomModal>
        </div>
    )
}

export default ContentsSideMenu