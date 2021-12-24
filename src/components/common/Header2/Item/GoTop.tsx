import React from 'react';
import iconGoTop from '../../../../img/guide/goTop.png';
import './style/GoTop.scss'

const GoTop = () => {
    const moveScrollToBottom = () => window.scrollTo(0,10);
    
    return (
        <button className="GoTop" onClick={moveScrollToBottom}>
            <img src={iconGoTop} alt="goTop" />
        </button>
    );
}

export default GoTop;