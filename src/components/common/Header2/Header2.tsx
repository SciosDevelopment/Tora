import React, {useState} from 'react';

import './style/Header2.scss'

import logo from '../../../img/guide/logo.png';
import iconMenu from '../../../img/guide/ic_menu.png';
import close from '../../../img/guide/close.png';

import AsideItems from "./Item/AsideItems";
import Nav from "./Item/Nav";

import { useMediaQuery } from 'react-responsive';

const Header2 = () => {
    const isPc = useMediaQuery({ query:"(min-width:992px)" })

    const [isShowNav, setIsShowNav] = useState(false);

    const openMenu = () => {
        setIsShowNav( true)
    }

    const closeMenu = () => {
        setIsShowNav(false)
    }

    return (
    <div>
    <div className= "header">
        <div className="left">
            <div className = "logo">
                <a href="#">
                    <img src={logo} alt="ToraPod" />
                </a>
            </div>

            {
                isPc && <Nav />
            }
        </div>

        <div className = "aside">
            <AsideItems />
            {
                !isPc && 
                <a href="#" className="btn_menu">
                    <img src={iconMenu} className="iconMenu" alt="햄버거메뉴" onClick={openMenu} />
                </a>
            }
        </div>
    </div>

        {
        !isPc &&
            <div className={`navMobile ${isShowNav && 'on'}`}>
                <AsideItems />
                <button className="btn_close" onClick={closeMenu}>
                    <img src={close} />
                </button>
                <Nav />
            </div>
        }
    </div>
    );
};

export default Header2;