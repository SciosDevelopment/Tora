import React from 'react';
import './style/IssueDetailSetContents.scss'
import Replyicon from '../../../../../../img/replyicon.png'
import Hearticon from '../../../../../../img/heart64.png'
import Profile from '../../../../../../img/profile.png'

const IssueDetailSetContents = () => {
    return (
        <div className = "IssueDetail-Set-Contents">
            <div className = "IssueDetail-Set-Contents-main">
                <div className = "IssueDetail-Set-Contents-title">
                    <div className = "IssueDetail-Set-Contents-info">
                        <p>User 정보 및 객체 </p>
                    </div>
                    <div className = "IssueDetail-Set-Contents-object">
                        <p>Ruby</p>
                    </div>
                </div>
                <div className = "IssueDetail-Set-Contents-text">
                    <p>asdasdasdasdasdas</p>
                </div>
            </div>
            <div className = "IssueDetail-Set-Contents-side">
                <div className = "IssueDetail-Set-Contents-user">
                    <div className = "IssueDetail-Set-Contents-reply">
                        <div className = "IssueDetail-Set-Contents-like">
                            <img src = {Hearticon}/>
                            <p>32</p>
                        </div>
                        <div className = "IssueDetail-Set-Contents-reply">
                            <img src = {Replyicon}/>
                            <p>12</p>
                        </div>
                    </div>

                    <div className = "IssueDetail-Set-Contents-profile">
                        <img src = {Profile}></img>
                        <p>Nicolas Serrano</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default IssueDetailSetContents;