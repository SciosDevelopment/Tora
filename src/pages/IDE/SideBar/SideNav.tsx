import React, { useState } from 'react'
import { useEffect } from 'react'
import { Resizable } from 're-resizable'

const IDESideNav = (props) => {
    const {nav, list} = props
    const [folderBoxSize, setFolderBoxSize] = useState({width:300});    
    useEffect(()=>{ // IDESideNav에 따른 editor사이즈조정 필요
        if(nav === -1) return
        else return
    },[nav])
    return (
        
            <Resizable className= "folderBox"
            size={{ width: folderBoxSize.width, height:'100%'}}
            onResizeStop={(e, direction, ref, d) => {
                setFolderBoxSize({
                    width: folderBoxSize.width + d.width,
                })
            }}
            enable={{ right:true, }} minWidth={150} maxWidth={1000}>
                {list[nav]}
            </Resizable>
        
    )
}

export default IDESideNav