import React, {useState} from 'react';
import './style/SideMenu.scss'
import Modify from '../../../img/modify.png'
import Tora from '../../../img/toralogobutton.png'
import Chat from '../../../img/chatbutton.png'
import SideMenuItem from './Item';
import Custom from './Custom'

const SideMenu = () => {

    const  [showCon, setShowCon] = useState(false)

    return (
        <div className = "SideMenu">
            <div className = "SideMenu-modify">
                <button onClick ={() => setShowCon(!showCon)}><img src = {Modify}/></button>
            </div>
            <>
                <SideMenuItem content = {"자유게시판"} image = {Tora} onAction={()=>console.log("자유게시판")}/>
                <SideMenuItem content = {"블로그"} image = {Tora} onAction={()=>console.log("블로그")}/>
                <SideMenuItem content = {"라이센스"} image = {Tora} onAction={()=>console.log("라이센스")}/>
                <SideMenuItem content = {"노트"} image = {Tora} onAction={()=>console.log("노트")}/>
                <SideMenuItem image = {Chat} onAction={()=>console.log("채팅")}/>
            </>
            <div className = "SideMenu-custom">
                {showCon && <Custom/>}
            </div>
        </div>
    )
}

export default SideMenu