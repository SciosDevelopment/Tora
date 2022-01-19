import React,{useState} from 'react'

import iconPlus from '../../../img/img2/icon_plus.png'
import imgSample2 from '../../../img/img2/img_sample2.png'
import iconGit from '../../../img/img2/icon_git.png'
import iconFacebook from '../../../img/img2/icon_facebook.png'
import iconYoutube from '../../../img/img2/icon_youtube.png'
import iconClone from '../../../img/img2/icon_clone.png'
import arrowCode from '../../../img/img2/arrow_code.png'

const ProjectRightSidebar = (props) => {
    const {projectId} = props
    const [isShowCodePopup, setIsShowCodePopup] = useState(false)
    const clickBtnCode = () => setIsShowCodePopup(isShowCodePopup ? false : true)

    return (
        <>
            <div className="ProjectRightSidebar">
                <div className="btn_code_wrap">
                    <button className='btn_code' onClick={clickBtnCode}>
                        Code
                        <img src={arrowCode} alt="code" />
                    </button>
                    {
                        isShowCodePopup && 
                        <div className="code_popup innerShadow">
                            <div className="clonebox">
                                <div className="left">
                                    <h5>Clone HTTPS</h5>
                                    <input type="text" className='innerShadow'   value="git@torapod.com:fjeioj/프로젝트이름" />
                                </div>
                                <button className='btn_clone'>
                                    <img src={iconClone} alt="clone" />
                                </button>
                            </div>
                            <div className="clonebox">
                                <div className="left">
                                    <h5>Clone SSH</h5>
                                    <input type="text" className='innerShadow'  value="git@torapod.com:fjeioj/프로젝트이름" />
                                </div>
                                <button className='btn_clone'>
                                    <img src={iconClone} alt="clone" />
                                </button>
                            </div>
                            <div className="clonebox">
                                <div className="left">
                                    <h5>Download ZIP</h5>
                                </div>
                                <button className='btn_clone'>
                                    <img src={iconClone} alt="clone" />
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="box">
                    <h4>Description</h4>
                    <p>
                        provided residency and ellowship matching servprovided residency and ellowship matching serv
                    </p>
                </div>
                <div className="box">
                    <h4>Information</h4>
                    <ul className='items_information'>
                        <li>23 Commit</li>
                        <li>Issue : 300</li>
                        <li>6 Branch</li>
                        <li>184 KB Storage</li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Language</h4>
                    <mark className='skillMark'>node.js</mark>
                    <mark className='skillMark'>django</mark>
                </div>
                <div className="box">
                    <h4>License</h4>
                    <p>BSD 2-Clause License</p>
                </div>
                <div className="box">
                    <h4>Visitors     today  /  total</h4>
                    <p className='item_visitors'>230 / 1200</p>
                </div>
                <div className="box">
                    <h4>Contributors</h4>
                    <div className="user_items">
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                        <div className="img"><img src={imgSample2} alt="user" /></div>
                    </div>
                    <div className="number">
                        <img src={iconPlus} alt="user" />
                        <span>7</span>
                    </div>
                </div>
                <div className="box btmIcon">
                    <button><img src={iconGit} alt="git"/></button>
                    <button><img src={iconFacebook} alt="facebook" /></button>
                    <button><img src={iconYoutube} alt="youtube" /></button>
                </div>
            </div>{/* // rightItems */}
        </>
    )
}

export default ProjectRightSidebar