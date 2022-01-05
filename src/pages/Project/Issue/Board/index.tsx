import React, {useEffect} from 'react';

import menuDot from '../../../../img/img2/menu_dot.png';
import iconIssueDown from '../../../../img/img2/icon_issue_down.png';
import iconIssueRight from '../../../../img/img2/icon_issue_right.png';
import iconObjectiveAdd from '../../../../img/img2/icon_objective_add.png';

import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import { Sortable, MultiDrag } from 'sortablejs';
import IssueBoardItem from './Item';

const IssueBoard = () => {

    const isMobile = useMediaQuery({ query:"(max-width:767px)" });

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
        <>
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
                        <IssueBoardItem/>
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
                        <IssueBoardItem/>
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
                        <IssueBoardItem/>
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
                        <IssueBoardItem/>
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
                                <IssueBoardItem/>
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
                                <IssueBoardItem/>
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
                                <IssueBoardItem/>
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
                                <IssueBoardItem/>
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
        </>
    );
};

export default IssueBoard;