import Dropdown from "."

const ViewDropdown = () => {
    const testfunc = ()=> console.log("Hello")

   
    const ViewDrop = Array(
        //  Terminal 열기
        //  화면 구성
        //  전체화면
        //  WebView 위젯
        {title : "터미널 열기", shortcut : null, onAction : testfunc},
        {title : "화면 구성", shortcut : null, onAction : testfunc},
        {title : "전체화면", shortcut : null, onAction : testfunc},
        {title : "웹뷰 위젯", shortcut : null, onAction : testfunc})


    return <Dropdown title="View" data={ViewDrop}/> // render 
}

export default ViewDropdown