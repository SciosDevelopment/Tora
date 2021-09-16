import {useState} from 'react'
import FloatingChat from './Item/Chat'
import FloatingNote from './Item/Note'
import './style/FloatingButton.scss'
import Plus from '../../../img/plus.png'
// 참고자료 : https://wazacs.tistory.com/37 : draggable

const FloatingButton = () => {
    const [activated, setActivated] = useState(false)    
    const activateBtn = () => setActivated(!activated)

    return (
        <div id="fab-wrapper">
            <div id="fab-btn" onClick={activateBtn} className= {activated && "active"}><img src={Plus} alt=""/></div>
            {activated && <div id="fab-contents-wrapper">
                <FloatingChat/>
                <FloatingNote/>
            </div>}
        </div>
    )
}

export default FloatingButton
