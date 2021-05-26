import React from 'react';
import Title from 'src/components/common/Title/Title';
import './style/MyPageSetFollowing.scss'
import Personal from '../PersonalItem/MyPageSetPersonalItem'

const MyPageSetFollowing = () => {
    return (
        <div className = "Mypage-set-following-main">
            <div className = "Mypage-set-following-personal-view">
                <Title name ="Personal Follow"/>
                <div className = "Mypage-set-following-personal-item">
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

export default MyPageSetFollowing;