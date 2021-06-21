import React from 'react';
import './style/ProjectFollowAuthority.scss'

const ProjectFollowAuthority = () => {
    return (
        <div className = "ProjectFollow-Authority">
            <div className = "ProjectFollow-Authority-header">
                <p>권한 위임 리스트</p>
            </div>
            <div className = "ProjectFollow-Authority-main">
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>Commit</p>
                    <input type = "button"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>Merge</p>
                    <input type = "button"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>Full Request</p>
                    <input type = "button"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>ERD System</p>
                    <input type = "button"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>Readme</p>
                    <input type = "button"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <p>Issues</p>
                    <input type = "button"/>
                </div>
            </div>
            <div className = "ProjectFollow-Authority-button">
                <input type="button" value="설정"/>
            </div>
        </div>
    );
};

export default ProjectFollowAuthority;