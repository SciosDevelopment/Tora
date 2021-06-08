import React from 'react';
import './style/IssueDetailSet.scss'
import Header from './Header/IssueDetailSetHeader'
import Contents from './Contents/IssueDetailSetContents'

const IssueDetailSet = () => {
    return (
        <div className = "IssueDetail-Set">
            <div className = "IssueDetail-Set-header">
                <Header/>
            </div>
            <div className = "IssueDetail-Set-contents">
                <Contents/>
            </div>
        </div>
    );
};

export default IssueDetailSet;