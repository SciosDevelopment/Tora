import React, {useState} from 'react';
import './style/IDEHeader.scss'
import {Link} from 'react-router-dom'
import LogoImg from '../../../img/tora-ide-logo@2x.png'


import File from './Dropdown/File'
import Edit from './Dropdown/Edit'
import View from './Dropdown/View'
import Run from './Dropdown/Run'


import GitControl from './GitSystem'
import Option from './Option'

const IDEHeader = () => {
    
    return (
        <div className = "IDEHeader">
            <div className = "IDEHeader-left">
                {/* Logo 대체 필요 */}
                <Link to="/">
                    <div className="IDE-logo">
                        <img src={LogoImg} alt="go to main"/>
                    </div>
                </Link>

                <div className="IDE-function">
                    <File/>
                    <Edit/>
                    <View/>
                    <Run/>
                </div>
            </div>
            <div className = "IDE-Header-GitSystem">
                <GitControl/>
            </div>
            <div className = "IDE-Header-right">
                <Option/>
            </div>
        </div>
    )
}

export default IDEHeader