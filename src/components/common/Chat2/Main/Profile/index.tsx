import React,{useState, FunctionComponent} from 'react';

import useradd from '../../../../../img/useradd.png'
import userimg from '../../../../../img/profile4.png'
import usereditbtn from '../../../../../img/usereditbtn.png'
import closebtn from '../../../../../img/slidearrow.png'

import FollowerView from '../Follow/Follower'
import FollowingView from '../Follow/Following'

const Profile:FunctionComponent = () => {

    const FollowerData = () => {
        return Array(
            {key :0, title : "Follower 127"},
        )
    }
    const FollowingData = () => {
        return Array(
            {key :0, title : "Following 435"},
        )
    }

    const [FollowerPage] = useState(FollowerData)
    const [FollowingPage] =useState(FollowingData)


    const [isShowFollow, setIsShowFollow] = useState(true)
    const openFollow = () => setIsShowFollow(false)
    const closeFollow = () => setIsShowFollow(true)

    return (
        <div className= "profile">
            <div className= "header">
                <div className= "title">
                    <span>Profile</span>
                </div>
                <div className= "add">
                    <img src= {useradd}/>
                </div>
            </div>
            <div className= "main">
                <div className= "user">
                    <div className= "user_img"><img src= {userimg}/></div>
                    <div className= "user_name"><p>Nicloas Serrano</p></div>
                    <div className= "user_edit"><img src = {usereditbtn}/></div>
                </div>
                <div className= "follow">
                    <div className= "view">
                        <button className= "btn" onClick ={openFollow}>
                            <span>127</span>
                            <p>Followers</p>
                        </button>
                        <div className= {`follow_open ${isShowFollow && 'on'}`}>
                            <img src = {closebtn} onClick = {closeFollow}/>
                                {
                                FollowerPage.map(item => {
                                    return (
                                        <FollowerView key={item.key} title ={item.title}/>
                                    )
                                })
                                }
                        </div>
                    </div>

                    <div className= "view">
                        <button className= "btn" onClick ={openFollow}>
                            <span>435</span>
                            <p>Following</p>
                        </button>
                        <div className= {`follow_open ${isShowFollow && 'on'}`}>
                            <img src = {closebtn} onClick = {closeFollow}/>
                            {
                                FollowingPage.map(item => {
                                    return (
                                        <FollowingView key={item.key} title={item.title}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className= "reviewscore">
                        <span>3758</span>
                        <p>Review score</p>
                    </div>
                </div>
            </div>
            <div className= "about">
                <div className= "title">
                    <span>about</span>
                </div>
                <div className= "text">
                    <p>Nicolas Serrano Nicolas SerranoNicolas Serrano
                    Nicolas Serrano Nicolas SerranoNicolas Serrano
                    Nicolas Serrano Nicolas SerranoNicolas Serrano
                    Nicolas Serrano Nicolas SerranoNicolas Serrano
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;