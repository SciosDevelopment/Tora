import React from 'react'
import './style/IDEEditor.scss'
import SplitScreen from '../../../img/splitscreen.png'
import FileType from './type'
import TextEditor from 'src/components/common/TextEditor'
import { useState } from 'react'
import { useEffect } from 'react'

const IDEEditor = (props) => {
    const{onSelect, current} = props
    
    const [curFiletext, setCurFiletext] = useState("")
    const [FileList, setFileList] = useState([])
    const [curSelected, setCurSelected] = useState(-1)
    useEffect(()=>{
        // FileView에서 선택했을때, FileList 추가
        if(current === null) return
        var isOpened = getIndexInFileList()
        if(isOpened >= 0) {   
            if(isOpened === curSelected) return
            setCurSelected(isOpened)
            return
        }
        var tempList = FileList
        tempList.push(current)
        setFileList(tempList)
        setCurSelected(FileList.length-1)
    },[current])

    useEffect(()=>{
        if(curSelected == -1) 
            if(FileList.length <= 0) return
            else setCurSelected(0)
        else setCurFiletext(FileList[curSelected].fileContent)
    },[curSelected])

    const getIndexInFileList = () => {
        // 단순비교 : curdata {filename, filepath, filetype, fileContent}
        var cur_text = JSON.stringify({a:current.filename, b:current.filepath})
        for(var i = 0; i<FileList.length; i++) {
            if(cur_text !== JSON.stringify({a:FileList[i].filename, b:FileList[i].filepath})) continue
            return i
        }
        return -1 // not exist.
    }
    // Drag해서 FileTab 순서 변경 참고사이트
    // https://avada.tistory.com/1375
    // https://r4bb1t.tistory.com/26 
    const removeFileinFileList = async(data)=>{
        const index_ = FileList.indexOf(data)
        var newFileList = FileList.filter((item)=> item !== data)
        await setFileList(newFileList)
        setCurSelected(newFileList.length > index_ ? index_ : -1)
        if(newFileList.length == 0) {
            setFileList([{fileContent:"", filename:"untitled", filepath:null, filetype:"text"}])
            setCurSelected(0)
        }
    }
    
    return (
        <div className = "IDE-Editor-main">
            <div className = "IDE-Editor-function">
                <div className ="IDE-Editor-FileList">
                {
                    FileList.map((data, index)=> {
                        if(data === null) return
                        return <FileType File={data} index={index}
                        SelectedIndex = {curSelected}
                        onSelected={()=>{setCurSelected(index)}}
                        onClosed={()=>removeFileinFileList(data)}/>
                    })
                }
                </div>
                <div className = "IDE-Editor-splitscreen">
                    <img src = {SplitScreen} alt=""/>
                </div>
            </div>
            <div className = "IDE-Editor-contents">
                { curSelected!==-1 && <TextEditor code={curFiletext} File={current}/> }
            </div>
        </div>
    )
}

export default IDEEditor