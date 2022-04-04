import React, { useState } from 'react'
import Draggable from 'react-draggable'
import iconPR from 'src/img/ico_pr_big.png'
import userSample2 from 'src/img/user_sample2.png'
import iconBitcoin from 'src/img/icon_bitcoin.png'
import iconStar from 'src/img/icon_star.png'
import selectUp from 'src/img/select_up.png'

const PopupComplete = ({setIsShowCompletePopup}) => {

    const [showFakeSelect, setShowFakeSelect] = useState(false)
    const clickFakeSelect = () => setShowFakeSelect(showFakeSelect ? false : true)

    return (
        <Draggable>
            <div className="popupPR popupComplete">
                <div className="title">Do you want to complete this PR?</div>
                <div className="contentbox">
                    <div className="completebox">
                        <div className="td_text">
                            <img src={userSample2} alt="user" />
                            <div className="text">
                                <h6>Nicolas Serrano</h6>
                                <p>
                                    Your code looks fine to me.. have you updated your package version?
                                    try npm update * in your turminal
                                </p>
                                <div className="link">
                                    <img src={iconPR} alt="icon" />
                                    <span>PR : </span>
                                    <a href="www.github.com/fejios/dfkope2312321" target="_blank">
                                        www.github.com/fejios/dfkope2312321
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className={`fakeSelect ${showFakeSelect ? '' : 'on'}`} onClick={clickFakeSelect}>
                                <button>
                                    <div className="left">
                                        <span>1. Bounty: </span>
                                        <div className="coin">
                                            <img src={iconBitcoin} alt="coin" />
                                            <span>0.000976</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="grade">
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                        </div>
                                    </div>
                                </button>
                                <button>
                                    <div className="left">
                                        <span>2. Bounty: </span>
                                        <div className="coin">
                                            <img src={iconBitcoin} alt="coin" />
                                            <span>0.000976</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="grade">
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                        </div>
                                    </div>
                                </button>
                                <button>
                                    <div className="left">
                                        <span>3. Bounty: </span>
                                        <div className="coin">
                                            <img src={iconBitcoin} alt="coin" />
                                            <span>0.000976</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="grade">
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                            <img src={iconStar} alt="star" />
                                        </div>
                                    </div>
                                </button>
                                <img src={selectUp} className="selectUp" alt="select" />
                            </div>
                        </div>

                    </div>
                    <div className="agree">
                        <label>
                            <input type="checkbox" />
                            <span>I understand that this is an application and I should wait for approval from the funder before starting work.</span>
                        </label>
                        <label>
                            <input type="checkbox" />
                            <span>I agree to keep the funder informed of my progress every few days.</span>
                        </label>
                    </div>
                </div>
                <div className="btnbox">
                    <button className='btn_send'>Submit Send</button>
                    <button className='btn_cancel' onClick={() => setIsShowCompletePopup(false)}>Cancel</button>
                </div>
            </div>
        </Draggable>
    )
}

export default PopupComplete
