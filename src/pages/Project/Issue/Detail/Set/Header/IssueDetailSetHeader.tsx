import React from 'react';
import './style/IssueDetailSetHeader.scss'
import Option from '../../../../../../img/mainpagebutton.png'

const IssueDetailSetHeader = () => {
    return (
        <div className = "IssueDetail-Set-Header">
            <div className = "IssueDetail-Set-Header-title">
                <p>DB 저장경로 설정</p>
            </div>
            <div className = "IssueDetail-Set-Header-side">
                <div className =  "IssueDetail-Set-Header-branch">
                    <p>브랜치 경로</p>
                </div>
                <div className = "IssueDetail-Set-Header-option">
                    <img src = {Option}/>
                </div>
            </div>

        </div>
    );
};

export default IssueDetailSetHeader;