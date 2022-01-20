import React from 'react';
import userimg from '../../../../../img/profile4.png'
import sendbtn from '../../../../../img/chatsendbtn.png'

const ChatInSide = () => {
    return (
        <div className= "chatinside">
            <div className= "contents">
                <div className= "date">
                    <p>January 07.2022</p>
                </div>
                <div className= "received">
                    <img src = {userimg}/>
                    <div className= "text">
                        <p>안녕하세요 scios 반갑습니다</p>
                    </div>
                    <div className= "time">
                        <p>2:52PM</p>
                    </div>
                </div>
                <div className= "send">
                    <div className= "time">
                        <p>2:52PM</p>
                    </div>
                    <div className= "text">
                        <p>안녕하세요 scios 반갑습니다</p>
                    </div>
                </div>
            </div>
            <div className= "input">
                <input type = "text" value="Write a message" />
                <img src = {sendbtn}/>
            </div>
        </div>
    );
};

export default ChatInSide;