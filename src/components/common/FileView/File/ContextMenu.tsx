import ContextMenu from '../../../../components/common/ContextMenu'

const FileContextMenu = (props) => {
    const {target, info} = props
    const menuItems = [
        { title: '열기', shortcut: "Ctrl+O", onClick: () => {alert('Item 1 clicked')}},
        { title: '파일복사', shortcut: "Ctrl+C", onClick: () => {alert('Item 2 clicked')}},
        { title: '파일붙여넣기', shortcut: "Ctrl+V", onClick: () => {alert('Item 3 clicked')}},
        { title: '삭제', shortcut: "Delete", onClick: () => {alert('Item 4 clicked')}},
        { title: '이름변경', shortcut: "F2", onClick: () => {alert('Item 5 clicked')}},
        { title: '경로복사', shortcut: null, onClick: () => {alert('Item 6 clicked')}},
        { title: '파일공유하기', shortcut: null, onClick: () => {alert('Item 7 clicked')}},
        { title: '채팅으로 파일경로전송', shortcut: null, onClick: () => {alert('Item 8 clicked')}},
        { title: '파일 내보내기(다운로드)', shortcut: null, onClick: () => {alert('Item 9 clicked')}},
        { title: '파일속성', shortcut: "Ctrl+O", onClick: () => {alert('Item 11 clicked')}}
    ]
    
    return (<ContextMenu target={target} items={menuItems}/>)
}

export default FileContextMenu