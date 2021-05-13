import React from 'react';
import './style/BulletinBoardMain.scss'
import Header from 'src/components/common/Header/Header';
import BulletinBoardView from '../BulletinBoard/MainView'

const BulletinBoardMain:React.FC = () => {
    return (
        <>
        <Header/>
        <div className = "BulletinBoard-main">
            <div className = "BulletinBoard-tora-result">
                <BulletinBoardView/>
            </div>
        </div>
        </>
    );
};

export default BulletinBoardMain;