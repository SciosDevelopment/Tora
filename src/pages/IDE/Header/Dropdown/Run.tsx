import Dropdown from "."

const RunDropdown = () => {
    const testfunc = ()=> console.log("Hello")

    const RunDrop = Array(
        // 디버그 없이 실행
        // 디버그 실행
        // 유닛테스트 실행 (Start Unittest)
        // 환경변수 설정 (Setting env. Variable)
        {title : "디버그 없이 실행", shortcut : null, onAction : testfunc},
        {title : "디버그 실행", shortcut : null, onAction : testfunc},
        {title : "유닛테스트 실행", shortcut : null, onAction : testfunc},
        {title : "환경변수 설정", shortcut : null, onAction : testfunc})

    return <Dropdown title="Run" data={RunDrop}/> // render 
}

export default RunDropdown