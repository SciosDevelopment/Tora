import Google from '../../../../img/googleicon.png'
import Reddit from '../../../../img/redditicon.png'
import Github from '../../../../img/githubicon.png'
import Stackoverflow from '../../../../img/stackoverflowicon.png'
import Facebook from '../../../../img/facebookicon.png'
import Twitter from '../../../../img/twittericon.png'

const SnsAccounts = () => {
    return (
        <div className = "snslist">
            <div className = "leftitem">
                <img src = {Google} alt=""/>
                <input type = "button" value = "Connect"/>
            </div>
            <div className = "rightitem">
                <img src = {Reddit} alt=""/>
                <input type = "button" value = "Connect"/>
            </div>
            <div className = "leftitem">
                <img src = {Github} alt=""/>
                <input type = "button" value = "Connect"/>
            </div>
            <div className = "rightitem">
                <img src = {Stackoverflow} alt=""/>
                <input type = "button" value = "Connect"/>
            </div>
            <div className = "leftitem">
                <img src = {Facebook} alt=""/>
                <input type = "button" value = "Connect"/>
            </div>
            <div className = "rightitem">
                <img src = {Twitter} alt=""/>
                <input type = "button" value = "DisConnect"/>
            </div>
        </div>
    )
}

export default SnsAccounts