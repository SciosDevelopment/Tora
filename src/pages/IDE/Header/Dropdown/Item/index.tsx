import './style/DropdownItem.scss'

const DropdownItem = (props) => {
    const {title, shortcut, onAction} = props
    
    return (
        <a className="dropdown-item" onClick={onAction}>
            <p>{title}</p>
            <p>{shortcut}</p>
        </a>
    )
}

export default DropdownItem