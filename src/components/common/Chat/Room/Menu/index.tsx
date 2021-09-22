import React from 'react';
import './style/ChatRoomMenu.scss'
import Profile from '../../../../../img/profile4.png'
import ChatRoomExit from '../../../../../img/chatroomexiticon.png'
import Search from '../../../../../img/searchNavy@2x.png'

const ChatRoomMenu = () => {
    return (
        <div className = "ChatRoom-Menu">
            <div className = "ChatRoom-Menu-main">
                <div className = "ChatRoom-Menu-search">
                    <p>검색</p>
                    <img src = {Search}/>
                </div>
                <div className = "ChatRoom-Menu-exit">
                    <p>채팅방 나가기</p>
                    <img src = {ChatRoomExit}/>
                </div>
            </div>
            <div className = "ChatRoom-Menu-participants">
                <div className = "ChatRoom-Menu-user">
                    <div className = "ChatRoom-Menu-user-profile"><img src = {Profile}/></div>
                    <div className = "ChatRoom-Menu-user-name">Nicolas Serrano</div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoomMenu