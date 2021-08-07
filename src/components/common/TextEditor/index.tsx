import React from 'react'
import MonacoEditor from 'react-monaco-editor'

const TextEditor = (props) => {
    // https://github.com/react-monaco-editor/react-monaco-editor
    const {code, File} = props
    
    const options = {
        selectOnLineNumbers: false,
        automaticLayout: true
    }
    return ( 
        <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}/>
    )
}

export default TextEditor