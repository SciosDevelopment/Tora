import React from 'react'
import './style/FileType.scss'
import IDEType from '../../../../img/idetype.png'

const FileType = (props) => {
    const {FileName} = props
    
    return (
        <div className = "IDE-Filetype">
            <img src = {IDEType} alt=""/> {/* temp */}
            <p>{FileName}</p>
        </div>
    )
}

export default FileType