import React, {FunctionComponent, useState} from 'react';
import './style/ConnectSideButton.scss'
import Modify from '../../../../img/modify.png'
import Container from './Container/ConnectContainer'

const ConnectSideButton:FunctionComponent = () => {

    const  [showCon, setShowCon] = useState(false)

    return (
        <div className = "ConnectSideButton">
            <div className = "ConnectSideButton-modify">
            <button className = "ConnectSideButton-modify-btn" onClick ={() => setShowCon(!showCon)}><img src = {Modify}/></button>
            </div>
            <div className = "ConnectSideButton-modify-body">
                {showCon &&<Container/>}
            </div>
        </div>
    );
};

export default ConnectSideButton;