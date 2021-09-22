import React, {useEffect, useState} from 'react';
import './style/Chat.scss'
import Chatmainicon from '../../../img/chatmainicon.png'
import Chatroomicon from '../../../img/chatroomicon.png'
import Openchaticon from '../../../img/openchaticon.png'
import Bell from '../../../img/bellicon.png'
import Maximizebutton from '../../../img/chatmaxicon.png'
import Chathiddenbutton from '../../../img/chathiddenicon.png'
import Chatexit from '../../../img/chatexit.png'
import Main from './Main'
import ChatList from './List'
import OpenChat from './OpenChat'
import ChatCreate from './Create';
import OpenChatCreate from './Create/Open';
import GroupChatCreate from './Create/Group';
import ChatRoom from './Room';

import {history} from '../../../configureStore'

const Chat = (Props) => {
    const [tabValue, setTabValue] = useState<Number>(0)
    const {onClose} = Props
    enum token_ { ChatMain, ChatList, OpenChat, ChatRoom}

    const switchTab = (tabValue) => {
        switch(tabValue) {
            case 0 : return <Main/>
            case 1 : return <ChatList/>
            case 2 : return <OpenChat/>
        }
    }

    return (
            <div className = "Chat-container">
            <div className = "Chat-main-tab">
                <div className = "Chat-main-tab-button">
                    <div className = "Chat-main-tab-button-icon">
                        <div className = {tabValue === 0 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed` } onClick = {()=>setTabValue(0)}>
                            <img src = {Chatmainicon}/>
                        </div>
                        <div className = {tabValue === 1 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed`} onClick = {()=>setTabValue(1)}>
                            <img src = {Chatroomicon}/>
                        </div>
                        <div className = {tabValue === 2 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed`} onClick = {()=>setTabValue(2)}>
                            <img src = {Openchaticon}/>
                        </div>
                    </div>
                    <div className = "Chat-main-tab-button-bell">
                        <img src = {Bell}/>
                    </div>
                </div> 
                <div className = "Chat-main-tab-body">
                    <div className = "Chat-main-tab-body-header">
                        <img src = {Chathiddenbutton}/>
                        <img src = {Maximizebutton}/>
                        <img src = {Chatexit} onClick={onClose}/>
                    </div>
                    <div className="Chat-main-tab-contents">
                    {
                        switchTab(tabValue)
                    } 
                    </div>
                </div>
            </div>
            
            {/* <div className = "Chat-main-chatcreate">
                <ChatCreate/>
            </div>
            <div className = "Chat-main-groupchatcreate">
                <GroupChatCreate/>
            </div>
            <div className = "Chat-main-openchatcreate">
                <OpenChatCreate/>
            </div>
            <div className = "Chat-main-chatroom">
                <ChatRoom/> 
            </div> */}
        </div>
    );
};

export default Chat;