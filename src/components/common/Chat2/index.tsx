import React,{useState} from 'react';
import humanicon from '../../../img/chatmainicon.png'
import chatroom from '../../../img/chatroomicon.png'
import chatcommunitiy from '../../../img/chaticon.png'
import slidearrow from '../../../img/slidearrow.png'
import bell from '../../../img/allim.png'
import chatbutton from '../../../img/chatbutton.png'

import ChatRoom from './ChatRoom'
import Main from './Main'
import OpenChat from './OpenChat'
const Chat2 = () => {

    const [isShowChat, setIsShowChat] = useState(true)
    const openChat = () => setIsShowChat(true)
    const closeChat = () => setIsShowChat(false)

    const [tabValue, setTabValue] = useState<Number>(0)
    const switchTab = (tabValue) => {
        switch(tabValue) {
            case 0 : return <Main/>
            case 1 : return <ChatRoom/>
            case 2 : return <OpenChat/>
        }
    }
    return (
        <div>
            <button className= "chatopen_btn" onClick={openChat}>
                <img src={chatbutton} className="chatbutton" alt="chatbtn"/>
            </button>
            <div className={`chatopen ${isShowChat && 'on'}`}>
                <div className= "chat2header">
                    <div className= "top">
                        <img className = "chatarrow" src = {slidearrow} onClick ={closeChat}/>
                        <img src = {bell}/>
                    </div>
                    <div className= "chat2tab">
                        <div className = {tabValue === 0 ? `chat2on` : `chat2off` } onClick = {()=>setTabValue(0)}>
                            <img className = "humanicon" src = {humanicon}/>
                        </div>
                        <div className = {tabValue === 1 ? `chat2on` : `Chat2off`} onClick = {()=>setTabValue(1)}>
                            <img className = "chatroomicon" src = {chatroom}/>
                        </div>
                        <div className = {tabValue === 2 ? `chat2on` : `chat2off`} onClick = {()=>setTabValue(2)}>
                            <img className= "openchaticon" src = {chatcommunitiy}/>
                        </div>
                    </div>
                </div>

                <div className= "chat2body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chat2;