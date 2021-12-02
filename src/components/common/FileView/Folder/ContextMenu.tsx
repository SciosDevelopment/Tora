import ContextMenu from '../../ContextMenu'

const FolderContextMenu = (props) => {
    const {target, route, id} = props
    const menuItems = [
        { title: '새로만들기', shortcut: "Ctrl+N", onClick: () => {alert('Item 1 clicked')}},
        { title: '복사', shortcut: "Ctrl+C", onClick: () => {alert('Item 2 clicked')}},
        { title: '붙여넣기', shortcut: "Ctrl+V", onClick: () => {alert('Item 3 clicked')}},
        { title: '삭제', shortcut: "Delete", onClick: () => {alert('Item 4 clicked')}},
        { title: '이름변경', shortcut: "F2", onClick: () => {alert('Item 5 clicked')}},
        { title: '경로복사', shortcut: null, onClick: () => {alert('Item 6 clicked')}},
        { title: '폴더공유하기', shortcut: null, onClick: () => {alert('Item 7 clicked')}},
        { title: '파일 내보내기(다운로드)', shortcut: null, onClick: () => {alert('Item 8 clicked')}},
        { title: '속성', shortcut: "Ctrl+O", onClick: () => {alert('Item 9 clicked')}}
    ]
    
    return (<ContextMenu target={target} items={menuItems}/>)
}

export default FolderContextMenu