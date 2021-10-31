import Dropdown from "."

const EditDropdown = () => {
    const testfunc = ()=> console.log("Hello")

    const EditDrop = Array(
        {title : "뒤로가기", shortcut : null, onAction : testfunc},
        {title : "다시실행", shortcut : null, onAction : testfunc},
        {title : "잘라내기", shortcut : null, onAction : testfunc},
        {title : "복사", shortcut : null, onAction : testfunc},
        {title : "붙여넣기", shortcut : null, onAction : testfunc},
        {title : "북마크", shortcut : null, onAction : testfunc},
        {title : "주석영역", shortcut : null, onAction : testfunc},
        {title : "오름차순 / 내림차순 정렬", shortcut : null, onAction : testfunc},
        {title : "찾기", shortcut : null, onAction : testfunc},
        {title : "치환", shortcut : null, onAction : testfunc})

    return <Dropdown title="Edit" data={EditDrop}/> // render 
}

export default EditDropdown