import React from 'react';
import './style/SideMenuCustom.scss'
import Tora from '../../../../img/toralogobutton.png'

const SideMenuCustom = () => {
    return (
        <div className = "ConnectSideButton-Custom">
            <div className=  "ConnectSideButton-Custom-select">
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>자유게시판</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>블로그</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>라이센스</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>코드아이</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>노트</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>채팅</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>My 페이지</p>
                </div>
                <div className = "Connect-SideButton-Custom-contents">
                    <img src = {Tora}/>
                    <p>업그레이드</p>
                </div>
                
            </div>
        </div>
    );
};

export default SideMenuCustom;