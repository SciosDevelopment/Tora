import Dropdown from "."
import {target} from '../../../../components/common/TextEditor'

const EditDropdown = () => {
    // vscode-keybindings : https://vscode-docs.readthedocs.io/en/stable/customization/keybindings/
    // getactions map : target.current.editor.getActions().map(a => a.id)
    // const testfunc = ()=> {if(target!=null)target.current.editor.getActions().map(a => console.log(a.id))}    
    // example 

    // 되돌리기
    const func_undo = () => {
        if (target==null) return
        target.current.editor.trigger('-','undo')
    }

    // 다시실행
    const func_redo = () => {
        if (target==null) return
        target.current.editor.trigger('-','redo')
    }
    
    // 주석 추가 / 제거
    const func_toggle_comment = () => {
        if (target==null) return
        target.current.editor.getAction("editor.action.commentLine").run()
    }

    const func_toggle_comment2 = () => {
        if (target==null) return
        target.current.editor.getAction("editor.action.blockComment").run()
    }

    // 찾기
    const func_find = () => {
        if (target == null) return
        target.current.editor.getAction("actions.find").run()
    }

    // 찾아 바꾸기
    const func_replace = () => {
        if (target==null) return
        target.current.editor.getAction("editor.action.startFindReplaceAction").run()
    }

    const EditDrop = [
        {title : "되돌리기", shortcut : null, onAction : func_undo},
        {title : "다시실행", shortcut : null, onAction : func_redo},
        {title : "라인 주석추가 / 제거", shortcut : null, onAction : func_toggle_comment},
        {title : "블럭 주석추가 / 제거", shortcut : null, onAction : func_toggle_comment2},
        {title : "찾기", shortcut : null, onAction : func_find},
        {title : "찾아바꾸기", shortcut : null, onAction : func_replace}
    ]

    return <Dropdown title="Edit" data={EditDrop}/> // render 
}

export default EditDropdown