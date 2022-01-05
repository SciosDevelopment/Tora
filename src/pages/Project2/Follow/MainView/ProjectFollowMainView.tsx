import React from 'react';
import './style/ProjectFollowMainView.scss'
import FollowItem from './FollowItem/ProjectFollowItem'
import IssueRequest from './IssueRequest/ProjectFollowIssueRequest'
import Authority from './Authority/ProjectFollowAuthority'

const ProjectFollowMainView = () => {
    return (
        <div className = "ProjectFollow-MainView">
            <div className = "ProjectFollow-MainView-item">
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
                <FollowItem/>
            </div>
            <div className  = "ProjectFollow-MainView-set">
                <div className = "ProjectFollow-MainView-issue-request">
                    <IssueRequest/>
                </div>
                <div className = "ProjectFollow-MainView-authority">
                    <Authority/>
                </div>
            </div>
        </div>
    );
};

export default ProjectFollowMainView;