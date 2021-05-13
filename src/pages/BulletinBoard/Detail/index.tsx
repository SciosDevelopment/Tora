import React from 'react';
import './style/BulletinBoardDetailMain.scss'
import BulletinBoardDetailView from './MainView'
import Header from 'src/components/common/Header/Header';

const  BulletinBoardDetailMain = () => {
    return (
        <>
        <Header/>
        <div className = "BulletinBoard-Detail">
            <div className = "BulletinBoard-Detail-left-button">

            </div>
            <div className = "BulletinBoard-Detail-main">
                <BulletinBoardDetailView/>
            </div>

        </div>
        </>
    );
};

export default BulletinBoardDetailMain;