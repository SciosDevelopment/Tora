/* eslint-disable react-hooks/exhaustive-deps */
import './style/ContextMenuItem.scss'
const ContextMenuItem = (props) => {
    const {item, index} = props
    
    return (
        <div key={index} onClick={item.onClick} className='ContextMenu-item'>
            <p className='ContextMenu-item-text'>{item.title}</p>
            <p className='ContextMenu-item-text'>{item.shortcut}</p>
        </div>
    )   
}

export default ContextMenuItem