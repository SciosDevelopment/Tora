import React from 'react'

const SideButton = (props) => {
    const {key, content, image, onAction} = props
    
    return (
        image ? // image button
        <button className = "SideImageButton" onClick={onAction}>
            <input type="hidden" id="SideMenuKey">{key}</input>
            {props.children != null && props.children}
            <img src={image} alt=""/>
            {content !== undefined && <p>{content}</p>}
        </button>
        : // non-image button
        <button className = "SideButton" onClick={onAction}> 
            <p>{content}</p>
        </button>
    )
}

export default SideButton