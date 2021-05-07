import React from 'react'
import './style/ServiceDetailItem.scss'
import modify from '../../../../img/modify.png'
import commentitem from '../../../../img/serviceitem.png'

const ServiceDetailItem = () => {
    return (
        <div className = "Service-detail-main">
            <div className = "Service-detail-title">
                <p>Welcome to the Tora Help center</p>
            </div>
            <div className = "Service-detail-view">
                <div className = "Service-detail-tab">
                    <p>Asking</p>
                    <p>Answering</p>
                    <p>My Account</p>
                    <p>Our model</p>
                    <p>Tora Jobs</p>
                </div>
                <div className = "Service-detail-modify">
                    <img src = {modify}/>
                </div>
                <div className = "Service-detail-ask">
                    <p>What types of questions should I avoid asking?</p>
                </div>
                <div className = "Service-detail-ask-text">
                    <p>How do I write a good answer?</p>
                    <p>What does it mean when an answer is "accepted"?</p>
                    <p>Why and how are some answers deleted?</p>
                    <p>Why are answers no longer being accepted from my account?</p>
                    <p>How to reference material written by others</p>
                </div>
                <div className = "Service-detail-guide">
                    <div className = "Service-detail-guide-text">
                        <p>이러한 방법으로 해결되었습니다.</p>
                    </div>
                    <div className = "Service-detail-guide-date">
                        <p>2020.10.23</p>
                    </div>
                </div>
                <div className = "Service-detail-comment">
                    <div className = "Service-detail-comment-item">
                        <img src = {commentitem}/>  
                    </div>
                    <div className = "Service-detail-comment-text">
                        <p>댓글 추가</p>
                    </div>
                    <div className = "Service-detail-comment-button">
                    <input type='submit' value="Comment"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailItem