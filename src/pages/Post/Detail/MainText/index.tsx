import React from 'react';
import './style/PostMainText.scss'
import Profile from '../../../../img/profile4.png'
import Option from '../../../../img/modify.png'

const PostMainText = () => {
    return (
        <div className="Post-Detail-maintext-main">
            <div className = "Post-Detail-maintext-top">
                    <div className = "Post-Detail-maintext-title">
                        <p>this is title</p>
                    </div>

                    <div className = "Post-Detail-maintext-tag">
                        <p>ansivble-template</p>
                        <p>swift</p>
                        <p>node.js</p>
                        <p>django</p>
                    </div>

                    <div className = "Post-Detail-maintext-option">
                        <img src={Option} alt=""/>
                    </div>

                    <div className = "Post-Detail-maintext-info">                    
                        <div className = "Post-Detail-maintext-info-number">
                            <div className = "Post-Detail-maintext-info-hits">
                                <p>조회수 100</p>
                            </div>
                            <div className = "Post-Detail-maintext-info-comments">
                                <p>댓글 6</p>
                            </div>
                            <div className = "Post-Detail-maintext-info-date">
                                <p>2020.10.23</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className = "Post-Detail-maintext-contents">
                <p>I'd like to have an aggregated view (or an alert) when some recipients in my contact list don't receive any of the emails my app sents. Is this possible?</p>
                <p>I checked on the alert thing in the docs but it doesn't seem to do what I need. Although this seems like a pretty common need and there may not be necessary to setup webhooks and own app logic to handle this, wouldn't it?</p>
                <p>Thanks</p>
            </div>
          
            <div className = "Post-Detail-maintext-profile">
                <img src = {Profile}/>
                <p>sarah</p>
            </div>
        
        </div>
    );
};

export default PostMainText