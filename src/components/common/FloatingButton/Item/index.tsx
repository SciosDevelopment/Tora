import {FunctionComponent, useState, useEffect} from 'react'
const FloatingButtonItem:FunctionComponent<any> = (Props) => {
    const {icon, onActivate} = Props
    const [activate, setActivate] = useState(false)
  
    return (
            <div className="floatingbutton-item">
                <div className="icon" onClick={onActivate}>
                    <img src={icon} alt=""/>
                </div>
                {Props.children}
		    </div>    
    )
}

export default FloatingButtonItem