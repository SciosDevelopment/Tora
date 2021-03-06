import React, { useState } from 'react'
import Nav from "./Nav"
import AsideItems from "./AsideItems"
import logo from '../../../img/logo.png'
import logoWhite from '../../../img/logo_white.png'
import iconMenuWhite from '../../../img/ic_menu_white.png'
import iconHeadAdd from '../../../img/ic_head_add.png'
import close from '../../../img/close.png'
import iconMenu from '../../../img/ic_menu.png'
import { useMediaQuery } from 'react-responsive'
import iconHeadSearch from '../../../img/ic_head_search.png'
import iconHeadAddMobile from '../../../img/ic_head_add_mobile.png'
import { Link } from 'react-router-dom'
import PopupNewProject from '../Modal/PopupNewProject'
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { history } from 'src/configureStore'
// temp

const Header = (props) => {
    const {darkMode = true} = props
    const [isShowNav, setIsShowNav] = useState(false)
    const [isShowHeadAdd, setIsShowHeadAdd] = useState(false)
    const isPc = useMediaQuery({ query:"(min-width:1140px)" })
    const isMobile = useMediaQuery({ query:"(max-width:767px)" })
    const [isShowModalProject, setIsShowModalProject] = useState(false)
    const [cookies,] = useCookies(['ToraLoginToken'])
    const isLogin = axios.defaults.headers.common['Authorization'] !== undefined && cookies.ToraLoginToken === axios.defaults.headers.common['Authorization']

    const openMenu = () => setIsShowNav(true)
    const closeMenu = () => setIsShowNav(false)
    const clickHeadAdd = () => setIsShowHeadAdd(isShowHeadAdd ? false : true)
    const clickSearch = () => { alert("search") }
    const clickNewProject = () => {
        setIsShowModalProject(true)
        setIsShowHeadAdd(false)
    }

    const Logo = () => {
        return (
            <h1>
                <Link to={isLogin ? "/opensource" : "/"}>
                    <button>
                        <img src={darkMode ? logoWhite : logo} alt="ToraPod"/>
                    </button>
                </Link>
            </h1>
        )
    }

    const NewProject = () =>{
        return isShowModalProject && <PopupNewProject isShowPopupProject={isShowModalProject} setIsShowPopupProject={setIsShowModalProject} />
    }

    const clickNewCommunity = () => {
        history.push("/community/post/write")
    }

    const clickNewIssue = () => {
        history.push("/community/issue/write")
    }
    
    return (
        <>
            <NewProject/>
            <div className={`Header ${darkMode && 'otherStyle'}`}>
                <div className="left">
                   <Logo/>
                   {(isPc || (!isPc && !isMobile && !darkMode)) 
                    && <Nav isMain={!darkMode}/>}
                </div>

                <div className="head_search_wrap">
                {
                    isPc && darkMode &&
                    <>
                        <div className="head_add">
                            <button onClick={clickHeadAdd}>
                                <img src={iconHeadAdd} alt="add" />
                            </button>
                            {
                                isShowHeadAdd &&
                                <ul className="dropdown">
                                    <li onClick={clickNewProject}><button>New project</button></li>
                                    <li onClick={clickNewCommunity}><button>New Community</button></li>
                                    <li onClick={clickNewIssue}><button>New Issue</button></li>
                                </ul>
                            }
                        </div>
                        
                        <div className="head_search">
                            <input type="text" placeholder="Search" />
                            <button className="btn_head_search">
                                <img src={iconHeadSearch} alt="search" />
                            </button>
                        </div>
                    </>
                }
                </div>
                
                <aside>
                    <ul>
                        {
                            !isPc && darkMode &&
                            <>
                                <li>
                                    <button>
                                        <img src={iconHeadAddMobile} alt="add" />
                                    </button>
                                </li>
                                { !isMobile && 
                                    <li className='head_search_tablet'>
                                        <input type="text" placeholder="Search" />
                                        
                                        <button onClick={clickSearch}>
                                            <img src={iconHeadSearch} alt="search" />
                                        </button>
                                    </li>
                                }
                            </>
                        }
                        {
                            !isMobile && <AsideItems isMain={!darkMode} isLogin={isLogin} />
                        }
                        
                    </ul>
                    {
                        !isPc && 
                        <button className="btn_menu">
                            <img src={darkMode ? iconMenuWhite : iconMenu} className="iconMenu" alt="???????????????" onClick={openMenu} />
                        </button>
                    }
                </aside>
            </div>

            {
                !isPc &&
                <div className={`navMobile ${isShowNav && 'on'}`}>
                    <ul>
                        <AsideItems isMain={true} isLogin={isLogin}/>
                    </ul>
                    <button className="btn_close" onClick={closeMenu}>
                        <img src={close} alt="close"/>
                    </button>
                    <Nav isMain={true}/>
                </div>
            }
        </>
    )
}

export default Header
