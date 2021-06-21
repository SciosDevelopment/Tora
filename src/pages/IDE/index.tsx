import React from 'react';
import './style/IDE.scss'
import Header from './Header/IDEHeader'
import SideBar from './SideBar/IDESideBar'
import Editor from './Editor/IDEEditor'
import Terminal from './Terminal/IDETerminal'

const IDE = () => {
    return (
        <div className = "IDE">
            <div className = "IDE-Header">
                <Header/>
            </div>
            <div className  = "IDE-Main">
                <div className = "IDE-Sidebar">
                    <SideBar/>
                </div>
                <div className = "IDE-View">
                    <div className = "IDE-editor">
                        <Editor/>
                    </div>
                    <div className  = "IDE-terminal">
                        <Terminal/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IDE;