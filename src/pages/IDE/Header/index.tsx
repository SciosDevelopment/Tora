import React, {useState} from 'react';
import './style/IDEHeader.scss'
import {Link} from 'react-router-dom'
import LogoImg from '../../../img/tora-ide-logo@2x.png'
import GitControl from './GitSystem'
import Option from './Option'
import Dropdown from './Dropdown'

const IDEHeader:React.FC = () => {
    const testfunc = ()=> console.log("!")
    
    // 이 부분 추후에 hooks로 처리할 예정
    const FileDrop = Array(
        {title : "op1", shortcut : null, onAction : testfunc},
        {title : "op2", shortcut : null, onAction : testfunc},
        {title : "op3", shortcut : null, onAction : testfunc},
        {title : "op4", shortcut : null, onAction : testfunc})

    const EditDrop = Array(
        {title : "op1", shortcut : null, onAction : testfunc},
        {title : "op2", shortcut : null, onAction : testfunc},
        {title : "op3", shortcut : null, onAction : testfunc},
        {title : "op4", shortcut : null, onAction : testfunc})

    const TermiDrop = Array(
        {title : "op1", shortcut : null, onAction : testfunc},
        {title : "op2", shortcut : null, onAction : testfunc},
        {title : "op3", shortcut : null, onAction : testfunc},
        {title : "op4", shortcut : null, onAction : testfunc})

    const GitDrop = Array(
        {title : "op1", shortcut : null, onAction : testfunc},
        {title : "op2", shortcut : null, onAction : testfunc},
        {title : "op3", shortcut : null, onAction : testfunc},
        {title : "op4", shortcut : null, onAction : testfunc})

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
                    <Dropdown title="File" data={FileDrop}/>
                    <Dropdown title="Edit" data={EditDrop}/>
                    <Dropdown title="Terminal" data={TermiDrop}/>
                    <Dropdown title="Git" data={GitDrop}/>
                </div>
            </div>
            <div className = "IDE-Header-GitSystem">
                <GitControl/>
            </div>
            <div className = "IDE-Header-right">
                <Option/>
            </div>
        </div>
    );
};

export default IDEHeader;