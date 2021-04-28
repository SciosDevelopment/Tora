import Header from '../../components/common/Header/Header'
import ResetPasswordView from './ResetPasswordView/ResetPasswordView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'

const ResetPasswordMain = () => {
    return (
        <>
        <Header/>
        <div className = "Login-body-wrap">
            <div className = "Login-body-background">
                <div className = "Login-body-view">
                        <ResetPasswordView/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ResetPasswordMain