const DropdownItem = (props) => {
    const {title, shortcut, onAction} = props
    
    return (
        <a className="dropdownitem" onClick={onAction}>
            <p>{title}</p>
            <p>{shortcut}</p>
        </a>
    )
}

export default DropdownItem