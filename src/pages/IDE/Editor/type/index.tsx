import React, { useEffect } from 'react'
import './style/FileType.scss'
import IDEType from '../../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected, Saved, onClosed, Selected} = props
    /*{Saved ? 'x' : '0'}*/
    
    return (
        <div className={`IDE-Filetype${Selected ? ' active': ''}`}
            onClick={onSelected} title={File.filename}>
            <img src = {Saved ? null : IDEType} alt=""/> {/* temp */}
            <p>{File.filename}</p>
            <div className = "IDE-Filetype-close" onClick={onClosed}>X</div>
        </div>
    )
}

export default FileType