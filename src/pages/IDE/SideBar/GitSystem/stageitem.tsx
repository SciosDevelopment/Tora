import { useEffect, useState } from "react"

const FileStageItem = (props) => {
    const {projectId, fileinfo, selected = false, onClick} = props
    const selectItem = () => {
        
        if(onClick) {
            onClick(fileinfo)
            console.log(fileinfo)
        }
    }
    return (
        <div className={'filestageItem' + (selected ? ' selected': '')}  onClick={selectItem}>
            <div className="fileinfo">
                <img src="#"/>
                <p>{fileinfo.filename}</p>
            </div>
            <div className="option">
                {props.children}
            </div>
        </div>
    )
}

export default FileStageItem