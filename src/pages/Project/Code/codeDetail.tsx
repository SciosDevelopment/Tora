import { useEffect, useState } from "react"
import { monaco } from "react-monaco-editor"
import TextEditor from "src/components/common/TextEditor"

const CodeDetail = (props) => {
    const {projectId, data, readonly} = props    
    const [model, setModel] = useState(
        monaco.editor.createModel("Hello, world", "javascript")
    )


    useEffect(()=>{
        console.log("test")
    },[readonly])
    
    return (
        <div className="projectCodeDetail">
            <TextEditor model={model} readonly={readonly}/>
        </div>
    )
}

export default CodeDetail