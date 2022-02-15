import React from 'react'
import feedLine from '../../../img/feed_line.png'
import FeedItem from './FeedItem'

const FeedList = (props) => {
    const {projectId} = props
    const tempdata = [
        {type: "user", user:"", content: "Nicolas Serrano가 참여하였습니다.", date: "Oct 21 at 12:56"},
        {type: "check", user:"", content: "added the <mark>new-bug</mark>", date: "Oct 21 at 12:56"},
        {type:"request", user:"", content: "Nicolas Serrano가 풀리퀘스트 신청으로 요청", date: "Oct 21 at 12:56"},
        {type:"check", user:"", content: "added the <mark>new-bug</mark>", date: "Oct 21 at 12:56"},
    ]
    
    return (
        <div className="feedbox innerShadow2">
            <div className="top_title">Project feed</div>
            <div className="btm">
            
                {tempdata.map((d,idx)=>{
                    return <>
                    <FeedItem type={d.type}
                                user={d.user}
                                content={d.content}
                                date={d.date}/>
                    {idx !== tempdata.length-1 && <p><img src={feedLine} alt="line"/></p>}
                    </>
                })}
            </div>
        </div>
    )
}

export default FeedList