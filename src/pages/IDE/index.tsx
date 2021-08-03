import React from 'react'
import './style/IDE.scss'
import Header from './Header'
import SideBar from './SideBar'
import Editor from './Editor'
import Terminal from './Terminal'

const IdePage = () => {
    return (
        <div className = "IDE-Main">
            <div className = "IDE-Header">
                <Header/>
            </div>
            <div className  = "IDE-Content">
                <div className = "IDE-Sidebar">
                    <SideBar/>
                </div>
                <div className = "IDE-View">
                    <div className = "IDE-Editor">
                        <Editor/>
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