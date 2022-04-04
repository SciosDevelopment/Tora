import React from 'react'
import Draggable from 'react-draggable'

const PopupStart = ({setIsShowStartPopup}) => {
    return (
        <Draggable>
            <div className="popupPR popupStart">
                <div className="subTitle">
                Please provide action plans and initial questions about the issue by email.<br />
(Your answer will be reflected in the comments on the Github issue.)
                </div>
                <div className="contentbox">
                    <textarea placeholder='What steps do you need to perform to complete this task? (At least 30 characters)'></textarea>

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
                    <button className='btn_send'>Send</button>
                    <button className='btn_cancel' onClick={() => setIsShowStartPopup(false)}>Cancel</button>
                </div>
            </div>
        </Draggable>
    )
}

export default PopupStart
