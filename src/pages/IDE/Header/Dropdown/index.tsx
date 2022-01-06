import DropdownItem from './Item'

const Dropdown = (props) => {
    const {title, data} = props
    
    return (
        <div className = "dropdownmenu">
            <button className = "title">{title}</button>
            <div className = "contents">
                {
                data.map((item) => 
                    <DropdownItem 
                     title = {item.title}
                     shortcut = {item.shortcut}
                     onAction={item.onAction}/>)}
            </div>               
        </div>
    )
}

export default Dropdown