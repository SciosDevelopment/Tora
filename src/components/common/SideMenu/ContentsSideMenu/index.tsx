import React, {useState} from 'react'
import './style/ContentsSideMenu.scss'
import Star from '../../../../img/yellowstar.png'
import FileSave from '../../../../img/filesave.png'
import Share from '../../../../img/shareicon.png'
import SideMenuItem from '../Item'
import axios from 'axios'
import { useCallback } from 'react'
import ShareModal from './ShareModal'

const ContentsSideMenu = (props) => {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {id} =props
    const [Liked,setLiked] = useState(0) //Star
    const [Followed, setFollowed] = useState(true) //Follow
    const [modalOpen, setModalOpen] = useState(false) //Share Modal

    const toggleFollow = () => setFollowed(!Followed)
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

        axios.post(`${SERVER_IP}/api/v1/collections/toggle`, data).then((res)=>{
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
        <div className = "ContentsSideMenu">
            <SideMenuItem content = {Liked} image = {Star}  onAction={() => setLiked(Liked + 1)}/>
            <SideMenuItem content = {Followed ? 'Follow' : 'Following'} onAction={toggleFollow}/>
            <SideMenuItem content = {"Save"} image = {FileSave} onAction={handleOnSave} />
            <SideMenuItem content = {"Share"} image = {Share} onAction={handleOnShare} />
            <ShareModal modalOpen ={modalOpen} modalClose = {closeModal}/>
        </div>
    )
}

export default ContentsSideMenu