import Header from '../../components/common/Header/Header'
import LoginView from './LoginView/LoginView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'

const LoginMain = () => {
    return (
        <>
        <Header/>
        <div className = "Login-body-wrap">
            <div className = "Login-body-background">
                <div className = "Login-body-view">
                        <LoginView/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default LoginMain