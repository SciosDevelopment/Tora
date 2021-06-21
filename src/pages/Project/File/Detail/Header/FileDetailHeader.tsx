import React from 'react';
import './style/FileDetailHeader.scss'
import Profile from '../../../../../img/profile4.png'

const FileDetailHeader = () => {
    return (
        <div className = "FileDetail-Header">
            <div className = "FileDetail-Header-main">
                <div className = "FileDetail-Header-title">
                    <p>File name</p>
                </div>
                <div className = "FileDetail-Header-info">
                    <div className = "FileDetail-Header-lines">
                        <p>17 lines</p>
                    </div>
                    <div className = "FileDetail-Header-sloc">
                        <p>(17 sloc)</p>
                    </div>
                    <div className = "FileDetail-Header-byte">
                        <p>326 Bytes</p>
                    </div>
                </div>
                <div className = "FileDetail-Header-contributor">
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                </div>
            </div>
        </div>
    );
};

export default FileDetailHeader;