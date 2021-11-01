import Dropdown from "."

const FileDropdown = () => {
    const testfunc = ()=> console.log("Hello")

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