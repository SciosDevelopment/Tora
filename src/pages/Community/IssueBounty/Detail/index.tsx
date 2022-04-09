import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from '../../../../components/common/Header/Header'
import GoTop from '../../../../components/common/Header/GoTop'
import Footer from '../../../../components/common/Footer'
import iconGit from 'src/img/icon_git.png'
import iconFacebook from 'src/img/icon_facebook.png'
import iconYoutube from 'src/img/icon_youtube.png'
import iconBitcoin from 'src/img/icon_bitcoin.png'
import iconX from 'src/img/icon_x.png'
import iconUser2 from 'src/img/icon_user2.png'
import iconShare from 'src/img/icon_share.png'
import iconEmail from 'src/img/icon_email.png'
import iconLogoMini2 from 'src/img/icon_logo_mini2.png'
import iconCommitUser from 'src/img/icon_commit_user.png'
import iconCommitView from 'src/img/icon_commit_view.png'
import iconCommitModify from 'src/img/icon_commit_modify.png'
import iconCheck from 'src/img/icon_check.png'
import menuDot from 'src/img/menu_dot.png'
import imgOpensource from 'src/img/img_opensource.png'
import iconPR from 'src/img/ico_pr.png'
import userSample from 'src/img/user_sample.png'
import userSample2 from 'src/img/user_sample2.png'
import iconStar from 'src/img/icon_star.png'
import iconPerson from 'src/img/icon_person.png'
import Pagination from 'src/components/common/Pagination'
import CurrentTopic from 'src/components/common/CurrentTopic'
import IssueInfoSidebar from './InfoSidebar'
import PopupComplete from 'src/components/common/Modal/PopupComplete'
import PopupPR from 'src/components/common/Modal/PopupPR'
// import PopupConfirm from '../../components/popup/PopupConfirm'
// import PopupPR from '../../components/popup/PopupPR'
// import PopupStart from '../../components/popup/PopupStart'
// import PopupComplete from '../../components/popup/PopupComplete'

function IssueDetail() {
    const [isShowPopupProject, setIsShowPopupProject] = useState(false)
    const [isShowAsideMenu, setIsShowAsideMenu] = useState(false)
    const [isShowLeftSharePopup, setIsShowLeftSharePopup] = useState(false)
    const [isShowLeftFilesPopup, setIsShowLeftFilesPopup] = useState(false)
    const [isShowBranchesPopup, setIsShowBranchesPopup] = useState(false)
    const [isShowPRPopup, setIsShowPRPopup] = useState(false)
    const [isShowStartPopup, setIsShowStartPopup] = useState(false)
    const [isShowCompletePopup, setIsShowCompletePopup] = useState(false)
    const [isShowProfilePopup, setIsShowProfilePopup] = useState(false)
    
    const clickSubmitPR = () => setIsShowPRPopup(true)
    const clickSubmitStartPR = () => setIsShowStartPopup(true)
    const clickSubmitCompletePR = () => setIsShowCompletePopup(true)
    const clickBtnMenu = () => setIsShowAsideMenu(isShowAsideMenu ? false : true)
    const clickLeftShare = () => setIsShowLeftSharePopup(true)
    const clickLeftFilesPopupClose = () => setIsShowLeftFilesPopup(false)
    const clickBranch = () => setIsShowBranchesPopup(isShowBranchesPopup ? false: true)
    const clickProfileMenu = () => setIsShowProfilePopup(isShowProfilePopup ? false: true)

    const limit = 2
    const [IssueList, setIssueList] = useState([{id:1}, {id:2}, {id:3}, {id:4}, {id:5}])
    const [curPage, setCurPage] = useState(1)
    const offset = (curPage - 1) * limit

    const ItemComponent = () => {
        return(<>
            {IssueList.slice(offset, offset+limit).map((e,i) => (
                <div className="item">
                    <div className="iconbox">
                        <img src={iconBitcoin} alt="coin"/>
                        <p>{e.id}</p>
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
                        <img src={iconStar} alt="star"/>
                        <p>320</p>
                    </div>
                    <div className="userbox">
                        <p>Oct 21 at 10:55</p>
                        <img src={iconPerson} alt="user"/>
                    </div>
                </div>
                )
            )}
            </>
        )
    }


    return (<>
        <Header setIsShowPopupProject={setIsShowPopupProject}/>

        <div className="maxWrap">
            <div className="boardCotnent">
                <div className="rightItems">
                    <div className="box1">
                        <IssueInfoSidebar/>
                    </div>
                    
                    <div className="box2">
                        <CurrentTopic/>
                    </div>
                </div>{/*// rightItems */}

                <div className="top_title">
                    <div className="left">
                        <div className="icon">
                            <img src={iconX} alt=""/>
                            <p>112</p>
                        </div>
                        <h3>API from users repos to fork owner</h3>
                        <mark className='skillMark'>node.js</mark>
                        <mark className='skillMark'>django</mark>
                        <mark className='skillMark mark_red'>design</mark>
                    </div>
                    <div className="right">
                        <p>Oct 21 at 08:55</p>
                        <button>Open</button>
                    </div>
                </div>
                <div className="bountybox">
                    <ul>
                        <li>
                            <div className="left">1. Bounty : </div>
                            <div className="right">
                                <img src={iconBitcoin} alt="coin"/>
                                <span>0.2323</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">2. Bounty : </div>
                            <div className="right">
                                <img src={iconBitcoin} alt="coin"/>
                                <span>0.2323</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">3. Bounty : </div>
                            <div className="right">
                                <span>ToraPod 프리미엄  1</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="detailbox">
                    <h4>Description</h4>
                    <div className="imgbox">
                        <img src={imgOpensource} alt="open source"/>
                    </div>
                    <div className="textbox">
                        this is Issue's detail. <br/>
                        this is Issue's detail. <br/>
                        this is Issue's detail. <br/>
                        this is Issue's detail. <br/>
                    </div>
                </div>{/*// detailbox */}

                <div className="textUser">
                    <div className="left">
                        <img src={iconUser2} alt="user"/>
                        <div className="text">
                            <h6>Nicolas Serrano</h6>
                            <p>I live in France as a programming language and specialize in JavaScript.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <button onClick={clickProfileMenu}>
                                <img src={menuDot} alt="dot"/>
                            </button>
                            {
                                isShowProfilePopup && 
                                <ul className="depth2">
                                    <li><button>Edit</button></li>
                                    <li><button>Delete</button></li>
                                </ul>
                            }
                        </div>
                        <div className="btm">
                            <button>
                                <img src={iconShare} alt="share"/>
                            </button>
                            <button>
                                <img src={iconEmail} alt="email"/>
                            </button>
                            <button>
                                <img src={iconGit} alt="git"/>
                            </button>
                            <button>
                                <img src={iconFacebook} alt="facebook"/>
                            </button>
                            <button>
                                <img src={iconYoutube} alt="youtube"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="prTable">
                    <table>
                        <thead>
                            <tr>
                                <th className='title'>PR - SUBMISSIONS</th>
                                <th>BOUNTY</th>
                                <th>Date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4} className='none'>
                                    <button className='btn_black' onClick={clickSubmitPR}>Submit PR</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="td_text">
                                        <img src={userSample2} alt="user"/>
                                        <div className="text">
                                            <h6>
                                                Nicolas Serrano
                                                <div className="grade">
                                                    <img src={iconStar} alt="grade"/>
                                                    <img src={iconStar} alt="grade"/>
                                                    <img src={iconStar} alt="grade"/>
                                                    <img src={iconStar} alt="grade"/>
                                                </div>
                                            </h6>
                                            <p>
                                                Your code looks fine to me.. have you updated your package version?
                                                try npm update * in your turminal
                                            </p>
                                            <div className="link">
                                                <img src={iconPR} alt="icon"/>
                                                <span>PR : </span>
                                                <a href="www.github.com/fejios/dfkope2312321" target="_blank">
                                                www.github.com/fejios/dfkope2312321
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_bounty">
                                        <img src={iconCheck} alt="check"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_date">
                                        Oct 21 at 10:55
                                    </div>
                                </td>
                                <td>
                                    <div className="td_type c_skyblue">
                                        Follower
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="td_text">
                                        <img src={userSample2} alt="user"/>
                                        <div className="text">
                                            <h6>Nicolas Serrano</h6>
                                            <p>
                                                Your code looks fine to me.. have you updated your package version?
                                                try npm update * in your turminal
                                            </p>
                                            <div className="link">
                                                <img src={iconPR} alt="icon"/>
                                                <span>PR : </span>
                                                <a href="#" target="_blank">
                                                www.github.com/test/testa
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_bounty">
                                        <img src={iconCheck} alt="check"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_date">
                                        Oct 21 at 10:55
                                    </div>
                                </td>
                                <td>
                                    <div className="td_type c_yellow">
                                        Following
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="td_text">
                                        <img src={userSample2} alt="user"/>
                                        <div className="text">
                                            <h6>Nicolas Serrano</h6>
                                            <p>
                                                Your code looks fine to me.. have you updated your package version?
                                                try npm update * in your turminal
                                            </p>
                                            <div className="link">
                                                <img src={iconPR} alt="icon"/>
                                                <span>PR : </span>
                                                <a href="www.github.com/fejios/dfkope2312321" target="_blank">
                                                www.github.com/fejios/dfkope2312321
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_bounty">
                                        <button className='btn_black' onClick={clickSubmitCompletePR}>Complete</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_date">
                                        Oct 21 at 10:55
                                    </div>
                                </td>
                                <td>
                                    <div className="td_type">
                                    Contributor
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="prTable">
                    <table>
                        <thead>
                            <tr>
                                <th className='title'>PR - APPLICANTS</th>
                                <th>Date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="td_text">
                                        <img src={userSample2} alt="user"/>
                                        <div className="text">
                                            <h6>Nicolas Serrano</h6>
                                            <p>
                                                Your code looks fine to me.. have you updated your package version?
                                                try npm update * in your turminal
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_date">
                                        Oct 21 at 10:55
                                    </div>
                                </td>
                                <td>
                                    <div className="td_type">
                                        Contributor
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="td_text">
                                        <img src={userSample2} alt="user"/>
                                        <div className="text">
                                            <h6>Nicolas Serrano</h6>
                                            <p>
                                                Your code looks fine to me.. have you updated your package version?
                                                try npm update * in your turminal
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="td_date">
                                        Oct 21 at 10:55
                                    </div>
                                </td>
                                <td>
                                    <div className="td_type c_yellow">
                                        Following
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>{/*// prTable */}

                <div className="IssueCommitLog">
                    <div className="line">
                        <div className="left">
                            <img src={iconLogoMini2} alt="type"/>
                            <div className="user">
                                <img src={userSample} alt="user"/>
                                <span>Nicolas Serrano</span>
                            </div>
                            <div className="text">
                                이슈를 생성하였습니다.
                            </div>
                        </div>
                        <div className="right">
                            Oct 21 at 08:55
                        </div>
                    </div>
                    <p>|</p>
                    <div className="line">
                        <div className="left">
                            <img src={iconCommitUser} alt="type"/>
                            <div className="user">
                                <img src={userSample} alt="user"/>
                                <span>Nicolas Serrano</span>
                            </div>
                            <div className="text">
                                참여자 Nicolas Serrano 추가하였습니다.
                            </div>
                        </div>
                        <div className="right">
                            Oct 21 at 08:55
                        </div>
                    </div>
                    <p>|</p>
                    <div className="line">
                        <div className="left">
                            <img src={iconCommitView} alt="type"/>
                            <div className="user">
                                <img src={userSample} alt="user"/>
                                <span>Nicolas Serrano</span>
                            </div>
                            <div className="text">
                                added the <mark>new-bug</mark>
                            </div>
                        </div>
                        <div className="right">
                            Oct 21 at 08:55
                        </div>
                    </div>
                    <p>|</p>
                    <div className="line">
                        <div className="left">
                            <img src={iconCommitModify} alt="type"/>
                            <div className="user">
                                <img src={userSample} alt="user"/>
                                <span>Nicolas Serrano</span>
                            </div>
                            <div className="text">
                                이슈를 생성하였습니다.
                            </div>
                        </div>
                        <div className="right">
                            Oct 21 at 08:55
                        </div>
                    </div>
                    <p>|</p>
                </div>
                <div className="IssueContentBody borderTop">
                    <ItemComponent/>
                    
                {
                IssueList.length !== 0 &&
                    <Pagination total={IssueList.length}
                    limit={limit}
                    page={curPage}
                    setPage={setCurPage}/>
                }  
                </div>
            </div>{/*// boardCotnent */}
        </div>{/*// maxWrap */}
      
        {
            isShowCompletePopup && 
            <PopupComplete setIsShowCompletePopup={setIsShowCompletePopup}/>
        }
        

        { 
            isShowPRPopup && 
            <PopupPR setIsShowPRPopup={setIsShowPRPopup}/>  
        }
        <GoTop/>
        <Footer/>
        </>
    )
}

export default IssueDetail
