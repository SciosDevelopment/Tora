import React from 'react';

import './style/Asideitems.scss'

import iconBell from '../../../../img/guide/ic_bell.png';
import iconWallet from '../../../../img/guide/ic_wallet.png';
import iconPerson from '../../../../img/guide/ic_person.png';

const AsideItems = () => {
    return (
        <div className = "asideitems">
            <a href="#">
                <img src={iconBell} alt="알림" />
            </a>
            <a href="#">
                <img src={iconWallet} alt="지갑" />
            </a>
            <a href="#">
                <img src={iconPerson} className="iconPerson" alt="내정보" />
            </a>
        </div>
    );
}

export default AsideItems;