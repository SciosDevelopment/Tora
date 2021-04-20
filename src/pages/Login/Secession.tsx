import Header from '../../components/common/Header/Header'
import SecessionView from  './SecessionView/SecessionView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'

const SecessionMain = () => {
    return (
        <>
        <Header/>
        <div className = "Login-body-wrap">
            <div className = "Login-body-background">
                <div className = "Login-body-view">
                        <SecessionView/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default SecessionMain