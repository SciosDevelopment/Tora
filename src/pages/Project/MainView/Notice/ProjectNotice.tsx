import React from 'react';
import './style/ProjectNotice.scss'
import profile from '../../../../img/profile4.png'

const ProjectNotice = () => {
    return (
        <div className = "Project-notice-main">
            <div className = "Project-notice-view">
                <div className = "Project-notice-contents-main">
                    <div className = "Project-notice-contents">
                        <p>오픈소스 공유 플랫폼 사용법</p>
                        <img src = {profile}/>
                    </div>
                    <div className = "Project-notice-contents">
                        <p>오픈소스 공유 플랫폼 사용법</p>
                        <img src = {profile}/>
                    </div>
                    <div className = "Project-notice-contents">
                        <p>오픈소스 공유 플랫폼 사용법</p>
                        <img src = {profile}/>
                    </div>
                    <div className = "Project-notice-contents2">
                        <p>이슈 트래커 10. 24일 마감</p>
                        <img src = {profile}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectNotice;