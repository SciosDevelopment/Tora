import { useState, useEffect } from 'react'
import {monaco} from 'react-monaco-editor'
import TextEditor from '../../../components/common/TextEditor'
import FileType from './FileType'
import SplitScreen from '../../../img/splitscreen.png'
import { UpdateFile } from 'src/components/common/FileView/File/ContextMenu'

//https://blog.expo.dev/building-a-code-editor-with-monaco-f84b3a06deaf : 참고 사이트

export let fileSave = null // 임시방식, 추후 변경
export let handleFileList_ = null

export const IDEEditor = (props) => {
    const {current, showAside, projectId} = props
    // const [openHistory, setOpenHistory] = useState([])
    const [FileList, setFileList] = useState([]) // 동기화 전용 데이터 (Editor 데이터와 비교 및 서버 데이터)
    const [curSelected, setCurSelected] = useState(-1)
    const [models, setModels] = useState([])
    
    useEffect(()=>{
        // FileView에서 선택했을때, FileList 추가
        if(current === null) return
        var isOpened = getIndexInFileList(current)
        if(isOpened >= 0) {   
            if(isOpened === curSelected) return
            setCurSelected(isOpened)
            return
        }
        var tempList = FileList
        var tempModelList = models
        var tempModel = monaco.editor.createModel(current.fileContent, current.filetype)
        const cur_data = {...current, fileState:false} // not need save : false, need save : true
        tempModelList.push(tempModel)
        tempList.push(cur_data)  
        setModels(tempModelList)
        setFileList(tempList)
        setCurSelected(FileList.length-1)
    },[current])
    
    const getIndexInFileList = (data) => {
        // 단순비교 : curdata {filename, filepath, filetype, fileContent}
        var cur_text = JSON.stringify({a:data.filename, b:data.filepath})
        for(var i = 0; i<FileList.length; i++) {
            if(cur_text !== JSON.stringify({a:FileList[i].filename, b:FileList[i].filepath})) continue
            return i
        }
        return -1 // not exist.
    }

    const handleFileList = async(data=null, method) =>{
        switch(method) { 
            case "delete": return await removeFileinFileList(data)
            case "change": return await ChangeFilenameInFileList(data)
            default: return
        }
    }

    const ChangeFilenameInFileList = async(data) => {
        const index_ = getIndexInFileList(data)
        var newFileList = FileList
        newFileList[index_].filename = data.change_name
        setFileList([...newFileList])
    }
    // Drag해서 FileTab 순서 변경 참고사이트
    // https://avada.tistory.com/1375
    // https://r4bb1t.tistory.com/26
    const removeFileinFileList = async(data)=>{
        const index_ = getIndexInFileList(data)
        var newFileList = FileList.filter((_, index)=> index !== index_)
        var newModels = models.filter((_, index) => index !== index_)
        
        setFileList([...newFileList])
        setModels([...newModels])
        
        setCurSelected(newFileList.length > index_ ? index_ : -1) // error handling
        if(newFileList.length === 0) setCurSelected(-1)
    }
    
    const setFileCheck = (index, boolean) => {
        var Files_ = FileList
        if(boolean === Files_[index].fileState) return
        Files_[index].fileState = boolean
        setFileList([...Files_])
    }
    
    const loadFileList = () => {
        return FileList.map((data, index)=> {
            if(data === null) return
            return <FileType File={data}
            Selected = {curSelected === index}
            CanSaved = {data.fileState}
            onSelected={()=>{setCurSelected(index)}}
            onClosed={()=>removeFileinFileList(data)}/>
        })
    }
    
    const saveFile = async() => {
        var Files_ = FileList
        if(curSelected < 0) return
        if(!Files_[curSelected].fileState) return
        Files_[curSelected].fileState = false //need not save state
        Files_[curSelected].fileContent = models[curSelected].getValue() 
        if(!UpdateFile(projectId, Files_[curSelected].filename, Files_[curSelected].filepath, models[curSelected].getValue())) return
        setFileList([...Files_])
        alert("저장이 완료되었습니다.") // 임시 표시
    }
    
    fileSave = saveFile
    handleFileList_ = handleFileList

    return (
        <div className = "writeBox">                 
            <div className = "writeHead">
                <div className ="left">
                    {loadFileList()}
                </div>
                <div className = "right">
                    <button className="btnDivider">
                        <img src = {SplitScreen} alt="divider" onClick={()=> showAside()}/>
                    </button>
                </div>
            </div>
            <div className = "writeBody">
                {curSelected !== -1 && <TextEditor model={curSelected >= 0 ? models[curSelected] : null}
                    index = {curSelected >= 0 ? curSelected : null}
                    prevFile = {FileList[curSelected]}
                    setState = {(index_, boolean)=>{setFileCheck(index_, boolean)}}/>}
            </div>
        </div>
    )
}

export default IDEEditor