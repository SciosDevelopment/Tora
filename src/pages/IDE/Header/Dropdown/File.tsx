import Dropdown from "."
import { useEffect } from "react"

const FileDropdown = () => {
    const testfunc = ()=> console.log("Hello")
    // hotkey mapping : https://medium.com/nerd-for-tech/using-custom-hooks-to-handle-keyboard-shortcuts-in-react-a91649a81c87
    const handleKeyDown = (event:KeyboardEvent) : void => {
        if(event.ctrlKey) {
            if(event.code === "KeyS") {
                saveFile()
                event.preventDefault()
            }           
        }
    }
    
    const saveFile = ()=> {

    }
    
    const rightClick = (event:MouseEvent) : void => {
        console.log("rightClick")
        console.log(event.target)
        event.preventDefault()
    }

    useEffect(()=>{
        window.addEventListener("contextmenu", rightClick)
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown",handleKeyDown)
            window.removeEventListener("contextmenu", rightClick)
        }
    },[])

    const FileDrop = Array(
        {title : "새로만들기", shortcut : null, onAction : testfunc},
        {title : "열기 / 최근파일열기", shortcut : null, onAction : testfunc},
        {title : "닫기", shortcut : null, onAction : testfunc},
        {title : "모두 닫기", shortcut : null, onAction : testfunc},
        {title : "저장", shortcut : null, onAction : testfunc},
        {title : "이름 변경", shortcut : null, onAction : testfunc},
        {title : "파일 복제", shortcut : null, onAction : testfunc},
        {title : "파일 삭제", shortcut : null, onAction : testfunc},
        {title : "파일 속성", shortcut : null, onAction : testfunc},
        {title : "파일 삭제", shortcut : null, onAction : testfunc},
        {title : "파일 가져오기", shortcut : null, onAction : testfunc},
        {title : "스니펫 설정", shortcut : null, onAction : testfunc})

    return <Dropdown title="File" data={FileDrop}/> // render 
}

export default FileDropdown