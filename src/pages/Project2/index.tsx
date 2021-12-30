import React, {useEffect, useState} from 'react';

import {history} from '../../configureStore'

import iconArrowExpend from '../../img/img2/icon_arrow_expend.png';
import menuDot from '../../img/img2/menu_dot.png';
import iconHeadUp from '../../img/img2/icon_head_up.png';
import iconHeadDown from '../../img/img2/icon_head_down.png';
import iconLeftStar from '../../img/img2/icon_left_star.png';
import iconLeftLive from '../../img/img2/icon_left_live.png';
import iconLeftShare from '../../img/img2/icon_left_share.png';
import iconPlus from '../../img/img2/icon_plus.png';
import imgSample2 from '../../img/img2/img_sample2.png';
import iconGit from '../../img/img2/icon_git.png';
import iconFacebook from '../../img/img2/icon_facebook.png';
import iconYoutube from '../../img/img2/icon_youtube.png';
import iconClone from '../../img/img2/icon_clone.png';
import iconBranchAdd from '../../img/img2/icon_branch_add.png';
import iconBranchDown from '../../img/img2/icon_branch_down.png';
import iconBranchSearch from '../../img/img2/icon_branch_search.png';
import iconBranchClose from '../../img/img2/icon_branch_close.png';
import iconBranchShare from '../../img/img2/icon_branch_share.png';
import iconBranchArrowDownBlack from '../../img/img2/icon_branch_arrow_down_black.png';
import iconBranchArrowRightBlack from '../../img/img2/icon_branch_arrow_right_black.png';
import iconBranchSearchNavy from '../../img/img2/icon_branch_search_navy.png';
import arrowCode from '../../img/img2/arrow_code.png';

import MainView2 from './MainView2/MainView2'
import Issue2 from './Issue2/Issue2'

const Project2 = (props) => {
    const [isShowPopupProject, setIsShowPopupProject] = useState(false);
    const [isShowAsideMenu, setIsShowAsideMenu] = useState(false);
    const [isShowCodePopup, setIsShowCodePopup] = useState(false);
    const [isShowLeftSharePopup, setIsShowLeftSharePopup] = useState(false);
    const [isShowLeftFilesPopup, setIsShowLeftFilesPopup] = useState(false);
    const [isShowBranchesPopup, setIsShowBranchesPopup] = useState(false);
    const clickBtnMenu = () => setIsShowAsideMenu(isShowAsideMenu ? false : true);
    const clickBtnCode = () => setIsShowCodePopup(isShowCodePopup ? false : true);
    const clickLeftShare = () => setIsShowLeftSharePopup(true);
    const clickLeftFiles = () => setIsShowLeftFilesPopup(true);
    const clickLeftFilesPopupClose = () => setIsShowLeftFilesPopup(false);
    const clickBranch = () => setIsShowBranchesPopup(isShowBranchesPopup ? false: true);

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
            case "main2": 
                return token_.Main
            case "issues2": 
                return token_.Issues
            default:
                return token_.Main
        }
    }
    const changeURL = async(token) => history.push(`/project2/${token}`)
    useEffect(()=>{setTabValue(setToken())}, [token])

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "tab-mainview2">
                        <MainView2/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "tab-issue2">
                        <Issue2/>
                    </div>
                )
            }
        }
    }

    return (
    <>
    <div className= "project2">
        <div className= "project2-tab">
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
                    <div className = {tabValue === 0 ? `btnbox-open` : `btnbox-close` } onClick = {()=>changeURL('main2')}>Main</div>
                    <div className = {tabValue === 1 ? `btnbox-open` : `btnbox-close` } onClick = {()=>changeURL('issues2')}>Issues</div>
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

                    {/*---------------------------------left side item----------------------------------------*/}

            <div className="publishFile">
                <div className="leftItems">
                    <div className="wrap">
                        <button>
                            <img src={iconLeftStar} alt="star" />
                            <p>320</p>
                        </button>
                        <button onClick={clickLeftFiles}>
                            <img src={iconLeftLive} alt="files" />
                            <p>Files</p>
                        </button>
                        <button>
                            <img src={iconLeftShare} alt="IDE" />
                            <p>IDE</p>
                        </button>
                        <button>
                            <img src={iconLeftShare} alt="채팅" />
                            <p>채팅</p>
                        </button>
                        <button>
                            <img src={iconLeftLive} alt="북마크" />
                            <p>북마크</p>
                        </button>
                        <button onClick={clickLeftShare}>
                            <img src={iconLeftLive} alt="공유" />
                            <p>공유</p>
                        </button>

                        {
                            isShowLeftFilesPopup && 
                            <div className="file_popup">
                                <div className="wrap">
                                    <div className="head">
                                        <div className="left">
                                            <img src={iconBranchShare} alt="share" />
                                            <button onClick={clickBranch}>Master</button>
                                            <img src={iconBranchDown} alt="down" />
                                            {
                                                isShowBranchesPopup &&
                                                <div className="branchesPopup innerShadow2">
                                                    <div className="wrap">
                                                        <div className="searchbox">
                                                            <input type="text" />
                                                            <button>
                                                                <img src={iconBranchSearchNavy} alt="search" />
                                                            </button>
                                                        </div>
                                                        <h5>Branches</h5>
                                                        <div className="items innerShadow2">
                                                            <button>
                                                                <img src={iconBranchArrowDownBlack} alt="check" />
                                                                master
                                                            </button>
                                                            <button>
                                                                master1
                                                            </button>
                                                            <button>
                                                                master2
                                                            </button>
                                                            <button>
                                                                master3
                                                            </button>
                                                            <button>
                                                                master4
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div className="right">
                                            <button><img src={iconBranchAdd} alt="add" /></button>
                                            <button><img src={iconBranchSearch} alt="search" /></button>
                                            <button onClick={clickLeftFilesPopupClose}><img src={iconBranchClose} alt="close" /></button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <button className="line">
                                            <img src={iconLeftLive} alt="file" className="icon_size1" />
                                            <b>Local</b>
                                            <img src={iconBranchArrowDownBlack} alt="arrow" />
                                        </button>
                                        <button className="line indent1">
                                            <img src={iconBranchArrowRightBlack} alt="arrow" />
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                        <button className="line indent2">
                                            <img src={iconBranchArrowDownBlack} alt="arrow" />
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                        <button className="line indent2">
                                            <span className="rect"></span>
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>{/* // leftItems */}
                

                    {/*---------------------------------right side item----------------------------------------*/}
                <div className="rightItems">
                    <div className="btn_code_wrap">
                        <button className='btn_code' onClick={clickBtnCode}>
                            Code
                            <img src={arrowCode} alt="code" />
                        </button>
                        {
                            isShowCodePopup && 
                            <div className="code_popup innerShadow">
                                <div className="clonebox">
                                    <div className="left">
                                        <h5>Clone HTTPS</h5>
                                        <input type="text" className='innerShadow'   value="git@torapod.com:fjeioj/프로젝트이름" />
                                    </div>
                                    <button className='btn_clone'>
                                        <img src={iconClone} alt="clone" />
                                    </button>
                                </div>
                                <div className="clonebox">
                                    <div className="left">
                                        <h5>Clone SSH</h5>
                                        <input type="text" className='innerShadow'  value="git@torapod.com:fjeioj/프로젝트이름" />
                                    </div>
                                    <button className='btn_clone'>
                                        <img src={iconClone} alt="clone" />
                                    </button>
                                </div>
                                <div className="clonebox">
                                    <div className="left">
                                        <h5>Download ZIP</h5>
                                    </div>
                                    <button className='btn_clone'>
                                        <img src={iconClone} alt="clone" />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="box">
                        <h4>Description</h4>
                        <p>
                            provided residency and ellowship matching servprovided residency and ellowship matching serv
                        </p>
                    </div>
                    <div className="box">
                        <h4>Information</h4>
                        <ul className='items_information'>
                            <li>23 Commit</li>
                            <li>Issue : 300</li>
                            <li>6 Branch</li>
                            <li>184 KB Storage</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h4>Language</h4>
                        <mark className='skillMark'>node.js</mark>
                        <mark className='skillMark'>django</mark>
                    </div>
                    <div className="box">
                        <h4>License</h4>
                        <p>BSD 2-Clause License</p>
                    </div>
                    <div className="box">
                        <h4>Visitors     today  /  total</h4>
                        <p className='item_visitors'>230 / 1200</p>
                    </div>
                    <div className="box">
                        <h4>Contributors</h4>
                        <div className="user_items">
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                            <div className="img"><img src={imgSample2} alt="user" /></div>
                        </div>
                        <div className="number">
                            <img src={iconPlus} alt="user" />
                            <span>7</span>
                        </div>
                    </div>
                    <div className="box btmIcon">
                        <button><img src={iconGit} alt="git" /></button>
                        <button><img src={iconFacebook} alt="facebook" /></button>
                        <button><img src={iconYoutube} alt="youtube" /></button>
                    </div>
                </div>{/* // rightItems */}
            </div>{/* // publishFile */}

            <div className = "project2-view">
                {
                    switchTab(tabValue)
                } 
            </div>
        </div>
    </div>
    </>
    );
};

export default Project2;