import React from 'react';
import './style/BlogDetailMaintext.scss'
import Modify from '../../../../img/modify.png'
import Contents from './Contents/BlogDetailContents'
import Profile from '../../../../img/profile3.png'

const BlogDetailMaintext = () => {
    return (
        <div className = "Blog-Detail-view-title">
            <div className = "Blog-Detail-view-main">
                <div className = "Blog-Detail-view-text">
                    <div className = "Blog-Detail-view-title-view">
                        <div className = "Blog-Detail-view-title-main">
                            <p>웹 페이지가 동작하는 원리</p>
                        </div>
                        <div className = "Blog-Detail-view-title-text">
                            <p>해당 이미지는 dissolve 효과를 셰이더로 구현한것이며
                                셰이더를 조금만 익혀도 쉽게 만들 수 있는 효과입니다.</p>
                        </div>
                    </div>
                    <div className = "Blog-Detail-view-maintext">
                        <div className = "Blog-Detail-view-maintext-title">
                            <p>MPA</p>
                        </div>
                        <div className = "Blog-Detail-view-maintext-text">
                            <p>클라이언트의 요청(url)에 따라 적절히 응답해주는 프로그램
                                응답은
                                웹 구성요소(html, css, js)일수도 있고
                                DB의 데이터일수도 있는데,
                                응답에 따라 웹서버는 2가지로 분류할 수 있다.
                                프론트 서버
                                정적 or 동적인 페이지를 응답하기 위한 서버
                                웹이 비대해지면
                                서버의 역할 분담, 그리고 보안을 위해
                                WAS 와 프론트 서버로 나누기도 한다.
                                (추후 WAS와 프론트 서버의 차이점에 대해 올릴 예정)
                                백엔드 서버(or API 서버)
                                사용자의 요청을 받았을 때 DB에서 적절한 데이터를 가져와
                                응답하기 위한 서버</p>
                        </div>
                    </div>
                    <div className = "Blog-Detail-view-maintext">
                        <div className = "Blog-Detail-view-maintext-title">
                            <p>SPA</p>
                        </div>
                        <div className = "Blog-Detail-view-maintext-text">
                            <p>클라이언트의 요청(url)에 따라 적절히 응답해주는 프로그램
                                응답은
                                웹 구성요소(html, css, js)일수도 있고
                                DB의 데이터일수도 있는데,
                                응답에 따라 웹서버는 2가지로 분류할 수 있다.
                                프론트 서버
                                정적 or 동적인 페이지를 응답하기 위한 서버
                                웹이 비대해지면
                                서버의 역할 분담, 그리고 보안을 위해
                                WAS 와 프론트 서버로 나누기도 한다.
                                (추후 WAS와 프론트 서버의 차이점에 대해 올릴 예정)
                                백엔드 서버(or API 서버)
                                사용자의 요청을 받았을 때 DB에서 적절한 데이터를 가져와
                                응답하기 위한 서버</p>
                        </div>
                    </div>
                </div>
                

                <div className = "Blog-Detail-view-info">                    
                    <div className = "Blog-Detail-view-tag">
                        <p>ansivble-template</p>
                        <p>swift</p>
                        <p>node.js</p>
                        <p>django</p>
                    </div>
                    <div className = "Blog-Detail-view-number">
                        <div className = "Blog-Detail-view-hits">
                            <p>조회수 100</p>
                        </div>
                        <div className = "Blog-Detail-view-comments">
                            <p>댓글 6</p>
                        </div>
                        <div className = "Blog-Detail-view-date">
                            <p>2020.10.23</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "Blog-Detail-view-contents-profile">
                <div className = "Blog-Detail-view-contents">
                    <Contents/>
                </div>
                <div className = "Blog-Detail-view-profile">
                    <img src = {Profile}/>
                    <p>Sarah</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailMaintext;