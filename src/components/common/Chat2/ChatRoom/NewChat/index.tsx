import React, { FunctionComponent, useState } from 'react';
import NewChatItem from './Item'

const NewChat:FunctionComponent = () => {

    const initData = () => {
        return Array(
            {key :0, name : "Nicolas Serrano"},
            {key :1, name : "Nicolas Serrano"},
            {key :2, name : "Nicolas Serrano"},
            {key :3, name : "Nicolas Serrano"},
            {key :4, name : "Nicolas Serrano"},
            {key :5, name : "Nicolas Serrano"},
            {key :6, name : "Nicolas Serrano"},
            {key :7, name : "Nicolas Serrano"},
            {key :8, name : "Nicolas Serrano"},
        )
    }
    const [NewChatList] = useState(initData)
    return (
        <div className= "newchatpopup">
            <div className= "header">
                    <span>New Chats</span>
            </div>
            <div className= "list">
                <div className= "count">
                    <p>4 selected</p>
                </div>
                {
                    NewChatList.map(item => {
                        return (
                            <NewChatItem key={item.key} name={item.name}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NewChat;