import {FunctionComponent} from 'react'
import Logo from '../Logo/Logo'
import OptionContainer from './OptionContainer/OptionContainer'
import './style/header.scss'

const Header : FunctionComponent = () => {
    return (
        <div className="Header">
            <div className="LogoArea">
                <Logo/>    
            </div>
            <div className="OptionArea">
                <OptionContainer/>
            </div>
        </div>    
    )
}

export default Header