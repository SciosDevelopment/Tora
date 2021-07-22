import React from 'react'
import './style/SideMenuItem.scss'


const SideMenuItem = (props) => {
    const {key, content, image, onAction, page} = props

    return (
        image ? // image button
        <div className = "SideImageButton">
            <input type="hidden" id="SideMenuKey">{key}</input>
            <button type="button" onClick={onAction}>
                <img src={image} alt=""/>
                { 
                    content&&
                    <p>{content}</p>
                }
            </button>
        </div>
        : // non-image button
        <div className = "SideButton"> 
                <input type= "button" onClick={onAction} value = {content}/>
        </div>
    )
}

export default SideMenuItem