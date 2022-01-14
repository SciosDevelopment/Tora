import dotenv from 'dotenv'
dotenv.config()

const GithubAuth = () => {
    
    const CLIENT_ID = process.env.REACT_APP_GITHUBAPP_ID
    const callbackURL = process.env.REACT_APP_GITHUBAPP_REDIRECTURL
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${callbackURL}`
    
    return <a href={url}>github 아이디 연동</a>
}

export default GithubAuth