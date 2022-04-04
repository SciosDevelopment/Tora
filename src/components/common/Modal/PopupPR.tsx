import React from 'react'
import Draggable from 'react-draggable'
import iconPR from 'src/img/ico_pr_big.png'

const PopupPR = ({setIsShowPRPopup}) => {
    return (
        <Draggable>
            <div className="popupPR">
                <div className="title">Will you send this PR?</div>
                <div className="contentbox">
                    <div className="subText">
                        <div className="label">PR - APPLICANTS</div>
                        <p>Your code looks fine to me.. have you updated your package version?<br />
                        try npm update * in your turminal</p>
                    </div>
                    <div className="link">
                        <div className='label'>
                            <img src={iconPR} alt="icon" />
                            <b>PR Link</b>
                        </div>
                        <input type="text" />
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
                    <button className='btn_cancel' onClick={() => setIsShowPRPopup(false)}>Cancel</button>
                </div>
            </div>
        </Draggable>
    )
}

export default PopupPR
