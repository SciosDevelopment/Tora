import React from 'react'
import FileView from '../FileView'

// temp file : need refactoring
const PopupFileview = (props) =>{
    const {close, projectId} = props
    return (
        <div className="file_popup">
            <FileView projectId={projectId} close={close}/>
        </div>
    )
}

export default PopupFileview
