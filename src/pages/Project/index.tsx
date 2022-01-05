import React, {useEffect, useState} from 'react';

import {history} from '../../configureStore'

import iconArrowExpend from '../../img/img2/icon_arrow_expend.png';
import menuDot from '../../img/img2/menu_dot.png';
import iconHeadUp from '../../img/img2/icon_head_up.png';
import iconHeadDown from '../../img/img2/icon_head_down.png';

import MainView from './MainView'
import Issue from './Issue'
import Header from 'src/components/common/Header/Header';
import SideLeft from 'src/components/common/SideItem/SideLeft';
import SideRight from 'src/components/common/SideItem/SideRight';

const Project = (props) => {
    const [isShowPopupProject, setIsShowPopupProject] = useState(false);
    const [isShowAsideMenu, setIsShowAsideMenu] = useState(false);
    const clickBtnMenu = () => setIsShowAsideMenu(isShowAsideMenu ? false : true);

    const clickNavDepth1 = (e) => {
        if( e.target.parentElement.classList.value == 'on' ) {
            e.target.parentElement.classList.remove('on')
        }else{
            e.target.parentElement.classList.add('on')
        }
    }

    const {token, id} = props.match.params
    const [tabValue, setTabValue] = useState<Number>(0);

    enum token_ { NOTHING=-1, Main, Issues}

    const setToken = ()=> {
        switch(token) {
            case "main": 
                return token_.Main
            case "issues": 
                return token_.Issues
            default:
                return token_.Main
        }
    }
    const changeURL = async(token) => history.push(`/project/${token}`)
    useEffect(()=>{setTabValue(setToken())}, [token])

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "tab-mainview">
                        <MainView/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "tab-issue">
                        <Issue/>
                    </div>
                )
            }
        }
    }

    return (
    <>
    <Header/>
    <div className= "project">
        <div className= "project-tab">
            <div className="location">
                <span>Support</span>
                <img src={iconArrowExpend} alt="expend" />
                <span>FAQ</span>
                <img src={iconArrowExpend} alt="expend" />
                <span>Product</span>
                <img src={iconArrowExpend} alt="expend" />
                <span>Git 서비스 사용 방법</span>
            </div>

            <div className="top_tab">
                <div className="btnbox">
                    <div className = {tabValue === 0 ? `btnbox-open` : `btnbox-close` } onClick = {()=>changeURL('main')}>Main</div>
                    <div className = {tabValue === 1 ? `btnbox-open` : `btnbox-close` } onClick = {()=>changeURL('issues')}>Issues</div>
                </div>
                <div className="aside_menu">
                    <button onClick={clickBtnMenu}><img src={menuDot} alt="menu" /></button>
                    {
                        isShowAsideMenu && 
                        <ul className="depth2">
                            <li>
                                <button onClick={clickNavDepth1}>
                                    Project
                                    <img src={iconHeadUp} className='icon_head_up' alt="arrow" />
                                    <img src={iconHeadDown} className='icon_head_down' alt="arrow" />
                                </button>
                                <ul>
                                    <li><button>Main</button></li>
                                    <li><button>Issues</button></li>
                                    <li><button>Files</button></li>
                                    <li><button>collaborators</button></li>
                                </ul>
                            </li>
                            <li><button>Settings</button></li>
                            <li><button>Project status</button></li>
                        </ul>
                    }
                </div>
            </div>
            <div className="publishFile">
                <SideLeft/>
                <SideRight/>
            </div>

            <div className = "project-view">
                {
                    switchTab(tabValue)
                } 
            </div>
        </div>
    </div>
    </>
    );
};

export default Project;