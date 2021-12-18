import modify from '../../../img/tora-setting-icon.png'
import profile from '../../../img/profile4.png'
import { useEffect, useState } from 'react'
import { history } from 'src/configureStore'

const Profile = (props) => {
    const {data, isMe} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [userdata, setData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0, photo: null})
    useEffect(()=>{ setData(data) },[data])

    return (
        <div className = "profile">
            <div className = "modify">
                {isMe && <img src = {modify} onClick={()=>history.push("/mypage/me/setting")}/>}
            </div>
            <div className = "left">
                <img src = {userdata.photo === null ? profile : SERVER_IP + userdata.photo}
                    onError = {(e)=> {e.currentTarget.src = profile}}/>
                <div className = "default">
                    <div className = "name">
                        <p>{userdata.name}</p>
                    </div>
                    <div className = "description">
                        <p>{userdata.about_me === null ? "자기소개" : userdata.about_me}</p>
                    </div>
                    <div className = "email">
                        <p>{userdata.email}</p>
                    </div>
                </div>
            </div>
            <div className = "right">     
                <div className = "detail">
                    <div className = "flw">
                        <div className = "follower">
                            <p>Follower {userdata.followers}</p>
                        </div>
                        <div className = "following">
                            <p>Following {userdata.followings} </p>
                        </div>
                    </div>
                    <div className = "positionNlanguage">
                        <div className = "position">
                            <p>Position</p>
                        </div>
                        <div className = "language">
                            <p>Program Language</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile