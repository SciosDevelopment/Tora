import React from 'react';
import './style/Comment.scss'
import Replyicon from '../../../img/replyicon.png'
import Hearticon from '../../../img/heart64.png'
import Profile from '../../../img/profile.png'

const Comment = (props) => {
    const {data} = props
    return (
        <div className = "Comment-main">
            <div className = "Comment-context">
                <p>Your code looks fine to me.. have you updated your package version? try npm update * in your turminal</p>
            </div>
            <div className = "Comment-info">
                <div className = "Comment-date">
                    <p>2020.10.23</p>
                </div>
                <div className = "Comment-user">
                    <div className = "Comment-like-reply">
                        <div className = "Comment-like">
                            <img src = {Hearticon}/>
                            <p>32</p>
                        </div>
                        <div className = "Comment-reply">
                            <img src = {Replyicon}/>
                            <p>12</p>
                        </div>
                    </div>
                    <div className = "Comment-profile">
                        <img src = {Profile}></img>
                        <p>Nicolas Serrano</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment