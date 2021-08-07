import React from 'react'
import './style/IDEEditor.scss'
import SplitScreen from '../../../img/splitscreen.png'
import FileType from './type'
import TextEditor from 'src/components/common/TextEditor'
import { useState } from 'react'
import { useEffect } from 'react'

const IDEEditor = () => {
    
    //const [FileList, setFileList] = useState<File[]>() //temp var
    // useEffect(()=>{
    //     alert(curFile)
    // },[curFile])
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
                <TextEditor code="test"/>
            </div>
        </div>
    )
}

export default IDEEditor