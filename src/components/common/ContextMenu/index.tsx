/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import ContextMenuItem from "./Item"
import './style/ContextMenu.scss'

// contextmenu 참고자료 : https://nmingaleev.medium.com/how-to-create-a-custom-context-menu-with-react-hooks-30d011f205a0
const ContextMenu = (props) => {
    const {target, items} = props
    const [isvisible, setVisibility] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const openMenu = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setX(e.clientX)
        setY(e.clientY)
        setVisibility(true)
    }
    
    // close method : https://stackoverflow.com/questions/50538072/which-events-should-i-listen-for-to-hide-a-custom-context-menu-in-javascript
    const closeMenu = () => setVisibility(false)
    window.onblur = () => setVisibility(false)
    // temp : 좌클릭으로 ContextMenuItem을 선택했을때만 실행
    document.onmousedown = (e) => { if(e.button===0 && ((e.target as Element).className === "ContextMenu-item" || (e.target as Element).className === "ContextMenu-item-text")) return; else setVisibility(false)}
    document.onkeydown = (e) => { if (e.key === 'Escape' || e.which === 27 || e.keyCode === 27) setVisibility(false)}

    useEffect(()=>{
        if(target && target.current) {
            target.current.addEventListener("contextmenu", openMenu)
            window.addEventListener('click', closeMenu)
            return ()=> {
                if(target && target.current) {
                    target.current.removeEventListener("contextmenu", openMenu)
                    window.removeEventListener('click', closeMenu)
                }
            }
        }
    },[])

    const style = { top: y, left: x }

    const renderMenuItem = ()=>{
        return items.map((item, index) => { 
            if(item.title === '-') return <hr className="ContextMenu-hr"/>
            return <ContextMenuItem item={item} index={index}/> 
        })
    }

    return isvisible ? 
        (<div className='ContextMenu' style={style}>
            {renderMenuItem()}
        </div>) : null
}

export default ContextMenu