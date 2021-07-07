import React from 'react';
import './style/ProjectFeed.scss'
import profile from '../../../../img/profile4.png'

const ProjectFeed = () => {
    return (
        <div className = "Project-feed-main">
            <div className = "Project-feed-header">
                <p>Feed</p>
            </div>
            <div className = "Project-feed-contents-main">
                <div className = "Project-feed-contents">
                    <p>오픈소스 공유 플랫폼 사용법</p>
                    <img src = {profile}/>
                </div>
                <div className = "Project-feed-contents">
                    <p>오픈소스 공유 플랫폼 사용법</p>
                    <img src = {profile}/>
                </div>
                <div className = "Project-feed-contents">
                    <p>오픈소스 공유 플랫폼 사용법</p>
                    <img src = {profile}/>
                </div>
                <div className = "Project-feed-contents2">
                    <p>이슈 트래커 10. 24일 마감</p>
                    <img src = {profile}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectFeed;