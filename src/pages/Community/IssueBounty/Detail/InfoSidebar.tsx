import iconPlus from 'src/img/icon_plus.png'
import imgSample2 from 'src/img/img_sample2.png'
import iconBitcoin from 'src/img/icon_bitcoin.png'
import { useState } from 'react'
import PopupStart from 'src/components/common/Modal/PopupStart'

const IssueInfoSidebar = () => {
    const [isShowStartPopup, setIsShowStartPopup] = useState(false)
    const clickSubmitStartPR = () => setIsShowStartPopup(true)
    return (
        <>
            { 
            isShowStartPopup && 
                <PopupStart setIsShowStartPopup={setIsShowStartPopup}/>  
            }
            <div className="btn_code_wrap btn3">
                <button onClick={clickSubmitStartPR}>start</button>
                <button>Github</button>
                <button>GitLab</button>
            </div>
            <div className="box item2">
                <div className="inner">
                    <h4>이슈 형태</h4>
                    <p>일대다</p>
                </div>
                <div className="inner">
                    <h4>이슈타입</h4>
                    <p>Bug</p>
                </div>
            </div>
            <div className="box">
                <h4>난이도</h4>
                <p>주니어</p>
            </div>
            <div className="box">
                <h4>시작일 ~ 종료일</h4>
                <p>2021.09.10 ~ 2021. 11.01</p>
            </div>
            <div className="box">
                <h4>당첨자 발표일</h4>
                <p>2021.10.10</p>
            </div>
            <div className="box bounty">
                <h4>바운티 정보</h4>
                <h4 className="center">Total</h4>
                <ul>
                    <li>
                        <div className="left">
                            <span>1.</span>
                            <img src={iconBitcoin} alt=""/>
                        </div>
                        <div className="right">
                            <p>0.0000023</p>
                            <span>$ 23.4</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span>2.</span>
                            <img src={iconBitcoin} alt=""/>
                        </div>
                        <div className="right">
                            <p>0.0000023</p>
                            <span>$ 23.4</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span>3.</span>
                            <img src={iconBitcoin} alt=""/>
                        </div>
                        <div className="right">
                            <p>0.0000023</p>
                            <span>$ 23.4</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="box">
                <h4>팔로우</h4>
                <div className="user_items">
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                </div>
                <div className="number">
                    <img src={iconPlus} alt="user"/>
                    <span>21</span>
                </div>
            </div>
            <div className="box">
                <h4>참여자</h4>
                <div className="user_items">
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                    <div className="img"><img src={imgSample2} alt="user"/></div>
                </div>
                <div className="number">
                    <img src={iconPlus} alt="user"/>
                    <span>7</span>
                </div>
            </div>
       </> 
    )
}

export default IssueInfoSidebar
