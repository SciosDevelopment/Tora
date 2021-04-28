import React, {FunctionComponent, useState} from 'react'
import './style/LoginView.scss'

const LoginView:FunctionComponent<any> = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleChange = (e) => {
        const{ target : {name, value} } = e
        console.log(e.target.name);
        if(name === "email"){
            setUserEmail(value);
        }
        else if(name === "password"){
            setUserPassword(value);
        }
    }

    const gotoRegister = () => {
        window.location.href = '/register';
    }

    const gotoReset = () => {
        window.location.href = '/reset_pw'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className = "LoginView-main">
        <div className = "Login-main-container">
            <form className = "Login-input-container" onSubmit ={handleSubmit}>
                <div>
                    <p>Email Address</p>
                    <div className = "Login-input">
                        <input name = "email" type = "input" required value = {userEmail} onChange = {handleChange}/>
                    </div>
                </div>
                <div>
                    <p>Password</p>
                    <div>
                        <input name = "password" type = "password" required value = {userPassword} onChange = {handleChange}/>
                    </div>
                </div>

                <button>Login</button>
               
            </form>

            <div className = "Login-button-etc-info-container">

                <div className = "Login-etc-info">
                    <p onClick = {gotoRegister}>Sign up for Tora</p>
                    <p onClick = {gotoReset}>Search Email Address</p>
                    {/* <p>Social Login</p> */}
                </div>
                <div className = "Social-login-container">
                </div>
            </div>

        </div>
        <div className = "Login-main-text-area">
            <div className = "Login-main-title-area">
                {
                    `Built for
                    developers`
                }
            </div>
            <div className = "Login-main-description-area">
                <p>Tora is a development platform inspired by the way you work. From open source to business, 
                   you can host and review code, manage projects, and build software alongside 50 million developers.</p>
            </div>
        </div>
    </div>
    )
}

export default LoginView