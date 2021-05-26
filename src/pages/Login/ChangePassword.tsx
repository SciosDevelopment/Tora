import Header from '../../components/common/Header/Header'
import ChangePasswordView from './ChangePasswordView/ChangePasswordView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'


const ChangePasswordMain = (props) => {
    const {token} = props.match.params

    return (
        <>
        <Header/>
            <div className = "Login-body-wrap">
                <div className = "Login-body-background">
                    <div className = "Login-body-view">
                            <ChangePasswordView token={token}/>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default ChangePasswordMain