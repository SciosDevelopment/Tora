import React from 'react'

import iconIssueCoin from '../../../img/icon_issue_coin.png'
import userSample from '../../../img/user_sample.png'

const IssueCard = (props) => {
    return (
        <div className="issuecard">
            <p className="date">2021.09.10 ~ 2021. 11.01</p>
            <div className="icon">
                <img src={iconIssueCoin} alt="coin" />
                <p>0.08</p>
            </div>
            <div className="text">
                <p>
                    API From users repos to fork ownerork owner
                    API From users repos to fork owner
                </p>
                <div className="marks">
                    <mark className='skillMark'>node.js</mark>
                    <mark className='skillMark'>node.js</mark>
                    <mark className='skillMark'>node.js</mark>
                    <mark className='skillMark'>node.js</mark>
                </div>
                <div className="kind">
                    <span className='red'>Bug</span>
                    |
                    <span className='violet'>일대일</span>
                    |
                    <span className='yellow'>주니어</span>
                </div>

                <img src={userSample} className='userMark' alt="user" />
            </div>
        </div>
    )
}

export default IssueCard