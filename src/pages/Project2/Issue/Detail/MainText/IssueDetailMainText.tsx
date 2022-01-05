import React from 'react';
import './style/IssueDetailMainText.scss'
import Profile from '../../../../../img/profile4.png'


const IssueDetailMainText = () => {
    return (
        <div className = "IssueDetail-Maintext">
            <div className = "IssueDetail-Maintext-main">
                <div className = "IssueDetail-Maintext-contents">
                    <div className = "IssueDetail-Maintext-title">
                        <p>User 데이터</p>
                    </div>
                    <div className = "IssueDetail-Maintext-text">
                        <p>Bug description
                        App getting crash in 5.1.4 version when i click on pencil button it load and get crashed i think its a error of code not in server 
                        connection.i am using signal contact directory ( not using my own server )</p>
                    </div>
                </div>
                <div className = "IssueDetail-Maintext-info">
                    <div className = "IssueDetail-Maintext-date">
                        <p>2021.06.02 08:20</p>
                    </div>
                    <div className = "IssueDetail-Maintext-profile">
                        <img src = {Profile}/>
                        <p>Sarah</p>
                    </div>
                </div>
            </div>
            <div className = "IssueDetail-Maintext-button">
                <input type='submit' value="Issue branch"></input>
            </div>
        </div>

    );
};

export default IssueDetailMainText;