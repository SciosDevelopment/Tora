import React from 'react'
import './style/Maintext.scss'
import Profile from '../../../../img/profile3.png'
import Option from '../../../../img/modify.png'
/* contents markdown부분 참조 : https://velog.io/@alskt0419/React-markdown-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EA%B8%B0 */

const BlogDetailMaintext = () => {
    return (
        <div className = "Blog-Detail-maintext-main">
            <div className = "Blog-Detail-maintext-top">
                    <div className = "Blog-Detail-maintext-title">
                        <p>this is title</p>
                    </div>

                    <div className = "Blog-Detail-maintext-tag">
                        <p>ansivble-template</p>
                        <p>swift</p>
                        <p>node.js</p>
                        <p>django</p>
                    </div>

                    <div className = "Blog-Detail-maintext-option">
                        <img src={Option} alt=""/>
                    </div>

                    <div className = "Blog-Detail-maintext-info">                    
                        <div className = "Blog-Detail-maintext-info-number">
                            <div className = "Blog-Detail-maintext-info-hits">
                                <p>조회수 100</p>
                            </div>
                            <div className = "Blog-Detail-maintext-info-comments">
                                <p>댓글 6</p>
                            </div>
                            <div className = "Blog-Detail-maintext-info-date">
                                <p>2020.10.23</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className = "Blog-Detail-maintext-contents">
                this is contents
            </div>
            <div className = "Blog-Detail-view-profile">
                <img src = {Profile}/>
                <p>Sarah</p>
            </div>
        </div>
    )
}

export default BlogDetailMaintext