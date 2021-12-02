import ContextMenu from '../ContextMenu'
import {target} from '.'

const EditorContextMenu = (props) => {
    const {target: target_} = props

    const testFunc = () =>{
        console.log(target)
    }
    const menuItems = [
        { title: '정의로 이동', shortcut: null, onClick: () => {alert('Item 1 clicked')}},
        { title: '타입정의로 이동', shortcut: null, onClick: () => {alert('Item 2 clicked')}},
        { title: '구현으로 이동', shortcut: null, onClick: () => {alert('Item 3 clicked')}},
        { title: '줄번호로 이동', shortcut: null, onClick: () => {alert('Item 4 clicked')}},
        { title: '-'},
        { title: '중단점 설정/제거', shortcut: "F3", onClick: testFunc},
        { title: '북마크 추가/제거', shortcut: "F4", onClick: () => {alert('Item 6 clicked')}},
        { title: '검색', shortcut: "Ctrl+F", onClick: () => {alert('Item 7 clicked')}},
        { title: '-'},
        { title: '모두 선택', shortcut: "Ctrl+A", onClick: () => {alert('Item 8 clicked')}},
        { title: '전체화면모드', shortcut: "Alt+Shift+W", onClick: () => {alert('Item 9 clicked')}}
    ]
    return (<ContextMenu target={target_} items={menuItems}/>)
}

export default EditorContextMenu