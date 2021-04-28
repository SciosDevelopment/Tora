import Header from '../../components/common/Header/Header'
import RegisterView from './RegisterView/RegisterView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'

const RegisterMain = () => {
    return (
        <>
        <Header/>
        <div className = "Login-body-wrap">
            <div className = "Login-body-background">
                <div className = "Login-body-view">
                        <RegisterView/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default RegisterMain