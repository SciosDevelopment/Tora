import React from 'react';

import iconMenu from '../../../img/img2/icon_menu2.png';
import iconSelect2 from '../../../img/img2/ic_select2.png';
import iconBitcoin from '../../../img/img2/icon_bitcoin.png';
import iconStar from '../../../img/img2/icon_star.png';
import iconPerson from '../../../img/img2/icon_person.png';

const CoinContainer = () => {

    const itemArr = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5}
    ]

    const ItemComponent = () => {
        return  (
            <>{
            itemArr.map((e,i)=>
                <div className="item">
                    <div className="iconbox">
                        <img src={iconBitcoin} alt="coin" />
                        <p>112</p>
                    </div>
                    <div className="textbox">
                        <div className="text1">
                            <span>API From users repos to fork owner</span>
                            <mark className='skillMark'>node.js</mark>
                            <mark className='skillMark'>django</mark>
                        </div>
                        <div className="text2">
                            I'm working with BootstrapVue. I want to splice my inputs in my child.vue after clicking on a button in my parent.vue. But every time I delete something in my parent.vue - which I can promise that it'
                        </div>
                    </div>
                    <div className="num1box">32</div>
                    <div className="num2box">1234</div>
                    <div className="gradebox">
                        <img src={iconStar} alt="star" />
                        <p>320</p>
                    </div>
                    <div className="userbox">
                        <p>Oct 21 at 10:55</p>
                        <img src={iconPerson} alt="user" />
                    </div>
                </div>
            )
            }</>
        )
    }

    return (
        <>
        <div className="coinContent">
            <div className="head">
                <div className="left">
                    <button>All</button>
                    <button>Open</button>
                    <button>Closed</button>
                </div>
                <div className="right">
                    <select className="moreTag" style={{backgroundImage:`url(${iconSelect2})`}}>
                        <option>More Tag</option>
                        <option>More Tag1</option>
                        <option>More Tag2</option>
                    </select>
                    <button className='btn_menu'><img src={iconMenu}  alt="menu" /></button>
                </div>
            </div>
            <div className="coinContentBody">
                <ItemComponent />
            </div>
        </div>{/* //coinContent */}
        </>
    );
};

export default CoinContainer;