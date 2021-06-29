import React, { FunctionComponent, useState } from 'react';
import './style/OpenChat.scss'
import Searchicon from '../../../../img/searchNavy@2x.png'
import OpenChatCreate from '../../../../img/openchatcreate.png'
import OpenChatItem from './OpenChatItem/OpenChatItem';

const OpenChat:FunctionComponent = () => {
    
    const initData = () => {

        return Array(
            {key : 0, name : "David slvar", text : "hi mr.kim", time : "AM 05:10", alarm : "22"},
            {key : 1, name : "Harry Potter", text : "how are you", time : "PM 05:14",alarm : "12"},
            {key : 2, name : "Galileo Galilei,", text : "For all that, the Earth movesasdasd", time : "PM 05:14",alarm : "1"},
            {key : 3, name : "Google", text : "hello test texttextexttexttextasdasdasdadadasdasdasdasdasdasdasdasd", time : "AM 02:20",},
            {key : 4, name : "ex girlfriend", text : "hi 잘지내?", time : "AM 05:14", alarm : "5"},
            {key : 5, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14", alarm : "300"},
            {key : 6, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14", alarm : "200"},
            {key : 7, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14", alarm : "10"},
            {key : 8, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14",},
            {key : 9, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14",},
            {key : 10, name : "kim tae wook", text : "hey man how are you?", time : "AM 05:14",},
        )
    }
    const [OpenChatView] = useState(initData)
    return (
        <div className = "OpenChat">
            <div className = "OpenChat-Header">
                <div className = "OpenChat-searchbar">
                    <input type = "text"></input>
                    <img src = {Searchicon}/>
                </div>
                <div className = "OpenChat-openchat-create">
                    <img src = {OpenChatCreate}/>
                </div>
            </div>
            <div className = "OpenChat-main">
                <div className = "OpenChat-main-mychat">
                    {
                        OpenChatView.map(item => {
                            return (
                                <OpenChatItem key={item.key}  name={item.name} text={item.text} time={item.time} alarm ={item.alarm}/>
                            )
                        })
                    }
                </div>
                <div className = "OpenChat-main-recommendation">
                    <div className = "OpenChat-main-rcd-title">
                        <p>추천</p>
                    </div>
                    {
                        OpenChatView.map(item => {
                            return (
                                <OpenChatItem key={item.key}  name={item.name} text={item.text} time={item.time} alarm ={item.alarm}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OpenChat;