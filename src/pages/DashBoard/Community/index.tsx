import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CommunityItem from './Item'

const DashBoardCommunity = (props) => {
    const {userId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [CommunityList, setPostList] = useState([])

    useEffect(()=>{
        if(userId == -1) return
        const data = {post: {kind: "free_board", search_text: "", sort: "new" }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => {
            const list = res.data.data.filter(data => data.attributes.user_id == userId)
            setPostList(list)
        })
        .catch((e)=>{setPostList([])})
    }, [userId])

    // 데이터 부분
    return (
        <div className = "community">
            <p>My Community</p>
            {
                CommunityList.length !== 0 ?
                CommunityList.map((item) => {return <CommunityItem item={item}/>})
                    : 
                    /* 임시 : page 중요 */
                    <div>Contents is nothing</div> 
            }
        </div>
    )
}

export default DashBoardCommunity