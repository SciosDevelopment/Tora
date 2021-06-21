import React from 'react';
import './style/ProjectFollowIssueRequest.scss'

const ProjectFollowIssueRequest = () => {
    return (
        <div className = "ProjectFollow-IssueRequest">
            <div className = "ProjectFollow-IssueRequest-header">
                <p>이슈 요청 리스트</p>
            </div>
            <div className = "ProjectFollow-IssueRequest-main">
                <div className = "ProjectFollow-IssueRequest-title">
                    <p>Title</p>
                    <p>Version</p>
                    <p>Branch</p>
                </div>
                <div className = "ProjectFollow-IssueRequest-branch-list">
                    <p>Assignees</p>
                    <p>Version 1.0.2</p>
                    <p>Branch select</p>
                    <input type = "button"/>
                </div>
            </div>
            <div className = "ProjectFollow-IssueRequest-button">
                <input type="button" value="설정"/>
            </div>
        </div>
    );
};

export default ProjectFollowIssueRequest;