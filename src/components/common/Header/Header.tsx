import React, { useState } from 'react'
import Nav from "./Nav"
import AsideItems from "./AsideItems"
import logo from '../../../img/guide/logo.png'
import logoWhite from '../../../img/logo_white.png'
import iconMenuWhite from '../../../img/ic_menu_white.png'
import iconHeadAdd from '../../../img/ic_head_add.png'
import close from '../../../img/close.png'
import iconMenu from '../../../img/ic_menu.png'
import { useMediaQuery } from 'react-responsive'
import iconHeadSearch from '../../../img/ic_head_search.png'
import iconHeadAddMobile from '../../../img/ic_head_add_mobile.png'
import { Link } from 'react-router-dom'
const Header = (props) => {
    const {setIsShowPopupProject, darkMode = true} = props
    const [isShowNav, setIsShowNav] = useState(false)
    const [isShowHeadAdd, setIsShowHeadAdd] = useState(false)
    const [isShowSearchByTablet, setIsShowSearchByTablet] = useState(false)
    const isPc = useMediaQuery({ query:"(min-width:1140px)" })
    const isMobile = useMediaQuery({ query:"(max-width:767px)" })

    const openMenu = () => setIsShowNav(true)
    const closeMenu = () => setIsShowNav(false)
    const clickHeadAdd = () => setIsShowHeadAdd(isShowHeadAdd ? false : true)
    const clickSearch = () => setIsShowSearchByTablet(isShowSearchByTablet ? false : true)
    const clickNewProject = () => {
        setIsShowPopupProject(true)
        setIsShowHeadAdd(false)
    }

    const Logo = () => {
        return (
            <h1>
                <Link to="/">
                    <button>
                        <img src={darkMode ? logoWhite : logo} alt="ToraPod"/>
                    </button>
                </Link>
            </h1>
        )
    }

    return (
        <>
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
                                    <li><button>New Community</button></li>
                                    <li><button>New Issue</button></li>
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
                                        {
                                            isShowSearchByTablet && <input type="text" placeholder="Search" />
                                        }
                                        
                                        <button onClick={clickSearch}>
                                            <img src={iconHeadSearch} alt="search" />
                                        </button>
                                    </li>
                                }
                            </>
                        }
                        {
                            !isMobile && <AsideItems isMain={!darkMode} />
                        }
                        
                    </ul>
                    {
                        !isPc && 
                        <button className="btn_menu">
                            <img src={darkMode ? iconMenuWhite : iconMenu} className="iconMenu" alt="햄버거메뉴" onClick={openMenu} />
                        </button>
                    }
                </aside>
            </div>

            {
                !isPc &&
                <div className={`navMobile ${isShowNav && 'on'}`}>
                    <ul>
                        <AsideItems isMain={true}/>
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
