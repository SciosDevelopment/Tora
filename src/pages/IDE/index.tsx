import React, { useState } from 'react'
import './style/IDE.scss'
import Header from './Header'
import SideBar from './SideBar'
import Editor from './Editor'
import Terminal from './Terminal'

const IdePage = () => {
    const [curFile, setCurFile] = useState(null)
    return (
        <div className = "IDE-Main">
            <div className = "IDE-Header">
                <Header/>
            </div>
            <div className  = "IDE-Content">
                <div className = "IDE-Sidebar">
                    <SideBar onSelect={setCurFile}/>
                </div>
                <div className = "IDE-View">
                    <div className = "IDE-Editor">
                        <Editor onSelect={setCurFile} current={curFile}/>
                    </div>
                    <div className = "IDE-Terminal">
                        <Terminal/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IdePage