import React, {useState} from 'react';
import './style/IDEHeader.scss'
import {Link} from 'react-router-dom'
import LogoImg from '../../../img/tora-ide-logo@2x.png'
import GitControl from './GitSystem/IDEGitSystem'
import Option from './Option/IDEHeaderOption'

const IDEHeader:React.FC = () => {

    const [open1, setOpen1] = useState<Boolean>(false)
    const [open2, setOpen2] = useState<Boolean>(false)


    return (
        <div className = "IDEHeader">
            <div className = "IDEHeader-left">
                <Link to="/">
                <div className="IDE-logo">
                    <img src={LogoImg} alt="go to main"/>
                </div>
                </Link>
                <div className  ="IDE-function">
                    <div className = "IDE-function-dropdown">
                        <button className = "IDE-function-dropdown-btn">File</button>
                        <div className = "IDE-function-dropdown-contents">
                            <a>op1</a>
                            <a>op2</a>
                            <a>op3</a>
                        </div>               
                    </div>
                    <div className = "IDE-function-dropdown">
                        <button className = "IDE-function-dropdown-btn">Edit</button>
                        <div className = "IDE-function-dropdown-contents">
                            <a>op1</a>
                            <a>op2</a>
                            <a>op3</a>
                        </div>               
                    </div>
                    <div className = "IDE-function-dropdown">
                        <button className = "IDE-function-dropdown-btn">Terminal</button>
                        <div className = "IDE-function-dropdown-contents">
                            <a>op1</a>
                            <a>op2</a>
                            <a>op3</a>
                        </div>               
                    </div>
                    <div className = "IDE-function-dropdown">
                        <button className = "IDE-function-dropdown-btn">Git</button>
                        <div className = "IDE-function-dropdown-contents">
                            <a>op1</a>
                            <a>op2</a>
                            <a>op3</a>
                        </div>               
                    </div>
                </div>
            </div>
            <div className = "IDE-Header-Git-system">
                <GitControl/>
            </div>
            <div className = "IDE-Header-right">
                <Option/>
            </div>
        </div>
    );
};

export default IDEHeader;