import DropdownItem from './Item'
import './style/Dropdown.scss'

const Dropdown = (props) => {
    const {title, data} = props
    
    return (
        <div className = "dropdown-main">
            <button className = "dropdown-btn">{title}</button>
            <div className = "dropdown-contents">
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