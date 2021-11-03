import React, { forwardRef, useRef, useState } from 'react'
import { useEffect } from 'react'
import MonacoEditor, {monaco} from 'react-monaco-editor'
export let target = null // used in the dropdownmenu

const TextEditor = (props) => {
    // https://github.com/react-monaco-editor/react-monaco-editor
    const {code, File} = props
    const [lang, setLang] = useState("")
    const ref = React.createRef<MonacoEditor>()
    useEffect(()=>{ init() },[])

    const init = () => {
        setContextMenu(ref)
        setLang("javascript")
    }
    
    useEffect(()=>{ target = ref },[ref])
    
    const setContextMenu = (ref) => {
        // ※ 코드 수정 후 새로고침시 여러번 등록될 수 있음. 실제 프로그램에선 문제없음.
        // 코드 수정 후 저장 + url로 reload하면 해결가능
        
        // remove action : https://stackoverflow.com/questions/48745208/disable-cut-and-copy-in-context-menu-in-monaco-editor
        // custom add actions + hotkey example : https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance

        ref.current.editor.addAction({ // 예시 코드
            id: "testAlert",
            label: "testAlert",
            contextMenuGroupId: "0_testAlert", // number = order

            run: () => {
                alert("TestAlert")
            }
        })
    }

    const options = {
        // https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html
        selectOnLineNumbers: false,
        automaticLayout: true,
        contextmenu: true
    }

    return (
        <MonacoEditor
        language={lang}
        theme="vs-dark"
        value={code}
        options={options}
        ref={ref}/>
    )
}

export default TextEditor

    /* how to get whole actions in monaco-editor?
        => 참고 : https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditor.html
        => 참고 : https://stackoverflow.com/questions/62001650/how-to-open-context-menu-in-monaco-editor-based-on-line-content-in-angular
    */

    // ref.addaction 참고 : https://stackoverflow.com/questions/48745208/disable-cut-and-copy-in-context-menu-in-monaco-editor
    // custom auto-complete : https://stackoverflow.com/questions/38735644/how-to-add-auto-completion-list-in-monaco