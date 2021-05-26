import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/MyPageSetFollower.scss'
import Personal from '../PersonalItem/MyPageSetPersonalItem'
import Project from '../ProjectItem/MyPageSetProjectItem'

const MyPageSetFollower = () => {
    return (
        <div className = "Mypage-set-follower-main">
            <div className = "Mypage-set-follower-project-view">
                <Title name ="Project Follow"/>
                <div className = "Mypage-set-follower-project-item">
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    
                </div>
            </div>
            <div className = "Mypage-set-follower-personal-view">
                <Title name ="Personal Follow"/>
                <div className = "Mypage-set-follower-personal-item">
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                </div>
            </div>
        </div>
    );
};

export default MyPageSetFollower;