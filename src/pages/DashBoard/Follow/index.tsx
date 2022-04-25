import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FollowItem from './Item'
import { useCookies } from 'react-cookie'
const DashBoardFollow = (props) => {
    const {userId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [FollowerList, setFollowerList] = useState([])
    const [FollowingList, setFollowingList] = useState([])
    const [cookies] = useCookies(['ToraNoID'])
    
    useEffect(()=>{
        if(userId == -1) return
        const data_flw = {follow_id: userId, current_user_id: cookies.ToraNoID ? cookies.ToraNoID : ""}
        const data_flwng = {user_id: userId}
        axios.post(`${SERVER_IP}/api/v1/user/followers`, data_flw).then(res => {setFollowerList(res.data.data)}).catch((e)=>{setFollowerList([])})
        axios.post(`${SERVER_IP}/api/v1/user/following`, data_flwng).then(res => {setFollowingList(res.data.data)}).catch((e)=>{setFollowingList([])})
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
    
    return (
        <div className = "follow">
            <Followers/>
            <Followings/>
        </div>
    )
}

export default DashBoardFollow