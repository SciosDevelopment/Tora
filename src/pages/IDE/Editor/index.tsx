import React from 'react'
import './style/IDEEditor.scss'
import SplitScreen from '../../../img/splitscreen.png'
import IDEType from '../../../img/idetype.png'
import FileType from './type'

const IDEEditor = () => {

    return (
        <div className = "IDE-Editor-main">
            <div className = "IDE-Editor-function">
                <div className ="IDE-Editor-FileList">
                    <FileType FileName="Package.json"/>
                    <FileType FileName="Package.json"/>
                    <FileType FileName="Package.json"/>
                    <FileType FileName="Package.json"/>
                </div>
                <div className = "IDE-Editor-splitscreen">
                    <img src = {SplitScreen} alt=""/>
                </div>
            </div>
            <div className = "IDE-Editor-contents">
                {/* CodeMirror 사용 */}
            </div>
        </div>
    )
}

export default IDEEditor