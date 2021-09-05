import React from 'react'
import Terminal from '../../../components/common/Terminal'
import './style/Footer.scss'

const IDEFooter = () => {
    return (
        <div className = "Footer-main">
            <div className="Footer-Tab">
                <p>terminal</p>
                <p>test1</p>
                
            </div> 
            <div className="Footer-content">
                <Terminal terminalID="terminal0"/>
            </div>    
        </div>
    )
}

export default IDEFooter