import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowItem from './Item'

const DashBoardFollow = (props) => {
    const {userId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [ProjectList, setProjectList] = useState([])
    const [FollowerList, setFollowerList] = useState([])
    const [FollowingList, setFollowingList] = useState([])
    
    useEffect(()=>{
        if(userId == -1) return
        const data = { project: { search_text: "", sort: "new", user_id: userId } }
        axios.post(`${SERVER_IP}/api/v1/projects`, data).then(res => {
            setProjectList(res.data.data)
            setFollowerList(res.data.data)
            setFollowingList(res.data.data)
        })
        .catch((e)=>{setProjectList([])})
    }, [userId])
    
    const Followers = () => {
        return (
            <div className="followers">
                <p>Follower</p>
                {FollowerList.length !== 0 ?
                FollowerList.map((Follower) => {return <FollowItem item={Follower} Follower={true}/>}) : 
                /* 임시 : page 중요 */
                <div>Follower isn't exist</div> }
            </div>
        )     
    }

    const Followings = () => {
        return (
            <div className="followings">
                <p>Following</p>
                {FollowingList.length !== 0 ?
                FollowingList.map((Following) => {return <FollowItem item={Following} Follower={false}/>}) : 
                /* 임시 : page 중요 */
                <div>Follower isn't exist</div> }
            </div>
        )     
    }
    // 데이터 부분
    return (
        <div className = "follow">
            <Followers/>
            <Followings/>
        </div>
    )
}

export default DashBoardFollow