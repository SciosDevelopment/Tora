import React, { FunctionComponent, useState } from 'react';
import searchicon from '../../../../img/searchNavy@2x.png'
import chatplus from '../../../../img/chatplus.png'
import closebtn from '../../../../img/slidearrow.png'
import searchgray from  '../../../../img/searchgray.png'
import bellgray from '../../../../img/bellgray.png'
import userimg from '../../../../img/profile4.png'
import addbtn from '../../../../img/usereditbtn.png'
import editbtn from '../../../../img/chateditbtn.png'
import invitebtn from '../../../../img/useradd.png'
import leavebtn from '../../../../img/leavechatbtn.png'

import ChatRoomItem from './Item'
import InVitePupup from '../InVitePopup'
import NewChat from './NewChat'
import ChatInSide from './ChatInSide';
import ChatAddItem from './Item/ChatAddItem'

const ChatRoom:FunctionComponent = () => {

    const initData = () => {

        return Array(
            {key :0, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolasSerranolasSerrano Nicolas Serrano", time : "10:17 PM"},
            {key :1, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 AM"},
            {key :2, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :3, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :4, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :5, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :6, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 AM"},
            {key :7, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :8, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 AM"},
            {key :9, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :10, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 AM"},
            {key :11, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
            {key :12, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 AM"},
            {key :13, name : "Nicolas Serrano", text : "Nicolas Serrano Nicolas SerranoNicolas Serranolas Serrano Nicolas Serrano", time : "10:17 PM"},
        )
    }

    const [ChatRoomList] = useState(initData)

    const AddData= () => {

        return Array(
            {key :0, name : "Me"},
            {key :1, name : "Nicolas Serrano"},
        )
    }
    const [ChatAddList] = useState(AddData)

    const [isShowNewChatPopup, setIsShowNewChatPopup] = useState(false);
    const clickNewChatPopupClose = () => setIsShowNewChatPopup(false);
    const clickNewChat = () => setIsShowNewChatPopup(true);

    const [isShowInvitePopup, setIsShowInvitePopup] = useState(false);
    const clickInvitePopupClose = () => setIsShowInvitePopup(false);
    const clickInvite = () => setIsShowInvitePopup(true);

    const [isShowChat, setIsShowChat] = useState(true)
    const openChat = () => setIsShowChat(false)
    const closeChat = () => setIsShowChat(true)

    const [isShowAdd, setIsShowAdd] = useState(true)
    const openAdd = () => setIsShowAdd(false)
    const closeAdd = () => setIsShowAdd(true)
    
    return (
        <div className = "chatroom">
            <div className= "chatroom_header">
                <span>Chats</span>
                <div className= "chatroom_function">
                    <div className = "chatroom_search">
                        <input type= 'text'/>
                        <img src = {searchicon}/>
                    </div>
                    <button className= "chatroom_add" onClick={clickNewChat}>
                        <img src = {chatplus}/>
                    </button>                        
                        {
                            isShowNewChatPopup && 
                            <div className="newchat_modal">
                                <div className="wrap">
                                    <div className= "main">
                                        <NewChat/>
                                    </div>
                                    <div className="button">
                                        <button className= "createbtn">Create</button>
                                        <button className= "closebtn" onClick={clickNewChatPopupClose}>Close</button>
                                    </div>
                                </div>
                            </div>
                        }
                </div>
            </div>
            <div className= "chatroom_list">
                {
                    ChatRoomList.map(item => {
                        return (
                            <div className= "inchat">
                            <button  onClick ={openChat}><ChatRoomItem key={item.key} name={item.name} text={item.text} time={item.time}/></button>
                                <div className= {`chatinside_open ${isShowChat && 'on'}`}>
                                    <div className= "header">
                                        <div className= "button">
                                            <img src = {closebtn} onClick = {closeChat}/>
                                            <div className= "sidebtn">
                                                <img src = {searchgray}/>
                                                <img src = {bellgray}/>
                                            </div>
                                        </div>
                                        <div className= "user">
                                            <div className= "info">
                                                <img src = {userimg}/>
                                                <p>Nicolas Serrano</p>
                                            </div>
                                            <div className= "add">
                                                <img src = {addbtn} onClick ={openAdd}/>
                                                <div className= {`add_open ${isShowAdd && 'on'}`}>
                                                    <div className= "add_header">
                                                        <div className= "add_button">
                                                            <img src = {closebtn} onClick = {closeAdd}/>
                                                        </div>
                                                        <div className= "add_user">
                                                            <img src = {userimg}/>
                                                            <p>Nicolas Serrano</p>
                                                        </div>
                                                        <div className= "add_editbtn">
                                                            <div className= "edit">
                                                                <img src = {editbtn}/>
                                                                <span>Edit</span>
                                                            </div>
                                                            <button className= "invite" onClick={clickInvite}>
                                                                <img src = {invitebtn}/>
                                                                <span>Invite</span>
                                                            </button>
                                                            {
                                                                isShowInvitePopup && 
                                                                <div className="modal">
                                                                    <div className="wrap">
                                                                        <div className= "main">
                                                                            <InVitePupup/>
                                                                        </div>
                                                                        <div className="button">
                                                                            <button className= "createbtn">Create</button>
                                                                            <button className= "closebtn" onClick={clickInvitePopupClose}>Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className= "chatadd_list">
                                                        {
                                                            ChatAddList.map(item => {
                                                                return (
                                                                    <ChatAddItem key={item.key} name={item.name}/>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className= "leavebtn">
                                                        <img src = {leavebtn}/>
                                                        <span>Leave Chat</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ChatInSide/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>  
        </div>
    );
};

export default ChatRoom;