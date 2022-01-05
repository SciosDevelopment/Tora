import React from 'react';
import './style/IssueWriteSet.scss'
import Trackers from './IssueTrackers/IssueTrackers'

const IssueWriteSet= () => {

    return (
        <div className = "Issue-Write-Set">
            <div className = "Issue-Write-Set-title">
                <p>Issue</p>
            </div>
            <div className = "Issue-Write-Set-view">
                <Trackers/>
            </div>
        </div>
    );
};

export default IssueWriteSet;