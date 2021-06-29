import React from 'react';
import './style/ChatRoomFunction.scss'
import Profile from '../../../../../img/profile4.png'
import ChatRoomExit from '../../../../../img/chatroomexiticon.png'
import Search from '../../../../../img/searchNavy@2x.png'

const ChatRoomFunction = () => {
    return (
        <div className = "ChatRoom-Function">
            <div className = "ChatRoom-Function-main">
                <div className = "ChatRoom-Function-search">
                    <p>검색</p>
                    <img src = {Search}/>
                </div>
                <div className = "ChatRoom-Function-exit">
                    <p>채팅방 나가기</p>
                    <img src = {ChatRoomExit}/>
                </div>
            </div>
            <div className = "ChatRoom-Function-participants">
                <div className = "ChatRoom-Function-user">
                    <div className = "ChatRoom-Function-user-profile"><img src = {Profile}/></div>
                    <div className = "ChatRoom-Function-user-name">Nicolas Serrano</div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoomFunction;