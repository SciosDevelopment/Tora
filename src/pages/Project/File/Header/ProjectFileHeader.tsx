import React from 'react';
import './style/ProjectFileHeader.scss'
import Profile from '../../../../img/profile4.png'

const ProjectFileHeader = () => {
    return (
        <div className = "ProjectFile-Header-main">
            <div className = "ProjectFile-Header-profile-img">
                <img src = {Profile}/>
            </div>
            <div className = "ProjectFile-Header-title">
                <p>{`담당자 이름`}</p>
            </div>
            <div className = "ProjectFile-Header-info">
                <div className = "ProjectFile-Header-branche">
                    <p>200 Branches</p>
                </div>
                <div className = "ProjectFile-Header-tag">
                    <p>20 Tags</p>
                </div>
                <div className = "ProjectFile-Header-byte">
                    <p>320 Bytes</p>
                </div>
            </div>
            <div className = "ProjectFile-Header-comment">
                <p>200 comments</p>
            </div>
        </div>
    );
};

export default ProjectFileHeader;