import Header from '../../components/common/Header/Header'
import RegisterView from './RegisterView/RegisterView'
import Footer from './Footer/Footer'
import './style/LoginBody.scss'

const RegisterMain = () => {
    return (
        <>
        {/* 500MB 제공, 화상코딩 50명까지 부분 이미지 채우기 */}
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