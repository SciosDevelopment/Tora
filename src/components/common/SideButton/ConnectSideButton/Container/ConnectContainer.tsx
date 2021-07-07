import React from 'react';
import './style/ConnectContainer.scss'
import Tora from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/chatbutton.png'


const ConnectContainer = () => {
    return (
        <div className = "ConnectContainer">
            <div className = "ConnectContainer-post">
                <button type="button"><img src={Tora} alt=""/>자유게시판</button>
            </div>
            <div className  ="ConnectContainer-blog">
                <button type = "button"><img src = {Tora}alt=""/>블로그</button>
            </div>
            <div className = "ConnectContainer-license">
                <button type="button"><img src={Tora} alt=""/>라이센스</button>
            </div>
            <div className = "ConnectContainer-note">
                <button type="button"><img src={Tora} alt=""/>노트</button>
            </div>
            <div className = "ConnectContainer-chat">
                <button type="button"><img src={Chat} alt=""/></button>
            </div>
        </div>
    );
};

export default ConnectContainer;