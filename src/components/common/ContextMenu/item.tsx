/* eslint-disable react-hooks/exhaustive-deps */
const ContextMenuItem = (props) => {
    const {item, index} = props
    
    return (
        <div key={index} onClick={item.onClick} className='ContextMenuItem'>
            <p>{item.title}</p>
            <p>{item.shortcut}</p>
        </div>
    )   
}

export default ContextMenuItem