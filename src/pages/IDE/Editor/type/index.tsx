import React from 'react'
import './style/FileType.scss'
import IDEType from '../../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected} = props
    
    return (
        <div className = "IDE-Filetype" onClick={onSelected}>
            <img src = {IDEType} alt=""/> {/* temp */}
            <p>{File.filename}</p>
        </div>
    )
}

export default FileType