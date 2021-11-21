import { useState, useEffect ,useCallback } from 'react'
import {monaco} from 'react-monaco-editor'
import TextEditor from '../../../components/common/TextEditor'
import FileType from './type'
import SplitScreen from '../../../img/splitscreen.png'
import './style/IDEEditor.scss'

//https://blog.expo.dev/building-a-code-editor-with-monaco-f84b3a06deaf : 참고 사이트

const IDEEditor = (props) => {
    const {current} = props
    const [FileList, setFileList] = useState([]) // 동기화 전용 데이터 (Editor 데이터와 비교 및 서버 데이터)
    const [curSelected, setCurSelected] = useState(-1)
    const [models, setModels] = useState([])

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
        var tempModelList = models
        var tempModel = monaco.editor.createModel(current.fileContent, current.filetype)
        const cur_data = {...current, fileState:false} // not need save : false, need save : true
        tempModelList.push(tempModel)
        tempList.push(cur_data)  
        setModels(tempModelList)
        setFileList(tempList)
        setCurSelected(FileList.length-1)
    },[current])

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
        var newFileList = FileList.filter((_, index)=> index !== index_)
        var newModels = models.filter((_, index) => index !== index_)

        await setFileList(newFileList)
        await setModels(newModels)

        setCurSelected(newFileList.length > index_ ? index_ : -1) // error handling
        if(newFileList.length == 0) setCurSelected(-1)
    }

    const setFileCheck = (index, boolean) => {
        var Files_ = FileList
        if(boolean === Files_[index].state) return
        Files_[index].fileState = boolean
        setFileList([...Files_])
    }

    const loadFileList = () => {
        return FileList.map((data, index)=> {
            if(data === null) return
            return <FileType File={data}
                Selected = {curSelected == index}
                Saved = {data.fileState}
                onSelected={()=>{setCurSelected(index)}}
                onClosed={()=>removeFileinFileList(data)}/>
        })
    }

    return (
        <div className = "IDE-Editor-main">
            <div className = "IDE-Editor-function">
                <div className ="IDE-Editor-FileList">
                    {loadFileList()}
                </div>
                <div className = "IDE-Editor-splitscreen">
                    <img src = {SplitScreen} alt=""/>
                </div>
            </div>
            <div className = "IDE-Editor-contents">
                {curSelected !== -1 && <TextEditor model={curSelected >= 0 ? models[curSelected] : null}
                    index = {curSelected >= 0 ? curSelected : null}
                    prevFile = {FileList[curSelected]}
                    setState = {(index_, boolean)=>{setFileCheck(index_, boolean)}}/>}
            </div>
        </div>
    )
}

export default IDEEditor