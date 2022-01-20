import React, { FunctionComponent, useState } from 'react';
import searchicon from '../../../../img/searchNavy@2x.png'
import chatplus from '../../../../img/chatplus.png'
import closebtn from '../../../../img/slidearrow.png'

import OpenChatItem from './Item'
import SearchPage from '../Serach'
import NewGroup from './NewGroup';

const OpenChat:FunctionComponent  = () => {
    const [isShowSearch, setIsShowSearch] = useState(true)
    const openSearch = () => setIsShowSearch(false)
    const closeSearch = () => setIsShowSearch(true)

    const initData = () => {

        return Array(
            {key :0, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :1, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :2, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :3, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :4, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :5, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :6, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :7, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :8, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :9, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :10, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
            {key :11, name : "오픈그룹방 제목", text1 : "sendbird", text2 : "asdasd", time : "10:17 PM", number : "123"},
        )
    }
    const [OpenChatList] = useState(initData)

    const [isShowNewGroupPopup, setIsShowNewGroupPopup] = useState(false);
    const clickNewGroupPopupClose = () => setIsShowNewGroupPopup(false);
    const clickNewGroup = () => setIsShowNewGroupPopup(true);

    return (
        <div className= "openchat">
            <div className= "header">
                <span>Open Group</span>
                <div className= "function">
                    <div className = "search">
                        <img className= "search_btn" src= {searchicon} onClick ={openSearch}/>
                        <div className= {`search_open ${isShowSearch && 'on'}`}>
                            <img src = {closebtn} onClick = {closeSearch}/>
                            <SearchPage/>
                        </div>
                    </div>
                    <button className= "add">
                        <img src = {chatplus} onClick={clickNewGroup}/>
                    </button>
                    {
                            isShowNewGroupPopup && 
                            <div className="modal">
                                <div className="wrap">
                                    <div className= "main">
                                        <NewGroup/>
                                    </div>
                                    <div className="button">
                                        <button className= "createbtn">Create</button>
                                        <button className= "closebtn" onClick={clickNewGroupPopupClose}>Close</button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className= "openchat_list">
                {
                    OpenChatList.map(item => {
                        return (
                            <OpenChatItem key={item.key} name={item.name} text1={item.text1} text2={item.text2} time={item.time} number={item.number} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OpenChat ;