import File from './Dropdown/File'
import Edit from './Dropdown/Edit'
import View from './Dropdown/View'
import Run from './Dropdown/Run'

const DropdownMenu = () => {

    return (
        <nav>
            <File/>
            <Edit/>
            <View/>
            <Run/>          
        </nav>
    )
}

export default DropdownMenu