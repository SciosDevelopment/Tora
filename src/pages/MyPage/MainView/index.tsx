import ItemList from './FolderView'
import Profile from './Profile'

import { useEffect, useState} from 'react'
import axios from 'axios'

const MypageView = (props) => {
    const {username} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const[userdata, setUserData] = useState({about_me:"about_me", email:"email", followers:0, followings:0, name:"name", score:0,photo: null})
    const[isMe, setIsMe] = useState(username===undefined) // default : true

    useEffect(()=>{      
        // username이 없으면, mypage 가져오기
        if(username === undefined) {
            axios.get(`${SERVER_IP}/api/v1/user/mypage`).then(
                (res)=>{                    
                    const info_attr = res.data.data.attributes
                    const data_ = { about_me:info_attr.about_me, email:info_attr.email,
                                    followers:info_attr.followers, followings:info_attr.followings,
                                    name:info_attr.name, score:info_attr.score, photo:info_attr.photo.url}
                    setUserData(data_)
                })
                .catch((e)=>{
                        // 401 error == 새로고침시, axios header가 사라지는 현상때문에 나타남. 이부분 문제점 해결방안 찾기
                        console.log("Mypage MainView Error")
                        console.log(e)
                        setIsMe(false)
            })
        }

        // 다른 사용자정보
        else {
            setIsMe(false)
            axios.get(`${SERVER_IP}/api/v1/user/${username}`).then(
                (res)=>{                    
                    const info_attr = res.data.data.attributes
                    const data_ = { about_me:info_attr.about_me, email:info_attr.email,
                        followers:info_attr.followers, followings:info_attr.followings,
                        name:info_attr.name, score:info_attr.score, photo:info_attr.photo.url}
                        setUserData(data_)
                    //if(posts_attr.email === ) cookies email과 같으면 setIsMe true
                })
                .catch((e)=>{   
                    // 사용자를 찾을 수 없는 경우 : "찾을수없습니다" 띄우고, 이전페이지로
                    console.log(e)
            })
        }
    },[])

    return (
        <div className = "mainview">
            <div className = "profileContainer">
                <Profile data={userdata} isMe={isMe}/>
            </div>
            <div className = "itemlistContainer">
                <ItemList/>
            </div>
        </div>
    )
}

export default MypageView