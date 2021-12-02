import React, { useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor'
import ContextMenu from './ContextMenu'

export let target = null // used in the dropdownmenu

const TextEditor = (props) => {
    // https://github.com/react-monaco-editor/react-monaco-editor
    const {model, index, prevFile, setState} = props
    const EditorContainer = React.createRef<HTMLDivElement>()
    const ref = React.createRef<MonacoEditor>()
    
    useEffect(()=>{ init() },[])
    useEffect(()=>{ if(model!=null) ref.current.editor.setModel(model) },[model])
    useEffect(()=>{ target = ref },[ref])

    const init = () => {}
    const onChangeHandle = () =>{
        if(prevFile.fileState === (prevFile.fileContent!==model.getValue())) return
        setState(index,!prevFile.fileState)
    }

    const options = {
        // https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html
        selectOnLineNumbers: false,
        automaticLayout: true,
        contextmenu: false
    }

    const divStyle = {
        width:'100%',
        height:'100%',
    }

    return (
        <div className="EditorContainer" ref={EditorContainer} style={divStyle}>
            <MonacoEditor
            theme="vs-dark"
            onChange={onChangeHandle}
            options={options}
            ref={ref}/>
        <ContextMenu target={EditorContainer}/> 
        </div>
    )
}

export default TextEditor

    /* how to get whole actions in monaco-editor?
        => 참고 : https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditor.html
        => 참고 : https://stackoverflow.com/questions/62001650/how-to-open-context-menu-in-monaco-editor-based-on-line-content-in-angular
    */

    // ref.addaction 참고 : https://stackoverflow.com/questions/48745208/disable-cut-and-copy-in-context-menu-in-monaco-editor
    // custom auto-complete : https://stackoverflow.com/questions/38735644/how-to-add-auto-completion-list-in-monaco