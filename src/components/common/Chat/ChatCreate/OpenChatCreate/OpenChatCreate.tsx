import React from 'react';
import './style/OpenChatCreate.scss'
import ChatExit from '../../../../../img/chatexit.png'
import PlusIcon from '../../../../../img/plusicon.png'

const OpenChatCreate = () => {
    return (
        <div className = "OpenChatCreate"> 
            <div className = "OpenChatCreate-header">
                <div className = "OpenChatCreate-title">
                    <p>오픈 채팅방</p>
                </div>
                <div className = "OpenChatCreate-exit">
                    <img src = {ChatExit}/>
                </div>
            </div> 
            <div className = "OpenChatCreate-chatname">
                <div className = "OpenChatCreate-chatname-title">
                    <p>채팅방 이름</p>
                </div>
                <input type = "text"></input>
            </div>
            <div className = "OpenChatCreate-chatprofile">
                <div className = "OpenChatCreate-item-title">
                    <p>채팅방 프로필</p>
                </div>
                <button type ="button"><img src = {PlusIcon}/></button>
            </div>
            <div className = "OpenChatCreate-button">
                <div className = "OpenChatCreate-confirm">
                    <input type = "button" value = "확인"/>
                </div>
                <div className = "OpenChatCreate-cancel">
                    <input type = "button" value = "취소"/>
                </div>
            </div>
        </div>
    );
};

export default OpenChatCreate;