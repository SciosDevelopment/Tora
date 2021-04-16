import './style/Logo.scss'
import {Link} from 'react-router-dom'
import LogoImg from '../../../img/ToraLogo@1.png'

const Logo = () => {
    return (
        <Link to="/">
            <div className="LogoContainer">
                <img src={LogoImg} alt="go to main"/>
            </div>
        </Link>
    )
}

export default Logo