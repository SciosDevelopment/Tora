import React from 'react'
import { useEffect } from 'react'
import './style/IDESideNav.scss'

const IDESideNav = (props) => {
    const {nav, list} = props
    
    useEffect(()=>{ // IDESideNav에 따른 editor사이즈조정 필요
        if(nav === -1) return
        else return
    },[nav])
    return (
        <div className = "IDE-SideNav">
            {list[nav]}
        </div>
    )
}

export default IDESideNav