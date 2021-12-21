import {Link} from 'react-router-dom'
import LogoImg from '../../../img/tora-ide-logo@2x.png'
import DropdownMenu from './DropdownMenu'
import GitControl from './GitSystem'
import Option from './Option'

const IDEHeader = () => {
    
    return (
        <div className = "header">
            <div className = "left">
                {/* Logo 대체 필요 */}
                <Link to="/">
                    <div className="logocontainer">
                        <img src={LogoImg} alt="go to main" className="logo"/>
                    </div>
                </Link>
                <DropdownMenu/>
            </div>
            <div className = "center">
                <GitControl/>
            </div>
            <div className = "right">
                <Option/>
            </div>
        </div>
    )
}

export default IDEHeader