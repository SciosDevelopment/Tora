import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Editor from './Editor'
import Aside from './Aside'
import Terminal from './TerminalView'

const IdePage = () => {
    const [curFile, setCurFile] = useState(null)
    const [show, setShow] = useState(false)
    
    return (
        <div className = "idePage" onContextMenu={(e)=>{e.preventDefault()}}>
            <Header/>
            <div className = "ideBody">
                <SideBar onSelect={setCurFile}/>
                <div className = "centerWrap">
                    <Editor current={curFile} showAside={()=>{setShow(!show)}}/>
                    <Terminal/>
                </div>
                <Aside visible={show}/>
            </div>
        </div>
    )
}

export default IdePage