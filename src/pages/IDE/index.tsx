import React, { useEffect, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Editor from './Editor'
import Aside from './Aside'
import Terminal from './TerminalView'

const IdePage = (props) => {
    const [curFile, setCurFile] = useState(null)
    const [show, setShow] = useState(false)
    const {projectid} = props.match.params
    return (
        <div className = "idePage" onContextMenu={(e)=>{e.preventDefault()}}>
            <Header/>
            <div className = "ideBody">
                <SideBar onSelect={setCurFile} projectId={projectid}/>
                <div className = "centerWrap">
                    <Editor current={curFile} showAside={()=>{setShow(!show)}} projectId={projectid}/>
                    <Terminal/>
                </div>
                <Aside visible={show}/>
            </div>
        </div>
    )
}

export default IdePage