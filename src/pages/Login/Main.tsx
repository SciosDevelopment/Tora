import Header from '../../components/common/Header/Header'
import Footer from './Footer'
import LoginView from './View/LoginView'
import RegisterView from './View/RegisterView'
import ResetPasswordView from './View/ResetPasswordView'
import SecessionView from './View/SecessionView'

const LoginMain = (props) => {
    const {page} = props    
    
    const renderView = () => {    
        switch(page) {
            case "login":       return <LoginView/>
            case "signup":      return <RegisterView/>
            case "reset_pw":    return <ResetPasswordView/>
            case "secess":      return <SecessionView/>
        }
    }

    return (
        <div className="loginPage">
            <Header/>
            <div className = "body">
                <div className = "background">
                    <div className = "wrapper"> 
                        {renderView()}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginMain