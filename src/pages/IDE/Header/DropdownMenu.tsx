import File from './Dropdown/File'
import Edit from './Dropdown/Edit'
import View from './Dropdown/View'
import Run from './Dropdown/Run'
import './style/DropdownMenu.scss'

const DropdownMenu = () => {

    return (
        <div className="IDE-function">
            <File/>
            <Edit/>
            <View/>
            <Run/>          
        </div>
    )
}

export default DropdownMenu