import Header from '../../components/common/Header/Header'
import ChangePasswordView from './View/ChangePasswordView'
import Footer from './Footer'


const ChangePasswordMain = (props) => {
    const {token} = props.match.params

    return (
        <div className="loginPage">
            <Header/>
                <div className = "body">
                    <div className = "background">
                        <div className = "wrapper">
                            <ChangePasswordView token={token}/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default ChangePasswordMain