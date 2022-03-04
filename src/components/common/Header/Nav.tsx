import React, { useState } from 'react'
import iconDown from '../../../img/ic_down.png'
import iconDownWhite from '../../../img/ic_arrow_down.png'
import iconHeadDown from '../../../img/icon_head_down.png'
import iconHeadUp from '../../../img/icon_head_up.png'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const { isMain } = props
  const [isOpen, setIsOpen] = useState(null)

  const clickNavDepth1 = (e) => { // 메뉴 선택
    if( e.target.parentElement.classList.value == 'on' ) {
      e.target.parentElement.classList.remove('on')
      setIsOpen(null)
    }else{
      e.target.parentElement.classList.add('on')
      if(isOpen != undefined) isOpen.remove('on')
      setIsOpen(e.target.parentElement.classList) 
    }
  }

  const clickNavDepth2 = (e) => { // Menu 의 하위메뉴 선택
    if( e.target.parentElement.classList.value == 'on' ) {
      e.target.parentElement.classList.remove('on')
    }else{
      e.target.parentElement.classList.add('on')
    }
  }

  return (
    <nav className={`${isMain ? '' : 'sub'}`}>
      <ul>
        <li>
          <button onClick={clickNavDepth1}>
            <Link to="/opensource">
              <span>Open source</span>
            </Link>
          </button>
        </li>
        <li>
          <button onClick={clickNavDepth1}>
            <span>Community</span>
            <img src={isMain ? iconDown : iconDownWhite} alt="하위메뉴보기" />
          </button>
          <ul className="dropdown">
            <li> 
              <Link to="/community/post">
                <button onClick={clickNavDepth1}>Community</button>
              </Link>
            </li>
            <li>
              <Link to="/community/bounty">
              <button onClick={clickNavDepth1}>Issue bounties</button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
