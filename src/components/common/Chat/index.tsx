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
import ChatList from './ChatList'
import OpenChat from './OpenChat'
import ChatCreate from './ChatCreate/ChatCreate';
import OpenChatCreate from './ChatCreate/OpenChatCreate/OpenChatCreate';
import GroupChatCreate from './ChatCreate/GroupChatCreate/GroupChatCreate';
import ChatRoom from './ChatRoom/ChatRoom';

import {history} from '../../../configureStore'

const Chat = (props) => {
    const {token, id} = props.match.params
    const [tabValue, setTabValue] = useState<Number>(0);

    enum token_ { ChatMain, ChatList, OpenChat, ChatRoom}

    const setToken = ()=> {
        switch (token) {
            case "chatmain":        
                return token_.ChatMain
            case "chatlist":        
                return token_.ChatList
            case "openchat":        
                return token_.OpenChat
            case "chatroom":
                return token_.ChatRoom

            default:
                return token_.ChatMain
        }
    }



    const changeURL = async(token) => history.push(`/chat/${token}`)

    useEffect(()=>{setTabValue(setToken())}, [token])

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Chat-mainview">
                        <Main/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Chat-list">
                        <ChatList/>
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Chat-openchat">
                        <OpenChat/>
                    </div>
                )
            }
        }
    }

    return (
        <div>
            <div className = "Chat">
                <div className = "Chat-main-tab">
                    <div className = "Chat-main-tab-button">
                        <div className = "Chat-main-tab-button-icon">
                            <div className = {tabValue === 0 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed` } onClick = {()=>changeURL('chatmain')}>
                                <img src = {Chatmainicon}/>
                            </div>
                            <div className = {tabValue === 1 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed`} onClick = {()=>changeURL('chatlist')}>
                                <img src = {Chatroomicon}/>
                            </div>
                            <div className = {tabValue === 2 ? `Chat-main-tab-clicked` : `Chat-main-tab-closed`} onClick = {()=>changeURL('openchat')}>
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
                            <img src = {Chatexit}/>
                        </div>
                        {
                            switchTab(tabValue)
                        } 
                    </div>
                </div>
                <div className = "Chat-main-chatcreate">
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
                </div>
            </div>
        </div>
    );
};

export default Chat;