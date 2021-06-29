import React from 'react';
import './style/ChatCreate.scss'
import ChatExit from '../../../../img/chatexit.png'

const ChatCreate = () => {
    return (
        <div className = "ChatCreate"> 
            <div className = "ChatCreate-header">
                <div className = "ChatCreate-title">
                    <p>채팅방 만들기</p>
                </div>
                <div className = "ChatCreate-exit">
                    <img src = {ChatExit}/>
                </div>

            </div> 
            <div className = "ChatCreate-button">
                <div className = "ChatCreate-groupchat">
                    <input type = "button" value = "그룹 채팅방"/>
                </div>
                <div className = "ChatCreate-openchat">
                    <input type = "button" value = "오픈 채팅방"/>
                </div>
            </div>
        </div>
    );
};

export default ChatCreate;