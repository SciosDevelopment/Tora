import React, {} from 'react';
import './style/MainView.scss'
import Searchbar from '../../../components/common/Searchbar'
import BulletBoardItem from '../../BulletinBoard/MainView/BulletinBoardItem'

const MainView = () => {
    return (
        <div className = "BulletinBoard-Mainview-main-container">
            <div className = "BulletinBoard-Mainview-title">
                <div className="BulletinBoard-Mainview-search">
                    <Searchbar/>
                </div>
                <div className ="BulletinBoard-Mainview-sort">
                    <div className = "BulletinBoard-Mainview-container">
                            <div className = "BulletinBoard-Mainview-wrapper">
                                <div className = "BulletinBoard-Mainview-sub1">
                                    <a >Best</a>
                                </div>
                                <div className = "BulletinBoard-Mainview-sub2">
                                    <a >Newest</a>
                                </div>
                            </div>

                            <div className = "BulletinBoard-Mainview-newproject">
                            <input type='submit' value="New project"></input>
                            </div>
                    </div>
                </div>
            </div>
            <div className = "BulletinBoard-Mainview-main">
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
                <BulletBoardItem/>
            </div>
        </div>
    );
};

export default MainView;