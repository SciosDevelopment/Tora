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
                    <label id="r1">Commit</label>
                    <input type = "radio" name="rd_m" id = "r1" value="Commit"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <label id="r2">Merge</label>
                    <input type = "radio" name="rd_m"  id = "r2" value="Merge"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <label id="r3">Full Request</label>
                    <input type = "radio" name="rd_m" id = "r3" value="Full Request"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <label id="r4">ERD System</label>
                    <input type = "radio" name="rd_m" id = "r4" value="ERD System"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <label id="r5">Readme</label>
                    <input type = "radio" name="rd_m" id = "r5" value="Readme"/>
                </div>
                <div className = "ProjectFollow-Authority-branch-list">
                    <label id="r6">Issue</label>
                    <input type = "radio" name="rd_m" id = "r6" value="Issue"/>
                </div>
            </div>
            <div className = "ProjectFollow-Authority-button">
                <input type="button" value="설정"/>
            </div>
        </div>
    );
};

export default ProjectFollowAuthority;