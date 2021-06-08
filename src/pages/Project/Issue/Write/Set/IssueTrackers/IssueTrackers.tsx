import React from 'react';
import './style/IssueTrackers.scss'
import Issueicon from '../../../../../../img/Issueicon.png'
import Bugicon from '../../../../../../img/bugicon.png'
import Primaryicon from '../../../../../../img/primaryicon.png'
import Addicon from '../../../../../../img/customicon.png'


const IssueTrackers = () => {
    return (
        <div className = "IssueTrackers">
            <div className = "IssueTrackers-options">
                <div className = "IssueTrackers-view">
                    <img src = {Issueicon}/>
                    <p>Issue</p>
                </div>
                <div className = "IssueTrackers-view">
                    <img src = {Bugicon}/>
                    <p>Bug</p>
                </div>
                <div className = "IssueTrackers-view">
                    <img src = {Primaryicon}/>
                    <p>Primary key</p>
                </div>
                <div className = "IssueTrackers-view">
                    <img src = {Addicon}/>
                    <p>Add</p>
                </div>
            </div>
            <div className = "IssueTrackers-button">
                <input type='submit' value="Select"/>
            </div>
        </div>
    );
};

export default IssueTrackers;