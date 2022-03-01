import React, { useEffect, useState } from 'react'
import iconPerson from '../../../img/ic_person.png'
import iconPersonWhite from '../../../img/icon_person_white.png'
import iconDownWhite from '../../../img/ic_arrow_down.png'
import iconHeadDown from '../../../img/icon_head_down.png'
import iconHeadUp from '../../../img/icon_head_up.png'

import {useCookies} from 'react-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { history } from 'src/configureStore'

const AsideItems = (props) => {
    const {isMain} = props    
    const [isShowPopupUser, setIsShowPopupUser] = useState(false)    
    // temp
    const [cookies,] = useCookies(['ToraLoginToken'])
    const isLogin = axios.defaults.headers.common['Authorization'] !== undefined && cookies.ToraLoginToken === axios.defaults.headers.common['Authorization']

    const clickUserButton = () => {
        if( !isMain ) { setIsShowPopupUser(isShowPopupUser ? false : true) }
        else history.push("/dashboard")
    }

    const clickNavDepth1 = (e) => {
        if( e.target.parentElement.classList.value == 'on' ) {
            e.target.parentElement.classList.remove('on')
        }else{
            e.target.parentElement.classList.add('on')
        }
    }
    const AlreadyLogin = () => {
        return <>
            {/* 기능 연결시 사용 */}
            {/* <li>
                <button>
                    <img src={isMain ? iconBell : iconBellWhite} alt="알림" />
                </button>
            </li>
            <li>
                <button>
                    <img src={isMain ? iconWallet : iconWalletWhite} alt="지갑" />
                </button>
            </li> */}
            <li>
                <button className="btn_head_user" onClick={clickUserButton}>
                    <img src={isMain ? iconPerson : iconPersonWhite} className="iconPerson" alt="내정보" />
                    {
                        !isMain && <img src={iconDownWhite} className="icon_down_white" alt="하위메뉴보기" />
                    }
                </button>
                <button className="btn_head_user" onClick={()=> {history.push("/logout")}}>
                    <img src={isMain ? iconPerson : iconPersonWhite} className="iconPerson" alt="로그아웃" /> {/*아이콘 변경 필요*/}
                </button>
                {
                isShowPopupUser && 
                <ul className="dropdown">
                    <li>
                        <button onClick={clickNavDepth1}>
                            Dashboard
                            <img src={iconHeadUp} className='icon_head_up' alt="arrow" />
                            <img src={iconHeadDown} className='icon_head_down' alt="arrow" />
                        </button>
                        <ul>
                            <li><button>Repository</button></li>
                            <li><button>Community</button></li>
                            <li><button>Issues</button></li>
                            <li><button>Follow</button></li>
                        </ul>
                    </li>
                    <li><button>Bounty</button></li>
                    <li><button>Account</button></li>
                </ul>
                }
            </li>
        </>
    }

    const NotLogin = () =>{
        return (
            <>
            <div className={`RightTextMenu ${isMain ? '': 'white'}`}>
                <Link to="/login">
                    {/* <button className="btn_head_user">
                        <img src={isMain ? iconPerson : iconPersonWhite} alt="Login" />
                    </button> */}
                    Sign in
                </Link>
                
                <Link to="/signup">
                    {/* <button className="btn_head_user">
                        <img src={isMain ? iconPerson : iconPersonWhite} alt="Signup"/>    
                    </button> */}
                    Sign up
                </Link>
            </div>
            </>
        )
    }
    return (isLogin ? <AlreadyLogin/> : <NotLogin/>)
}

export default AsideItems
