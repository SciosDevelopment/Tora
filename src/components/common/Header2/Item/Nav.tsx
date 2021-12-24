import React, { useState } from 'react';
import iconDown from '../../../../img/guide/ic_down.png';
import './style/Nav.scss';

const Nav = () => {

    const clickNavDepth1 = (e) => {
        if( e.target.parentElement.classList.value == 'on' ) {
            e.target.parentElement.classList.remove('on')
        }else{
            e.target.parentElement.classList.add('on')
        }
    }

    return (
        <div className = "nav">
            <div className = "service">
                <div className = "content">
                    <a href="#" onClick={clickNavDepth1}>
                        <span>Product</span>
                        <img src={iconDown} alt="하위메뉴보기" />
                    </a>
                    <div className="menu">
                        <li><a href="#">Git ToraPod</a></li>
                        <li><a href="#">Issue system</a></li>
                        <li><a href="#">Communication</a></li>
                    </div>
                </div>
                <div className = "content">
                    <a href="#" onClick={clickNavDepth1}>
                        <span>Open source</span>
                    </a>
                </div>
                <div className = "content">
                    <a href="#" onClick={clickNavDepth1}>
                        <span>Community</span>
                        <img src={iconDown} alt="하위메뉴보기" />
                    </a>
                    <div className="menu">
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Issue bounties</a></li>
                    </div>
                </div>
                <div className = "content">
                    <a href="#" onClick={clickNavDepth1}>
                        <span>Support</span>
                        <img src={iconDown} alt="하위메뉴보기" />
                    </a>
                    <div className="menu">
                        <li><a href="#">Question</a></li>
                        <li><a href="#">FAQ Product</a></li>
                        <li><a href="#">FAQ Project</a></li>
                        <li><a href="#">FAQ Community</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;