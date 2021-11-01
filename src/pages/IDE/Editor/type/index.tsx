import React from 'react'
import './style/FileType.scss'
import IDEType from '../../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected, onClosed,SelectedIndex, index} = props
    const index_ = index
    return (
        <div className={`IDE-Filetype${index_ == SelectedIndex ? ' active': ''}`}
            onClick={onSelected} title={File.filename}>
            <img src = {IDEType} alt=""/> {/* temp */}
            <p>{File.filename}</p>
            <div className = "IDE-Filetype-close" onClick={onClosed}>x</div>
        </div>
    )
}

export default FileType