import React from 'react'
import './style/IDESideNav.scss'

const IDESideNav = (props) => {
    const {nav, list} = props
    
    return (
        <div className = "IDE-SideNav">
            {list[nav]}
        </div>
    )
}

export default IDESideNav