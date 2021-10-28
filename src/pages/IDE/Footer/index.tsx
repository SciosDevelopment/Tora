import React from 'react'
import Terminal from '../../../components/common/Terminal'
import './style/Footer.scss'

const IDEFooter = (props) => {
    const {tokenValue, sessionUrl} = props
    return (
        <div className = "Footer-main">
            <div className="Footer-Tab">
                <p>terminal</p>     
            </div> 
            <div className="Footer-content">
                <Terminal tokenValue={tokenValue}
                 sessionUrl={sessionUrl}/>
            </div>
        </div>
    )
}

export default IDEFooter