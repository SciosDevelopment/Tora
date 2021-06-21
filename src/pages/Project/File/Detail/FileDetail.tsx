import React from 'react';
import './style/FileDetail.scss'
import Header from './Header/FileDetailHeader'
import Contents from './Contents/FileDetailContents'

const FileDetail = () => {
    return (
        <div className = "FileDetail">
            <div className = "FileDetail-Header-select">
                <div className = "FileDetail-Header-code">
                    <select>
                        <option>Code</option>
                        <option>Code2</option>
                    </select>
                    
                </div>
                <div className = "FileDetail-Header-branch">
                    <select>
                        <option>Master</option>
                        <option>Branch</option>
                    </select>
                </div>
            </div>
            <div className = "FileDetail-Main">
                <div className = "FileDetail-Header">
                    <Header/>
                </div>
                <div className = "FileDetail-Contents">
                    <Contents/>
                </div>
            </div>
        </div>
    );
};

export default FileDetail;