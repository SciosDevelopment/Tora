import React, { useEffect, useState, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menuDot from '../../../img/img2/menu_dot.png';
import iconBranchSearch from '../../../img/img2/icon_branch_search.png';
import iconBranchArrowDownBlack from '../../../img/img2/icon_branch_arrow_down_black.png';
import iconBranchSearchNavy from '../../../img/img2/icon_branch_search_navy.png';
import iconArrowIssueTitle from '../../../img/img2/icon_arrow_issue_title.png';
import iconObjectiveAdd from '../../../img/img2/icon_objective_add.png';
import iconObjectiveMenu from '../../../img/img2/icon_objective_menu.png';
import iconIssueDown from '../../../img/img2/icon_issue_down.png';
import iconIssueRight from '../../../img/img2/icon_issue_right.png';
import iconIssueCoin from '../../../img/img2/icon_issue_coin.png';
import userSample from '../../../img/img2/user_sample.png';
import { Sortable, MultiDrag } from 'sortablejs';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';


const Issue2 = () => {

    const isMobile = useMediaQuery({ query:"(max-width:767px)" });
    const [isShowObjectivePopup, setIsShowObjectivePopup] = useState(false);
    const clickObjectivePopup = () => setIsShowObjectivePopup(isShowObjectivePopup ? false : true);
    const clickNavDepth1 = (e) => {
        if( e.target.parentElement.classList.value == 'on' ) {
            e.target.parentElement.classList.remove('on')
        }else{
            e.target.parentElement.classList.add('on')
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const items = document.getElementById('content');
        Sortable.create(items, {
            group: 'shared',
            multiDrag: true,
            selectedClass: "selected",
            animation: 150
        });
    }, []);


    return (
        <div className= "issue2">
            <div className="issuebox">
                <div className="titlebox">
                    <div className="left">
                        <button className='btn_objective' onClick={clickObjectivePopup}>
                            Objective
                            <img src={iconArrowIssueTitle} alt="objective" />
                        </button>
                        {
                            isShowObjectivePopup && 
                            <div className="objectivePopup innerShadow2">
                                <div className="wrap">
                                    <div className="searchbox">
                                        <input type="text" />
                                        <button className='btn_search'>
                                            <img src={iconBranchSearchNavy} alt="search" />
                                        </button>
                                    </div>
                                    <h5>Switch board</h5>
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
                                    <div className="btnbox">
                                        <button className='btn_confirm'>Create board</button>
                                        <button className='btn_del'>Delete board</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="right">
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <button><img src={iconBranchSearch} /></button>
                        </div>
                        <button className='btn_add'>
                            <img src={iconObjectiveAdd} alt="add" />
                        </button>
                        <button>
                            <img src={iconObjectiveMenu} alt="menu" />
                        </button>
                    </div>
                </div>{/* //titlebox */}

                <div className="contentbox">
                    <div className="barStyle leftBar">
                        <button>
                            <img src={iconIssueDown} alt="down" />
                            <p>Open</p>
                            <span>3</span>
                        </button>
                    </div>

                        
                    { !isMobile &&
                    <div className="content" id="content">
                        <div className="innerContent content_open">
                            <div className="head">
                                <div className="left">
                                    <button>
                                        <img src={iconIssueRight} alt="arrow" />
                                        Open
                                        <span>3</span>
                                    </button>
                                </div>
                                <div className="right">
                                    <button>
                                        <img src={iconObjectiveAdd} alt="arrow" />
                                    </button>
                                    <button>
                                        <img src={menuDot} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                    <div className="icon">
                                        <img src={iconIssueCoin} alt="coin" />
                                        <p>0.08</p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            API From users repos to fork ownerork owner
                                            API From users repos to fork owner
                                        </p>
                                        <div className="marks">
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                        </div>
                                        <div className="kind">
                                            <span className='red'>Bug</span>
                                            |
                                            <span className='violet'>일대일</span>
                                            |
                                            <span className='yellow'>주니어</span>
                                        </div>

                                        <img src={userSample} className='userMark' alt="user" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* // content_open */}

                        <div className="innerContent content_reviewing">
                            <div className="head">
                                <div className="left">
                                    <button>
                                        <img src={iconIssueRight} alt="arrow" />
                                        Reviewing
                                        <span>3</span>
                                    </button>
                                </div>
                                <div className="right"></div>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                    <div className="icon">
                                        <img src={iconIssueCoin} alt="coin" />
                                        <p>0.08</p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            API From users repos to fork ownerork owner
                                            API From users repos to fork owner
                                        </p>
                                        <div className="marks">
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                        </div>
                                        <div className="kind">
                                            <span className='red'>Bug</span>
                                            |
                                            <span className='violet'>일대일</span>
                                            |
                                            <span className='yellow'>주니어</span>
                                        </div>

                                        <img src={userSample} className='userMark' alt="user" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* // content_reviewing */}

                        <div className="innerContent content_closed">
                            <div className="head">
                                <div className="left">
                                    <button>
                                        <img src={iconIssueRight} alt="arrow" />
                                        Closed
                                        <span>3</span>
                                    </button>
                                </div>
                                <div className="right">
                                    <button>
                                        <img src={iconObjectiveAdd} alt="arrow" />
                                    </button>
                                    <button>
                                        <img src={menuDot} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                    <div className="icon">
                                        <img src={iconIssueCoin} alt="coin" />
                                        <p>0.08</p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            API From users repos to fork ownerork owner
                                            API From users repos to fork owner
                                        </p>
                                        <div className="marks">
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                        </div>
                                        <div className="kind">
                                            <span className='red'>Bug</span>
                                            |
                                            <span className='violet'>일대일</span>
                                            |
                                            <span className='yellow'>주니어</span>
                                        </div>

                                        <img src={userSample} className='userMark' alt="user" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* // content_closed */}

                        <div className="innerContent content_closed">
                            <div className="head">
                                <div className="left">
                                    <button>
                                        <img src={iconIssueRight} alt="arrow" />
                                        Closed
                                        <span>3</span>
                                    </button>
                                </div>
                                <div className="right">
                                    <button>
                                        <img src={iconObjectiveAdd} alt="arrow" />
                                    </button>
                                    <button>
                                        <img src={menuDot} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            <div className="body">
                                <div className="box">
                                    <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                    <div className="icon">
                                        <img src={iconIssueCoin} alt="coin" />
                                        <p>0.08</p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            API From users repos to fork ownerork owner
                                            API From users repos to fork owner
                                        </p>
                                        <div className="marks">
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                            <mark className='skillMark'>node.js</mark>
                                        </div>
                                        <div className="kind">
                                            <span className='red'>Bug</span>
                                            |
                                            <span className='violet'>일대일</span>
                                            |
                                            <span className='yellow'>주니어</span>
                                        </div>

                                        <img src={userSample} className='userMark' alt="user" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* // content_closed */}
                    </div>
                    }



                    {/* 모바일용 container */}
                    { isMobile &&
                        <div className="content">
                            <Slider {...settings}>
                                <div className="innerContent content_open">
                                    <div className="head">
                                        <div className="left">
                                            <button>
                                                <img src={iconIssueRight} alt="arrow" />
                                                Open
                                                <span>3</span>
                                            </button>
                                        </div>
                                        <div className="right">
                                            <button>
                                                <img src={iconObjectiveAdd} alt="arrow" />
                                            </button>
                                            <button>
                                                <img src={menuDot} alt="arrow" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="box">
                                            <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                            <div className="icon">
                                                <img src={iconIssueCoin} alt="coin" />
                                                <p>0.08</p>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    API From users repos to fork ownerork owner
                                                    API From users repos to fork owner
                                                </p>
                                                <div className="marks">
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                </div>
                                                <div className="kind">
                                                    <span className='red'>Bug</span>
                                                    |
                                                    <span className='violet'>일대일</span>
                                                    |
                                                    <span className='yellow'>주니어</span>
                                                </div>

                                                <img src={userSample} className='userMark' alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* // content_open */}

                                <div className="innerContent content_reviewing">
                                    <div className="head">
                                        <div className="left">
                                            <button>
                                                <img src={iconIssueRight} alt="arrow" />
                                                Reviewing
                                                <span>3</span>
                                            </button>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                    <div className="body">
                                        <div className="box">
                                            <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                            <div className="icon">
                                                <img src={iconIssueCoin} alt="coin" />
                                                <p>0.08</p>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    API From users repos to fork ownerork owner
                                                    API From users repos to fork owner
                                                </p>
                                                <div className="marks">
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                </div>
                                                <div className="kind">
                                                    <span className='red'>Bug</span>
                                                    |
                                                    <span className='violet'>일대일</span>
                                                    |
                                                    <span className='yellow'>주니어</span>
                                                </div>

                                                <img src={userSample} className='userMark' alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* // content_reviewing */}

                                <div className="innerContent content_closed">
                                    <div className="head">
                                        <div className="left">
                                            <button>
                                                <img src={iconIssueRight} alt="arrow" />
                                                Closed
                                                <span>3</span>
                                            </button>
                                        </div>
                                        <div className="right">
                                            <button>
                                                <img src={iconObjectiveAdd} alt="arrow" />
                                            </button>
                                            <button>
                                                <img src={menuDot} alt="arrow" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="box">
                                            <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                            <div className="icon">
                                                <img src={iconIssueCoin} alt="coin" />
                                                <p>0.08</p>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    API From users repos to fork ownerork owner
                                                    API From users repos to fork owner
                                                </p>
                                                <div className="marks">
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                </div>
                                                <div className="kind">
                                                    <span className='red'>Bug</span>
                                                    |
                                                    <span className='violet'>일대일</span>
                                                    |
                                                    <span className='yellow'>주니어</span>
                                                </div>

                                                <img src={userSample} className='userMark' alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* // content_closed */}

                                <div className="innerContent content_closed">
                                    <div className="head">
                                        <div className="left">
                                            <button>
                                                <img src={iconIssueRight} alt="arrow" />
                                                Closed
                                                <span>3</span>
                                            </button>
                                        </div>
                                        <div className="right">
                                            <button>
                                                <img src={iconObjectiveAdd} alt="arrow" />
                                            </button>
                                            <button>
                                                <img src={menuDot} alt="arrow" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="box">
                                            <p className="date">2021.09.10 ~ 2021. 11.01</p>
                                            <div className="icon">
                                                <img src={iconIssueCoin} alt="coin" />
                                                <p>0.08</p>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    API From users repos to fork ownerork owner
                                                    API From users repos to fork owner
                                                </p>
                                                <div className="marks">
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                    <mark className='skillMark'>node.js</mark>
                                                </div>
                                                <div className="kind">
                                                    <span className='red'>Bug</span>
                                                    |
                                                    <span className='violet'>일대일</span>
                                                    |
                                                    <span className='yellow'>주니어</span>
                                                </div>

                                                <img src={userSample} className='userMark' alt="user" />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* // content_closed */}
                            </Slider>
                        </div>
                    }


                    <div className="barStyle rightBar">
                        <button className='btn_add'>
                            <img src={iconObjectiveAdd} alt="add" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issue2;