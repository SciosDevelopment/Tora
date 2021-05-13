import React from 'react';
import './style/BulletinBoardDetailTitle.scss'

const BulletinBoardDetailtitle = () => {
    return (
    <div className = "BulletinBoard-Detail-view-title">
        <div className = "BulletinBoard-Detail-view-title-name">
            <p>API From users repos to fork owner</p>
        </div>
        <div className = "BulletinBoard-Detail-view-info">                    
            <div className = "BulletinBoard-Detail-view-tag">
                <p>ansivble-template</p>
                <p>swift</p>
                <p>node.js</p>
                <p>django</p>
            </div>
            <div className = "BulletinBoard-Detail-view-number">
                <div className = "BulletinBoard-Detail-view-hits">
                    <p>조회수 100</p>
                </div>
                <div className = "BulletinBoard-Detail-view-comments">
                    <p>댓글 6</p>
                </div>
                <div className = "BulletinBoard-Detail-view-date">
                    <p>2020.10.23</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BulletinBoardDetailtitle;