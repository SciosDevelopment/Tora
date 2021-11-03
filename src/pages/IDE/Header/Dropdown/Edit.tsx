import Dropdown from "."
import {target} from '../../../../components/common/TextEditor'

const EditDropdown = () => {
    
    // getactions map : target.current.editor.getActions().map(a => a.id)
    // const testfunc = ()=> {if(target!=null)target.current.editor.getActions().map(a => console.log(a.id))}    
    // example 
    const testfunc = ()=> {
        if (target!=null) target.current.editor.getAction("editor.action.showContextMenu").run()
    }
    
    const EditDrop = Array(
        {title : "뒤로가기", shortcut : null, onAction : testfunc},
        {title : "다시실행", shortcut : null, onAction : testfunc},
        {title : "잘라내기", shortcut : null, onAction : testfunc},
        {title : "복사", shortcut : null, onAction : testfunc},
        {title : "붙여넣기", shortcut : null, onAction : testfunc},
        {title : "북마크", shortcut : null, onAction : testfunc},
        {title : "주석추가 / 제거", shortcut : null, onAction : testfunc},
        {title : "찾기", shortcut : null, onAction : testfunc},
        {title : "치환", shortcut : null, onAction : testfunc})

    return <Dropdown title="Edit" data={EditDrop}/> // render 
}

export default EditDropdown