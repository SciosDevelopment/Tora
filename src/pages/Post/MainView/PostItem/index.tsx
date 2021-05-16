import React from 'react'
import './style/BulletinBoardItem.scss'
import HeartLogo from '../../../../img/heart64.png'
import Profile11 from '../../../../img/profile11.png'


const BulletinBoardItemView = () => {
    return (
        <div className = "BulletinBoard-item-main-container">
            <div className = "BulletinBoard-item-name-text-area">
                <div className = "BulletinBoard-item-name-area">
                    <p>
                    API From users repos to fork owner 
                    </p>
                </div>
                <div className = "BulletinBoard-item-text-area">
                    
                    <p>
                    API From usersrepos to fork ownI From users repos to fork owner
                    </p>
                </div>
            </div>
            <div className = "BulletinBoard-item-profile-tag">
                <p>node.js</p>
                <p>node.js</p>
                <p>node.js</p>
                <p>node.js</p>
            </div>
            <div className = "BulletinBoard-item-icon-area">
                <div className = "BulletinBoard-item-img">
                    <img src = {Profile11}/>
                    <p>Nicolas</p>
                </div>

                    <div className = "BulletinBoard-item-icon">
                        <div className = "BulletinBoard-item-icon2">
                            <p>조회수 100</p>
                        </div>
                        <div className = "BulletinBoard-item-icon3">
                            <p>댓글 6</p>
                        </div>
                        <div className = "BulletinBoard-item-icon4">
                            <img src = {HeartLogo}/>
                            <p>23</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default BulletinBoardItemView