import React from 'react';
import './style/IssueDetailComments.scss'
import Contents from '../../../../../components/common/CommentPost'

const IssueDetailComments = () => {
    return (
        <div className = "IssueDetail-Comments">
            <div className = "IssueDetail-Comments-Header">
                <div className = "IssueDetail-Comments-Header-title">
                    <p>제목 선택</p>
                </div>
                <div className =  "IssueDetail-Comments-Header-branch">
                    <p>브랜치 경로</p>
                </div>
            </div>
            <div className = "IssueDetail-Comments-contents">
                <Contents/>
            </div>
        </div>
    );
};

export default IssueDetailComments;