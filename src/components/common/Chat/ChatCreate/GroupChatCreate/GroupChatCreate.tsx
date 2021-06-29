import React, {FunctionComponent ,useState} from 'react';
import './style/GroupChatCreate.scss'
import ChatExit from '../../../../../img/chatexit.png'
import Searchicon from '../../../../../img/searchNavy@2x.png'
import GroupChatItem from './GroupChatItem/GroupChatItem';

const GroupChatCreate:FunctionComponent = () => {

    const initData = () => {
        // if(FollowQuery != null) return Array()
        return Array(
            {key : 0, name : "taewook"},
            {key : 1, name : "suhan"},
            {key : 2, name : "junhyeong"},
            {key : 3, name : "kimtaewook"},
            {key : 4, name : "Nicolas cazy"},
            {key : 5, name : "Sirious black"},
            {key : 6, name : "Harry Potter"},
            {key : 7, name : "David slvar"},
            {key : 8, name : "Yan Dason"},
            {key : 9, name : "Harry Potter"},
        )
    }
    const [GroupChatItemView] = useState(initData)

    return (
        <div className = "GroupChatCreate"> 
            <div className = "GroupChatCreate-header">
                <div className = "GroupChatCreate-title">
                    <p>그룹 채팅방</p>
                </div>
                <div className = "GroupChatCreate-exit">
                    <img src = {ChatExit}/>
                </div>
            </div> 
            <div className = "GroupChatCreate-searchbar">
                <input type = "text"></input>
                <img src = {Searchicon}/>
            </div>
            <div className = "GroupChatCreate-item">
                <div className = "GroupChatCreate-item-title">
                    <p>팔로잉</p>
                </div>
                {
                    GroupChatItemView.map(item => {
                        return (
                            <GroupChatItem key={item.key}  name={item.name}/>
                        )
                    })
                }
            </div>
            <div className = "GroupChatCreate-button">
                <div className = "GroupChatCreate-confirm">
                    <input type = "button" value = "확인"/>
                </div>
                <div className = "GroupChatCreate-cancel">
                    <input type = "button" value = "취소"/>
                </div>
            </div>
        </div>
    );
};

export default GroupChatCreate;