import axios from 'axios'
import React, { useEffect, useState } from 'react'
import feedLine from '../../../img/feed_line.png'
import FeedItem from './FeedItem'

const FeedList = (props) => {
    const {projectId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [feeds,setFeeds] = useState([])
    useEffect(()=>{
        const data = {activity:{ activitible_type: "Project", activitible_id: projectId}}
        axios.post(`${SERVER_IP}/api/v1/activities`, data).then((res)=>{setFeeds(res.data.data)})
    },[])

    
    return (
        <div className="feedbox innerShadow2">
            <div className="top_title">Project feed</div>
            <div className="btm">
            
                {feeds.map((fead,idx)=>{
                    return <>
                    <FeedItem data={fead}/>
                    {idx !== feeds.length-1 && <p><img src={feedLine} alt="line"/></p>}
                    </>
                })}
            </div>
        </div>
    )
}

export default FeedList