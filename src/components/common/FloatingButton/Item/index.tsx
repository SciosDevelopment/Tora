import {FunctionComponent, useState, useEffect} from 'react'
import './style/FloatingButtonItem.scss'
const FloatingButtonItem:FunctionComponent<any> = (Props) => {
    const {icon, onActivate} = Props
    const [activate, setActivate] = useState(false)
  
    return (
            <div className="floatingbutton-item">
                <div className="floatingbutton-icon" onClick={onActivate}>
                    <img src={icon} alt=""/>
                </div>
                {Props.children}
		    </div>    
    )
}

export default FloatingButtonItem