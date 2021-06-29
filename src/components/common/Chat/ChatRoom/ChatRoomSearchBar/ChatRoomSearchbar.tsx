import React from 'react';
import './style/ChatRoomSearchbar.scss'
import SearchbarExit from '../../../../../img/chatroomexit.png'
import Searchicon from '../../../../../img/searchNavy@2x.png'
const ChatRoomSearchbar = () => {
    return (
        <div className = "ChatRoom-Searchbar">
            <div className  = "ChatRoom-Searchbar-main">
                <input type = "text"></input>
                <img src = {Searchicon}/>
            </div>
            <div className = "ChatRoom-Searchbar-exit">
                <img src = {SearchbarExit}/>
            </div>
        </div>
    );
};

export default ChatRoomSearchbar;