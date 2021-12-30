import React from 'react';

import iconBitcoin from '../../../img/img2/icon_bitcoin.png';
import iconStar from '../../../img/img2/icon_star.png';
import iconPerson from '../../../img/img2/icon_person.png';
import iconFeedUser from '../../../img/img2/icon_feed_user.png';
import iconFeedCheck from '../../../img/img2/icon_feed_check.png';
import iconFeedEyes from '../../../img/img2/icon_feed_eyes.png';
import userSample from '../../../img/img2/user_sample.png';
import feedLine from '../../../img/img2/feed_line.png';
import iconMenu from '../../../img/img2/icon_menu2.png';
import iconSelect2 from '../../../img/img2/ic_select2.png';



const MainView2 = () => {
    const itemArr = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5}
    ]

    const ItemComponent = () => {
        return  (
            <>{
            itemArr.map((e,i)=>
                <div className="item">
                    <div className="iconbox">
                        <img src={iconBitcoin} alt="coin" />
                        <p>112</p>
                    </div>
                    <div className="textbox">
                        <div className="text1">
                            <span>API From users repos to fork owner</span>
                            <mark className='skillMark'>node.js</mark>
                            <mark className='skillMark'>django</mark>
                        </div>
                        <div className="text2">
                            I'm working with BootstrapVue. I want to splice my inputs in my child.vue after clicking on a button in my parent.vue. But every time I delete something in my parent.vue - which I can promise that it'
                        </div>
                    </div>
                    <div className="num1box">32</div>
                    <div className="num2box">1234</div>
                    <div className="gradebox">
                        <img src={iconStar} alt="star" />
                        <p>320</p>
                    </div>
                    <div className="userbox">
                        <p>Oct 21 at 10:55</p>
                        <img src={iconPerson} alt="user" />
                    </div>
                </div>
            )
            }</>
        )
    }

    return (
        <div className="MainView2">
            <div className="publishFile">
                <div className="titlebox innerShadow2">
                    <div className="top_title">프로젝트 제목</div>
                    <div className="btm">
                        <button>on Select Publish File</button>
                    </div>
                </div>{/* // titlebox */}
                <div className="feedbox innerShadow2">
                    <div className="top_title">Project feed</div>
                    <div className="btm">
                        <div className="line">
                            <img src={iconFeedUser} alt="icon user" />
                            <img src={userSample} className='img_user_sample' alt="user" />
                            <p>Nicolas Serrano가 참여하였습니다.
                                <span className="date">Oct 21 at 12:56</span>
                            </p>
                        </div>
                        <p><img src={feedLine} alt="line" /></p>
                        <div className="line">
                            <img src={iconFeedCheck} alt="icon check" />
                            <img src={userSample} className='img_user_sample' alt="user" />
                            <p>added the <mark>new-bug</mark>
                                <span className="date">Oct 21 at 12:56</span>
                            </p>
                        </div>
                        <p><img src={feedLine} alt="line" /></p>
                        <div className="line"> 
                            <img src={iconFeedEyes} alt="icon eyes" />
                            <img src={userSample} className='img_user_sample' alt="user" />
                            <p>Nicolas Serrano가 풀리퀘스트 신청으로 요청
                            <span className="date">Oct 21 at 12:56</span>
                            </p>
                        </div>
                        <p><img src={feedLine} alt="line" /></p>
                        <div className="line">
                            <img src={iconFeedCheck} alt="icon check" />
                            <img src={userSample} className='img_user_sample' alt="user" />
                            <p>added the <mark>new-bug</mark>
                                <span className="date">Oct 21 at 12:56</span>
                            </p>
                        </div>
                    </div>
                </div>{/* // feedbox */}
            </div>
            <div className="coinContent">
                <div className="head">
                    <div className="left">
                        <button>All</button>
                        <button>Open</button>
                        <button>Closed</button>
                    </div>
                    <div className="right">
                        <select className="moreTag" style={{backgroundImage:`url(${iconSelect2})`}}>
                            <option>More Tag</option>
                            <option>More Tag1</option>
                            <option>More Tag2</option>
                        </select>
                        <button className='btn_menu'><img src={iconMenu}  alt="menu" /></button>
                    </div>
                </div>
                <div className="coinContentBody">
                    <ItemComponent />
                </div>
            </div>{/* //coinContent */}

            <div className="readme innerShadow2">
                <div className="head">README.md</div>
                <div className="body">
                    <h4>Overview</h4>
                    <p>
                        For nearly 40 years, SF Match has provided residency and fellowship matching services in various specialties and subspecialties across the spectrum of medicine, including ophthalmology, plastic surgery, movement disorders, critical care anesthesiology, microsurgery, and many others. They work to connect people with organizations using a proven applicant review and ranking methodology as well as a centralized application service that streamlines the processing, distribution, and review of applications with a simple user interface.
                    </p>
                    <div className="h50"></div>
                    <h4>Usage</h4>
                    <p>
                        Use any computer and a car charger to AC outlet converter so that it's powered by your car. Run Honeyminer on the computer. Download this node app. Install dependecies one using npm aka 'npm install send-crypto'. then run the app using 'npm run'.
                    </p>
                    <p>
                        For nearly 40 years, SF Match has provided residency and fellowship matching services in various specialties and subspecialties across the spectrum of medicine, including ophthalmology, plastic surgery, movement disorders, critical care anesthesiology, microsurgery, and many others. They work to connect people with organizations using a proven applicant review and ranking methodology as well as a centralized application service that streamlines the processing, distribution, and review of applications with a simple user interface.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainView2;