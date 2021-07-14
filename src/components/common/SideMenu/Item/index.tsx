import React from 'react'
import './style/SideMenuItem.scss'


const SideMenuItem = (props) => {
    const {content, image, onAction} = props

    return (
        image ? // image button
        <div className = "SideImageButton">
            <button type="button" onClick={onAction}>
                <img src={image} alt=""/>
                <p>{content}</p>
            </button>
        </div>
        : // non-image button
        <div className = "SideButton"> 
                <input type= "button" onClick={onAction} value = {content}/>
        </div>
    )
}

export default SideMenuItem