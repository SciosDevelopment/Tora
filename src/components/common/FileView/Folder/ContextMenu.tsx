import ContextMenu from '../../ContextMenu'

const FolderContextMenu = (props) => {
    const {target} = props
    const menuItems = [
        {
            title: 'this is FolderContextMenu',
            shortcut: "Ctrl+C",
            onClick: () => {alert('Item 1 clicked')}
        },
        {
            title: 'Item 2',
            shortcut: null,
            onClick: () => {alert('Item 2 clicked')}
        },
        {
            title: '-',
        },
        {
            title: 'Item 3',
            onClick: () => {alert('Item 3 clicked')}
        },
        {
            title: 'Item 4',
            shortcut: null,
            onClick: () => {alert('Item 4 clicked')}
        },
    ]
    return (<ContextMenu target={target} items={menuItems}/>)
}

export default FolderContextMenu