import React, {FunctionComponent, useState} from 'react'
import './style/ChatRoom.scss'
import Bell from '../../../../img/bellicon.png'
import Maximizebutton from '../../../../img/chatmaxicon.png'
import Chathiddenbutton from '../../../../img/chathiddenicon.png'
import Chatexit from '../../../../img/chatexit.png'
import Profile from '../../../../img/profile4.png'
import Modify from '../../../../img/modify.png'
import FileSend from '../../../../img/filesendicon.png'
import Emoticon from '../../../../img/emoticonicon.png'
import TextFunction from '../../../../img/tora-ide-logo@2x.png'
import ModifyFunction from './Menu'
import Searchbar from './SearchBar'

const ChatRoom:FunctionComponent = () => {

    const  [showNav, setShowNav] = useState(false)
    const  [showSearch, setShowSearch] = useState(false)
    
    return (
        <div className = "ChatRoom">
            <div className = "ChatRoom-header">
                <div className = "ChatRoom-info">
                    <div className = "ChatRoom-profile">
                        <img src = {Profile}/>
                        <img src = {Profile}/>
                        <img src = {Profile}/>
                        <img src = {Profile}/>
                    </div>
                    <div className = "ChatRoom-title">
                        <div className = "ChatRoom-title-name">
                            <p>Name of the ChatRoom</p>
                        </div>
                        <div className  = "ChatRoom-title-number">
                            <p>(213)</p>
                        </div>
                    </div>
                </div>
                <div className = "ChatRoom-function">
                    <div className = "ChatRoom-view-control">
                        <img src = {Chathiddenbutton}/>
                        <img src = {Maximizebutton}/>
                        <img src = {Chatexit}/>
                    </div>
                    <div className = "ChatRoom-function-button">
                        <div className = "ChatRoom-function-bell">
                        <button className = "ChatRoom-function-bell-btn" onClick ={() => setShowSearch(!showSearch)}><img src = {Bell}/></button>
                        </div>
                        <div className = "ChatRoom-function-modify">
                            <button className = "ChatRoom-function-modify-btn" onClick ={() => setShowNav(!showNav)}><img src = {Modify}/></button>
                            <div className = "ChatRoom-function-modify-contents">
                                {showNav &&<ModifyFunction/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "ChatRoom-function-bell-contents">
                    {showSearch &&<Searchbar/>}
                </div>
            </div>
            <div className = "ChatRoom-body">
                <div className = "ChatRoom-chat-contacted">
                    <div className = "ChatRoom-received-chat">
                        <div className = "ChatRoom-received-profile-img">
                            <img src = {Profile}/>
                        </div>
                        <div className  = "ChatRoom-received-contents">
                            <div className = "ChatRoom-received-profile-name">
                                <p>Nicolas potter</p>
                            </div>
                            <div className = "ChatRoom-received-text">
                                <p>Hi my name is taewookasdasdassssasdasdasdasdaasdasdasdasdasdasdasdasdasdasdasdasdasd dasdasdd sad sd sd sd</p>
                                <img src = {TextFunction}/>
                            </div>  
                        </div>   
                    </div>
                    <div className = "ChatRoom-sent-chat">
                        <div className = "ChatRoom-sent-text">
                            <p>Hi my name is taewookasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd asdasdasd asd asd asd</p>
                        </div>
                    </div>
                </div>
                <div className = "ChatRoom-wrting-chat">
                    <div className = "ChatRoom-share">
                        <img src = {FileSend}/>
                    </div>
                    <div className = "ChatRoom-write">
                        <textarea name="Text1" cols= {40}  ></textarea>
                    </div>
                    <div className = "ChatRoom-emoticon">
                        <img src = {Emoticon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;