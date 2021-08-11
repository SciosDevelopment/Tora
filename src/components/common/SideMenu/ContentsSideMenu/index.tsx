import React,{useState, useEffect} from 'react'
import './style/ContentsSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import FileSave from '../../../../img/filesave.png'
import Share from '../../../../img/shareicon.png'
import SideMenuItem from '../Item'
import { useLocation, useParams} from 'react-router-dom';
import Modal from '../ShareModal/ShareModal'
import { useCallback } from 'react'

const ContentsSideMenu = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    //Star버튼
    const [Liked,setLiked] = useState(0)

    //Follow버튼
    const [Followed, setFollowed] = useState(true)

    const FollowTrueFalse = () => setFollowed(!Followed)
    
    //Share버튼
    const location = useLocation()
    
    const {id} = useParams<{id : string }>()
    
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
            <button onClick ={() => setLiked(Liked + 1)}><SideMenuItem content = {Liked} image = {Star} onAction={()=>console.log("Star")}/></button>
            <button onClick ={FollowTrueFalse}><SideMenuItem content = {Followed ? 'Follow' : 'Following'} onAction={()=>console.log("Follow")}/></button>
            <button onClick ={handleOnSave}><SideMenuItem content = {"Save"} image = {FileSave} /></button>
            <button onClick ={handleOnShare}><SideMenuItem content = {"Share"} image = {Share} /></button>
            <Modal open ={modalOpen} close = {closeModal} header="Tora Share">
                공유하시겠습니까?<br />
                <a href={`http://localhost:3000` + location.pathname}>{`http://localhost:3000` + location.pathname}</a>
            </Modal>
        </div>
    )
}

export default ContentsSideMenu