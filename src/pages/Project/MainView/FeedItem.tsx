import { useEffect, useState } from 'react'
import moment from 'moment'
import iconFeedUser from '../../../img/icon_feed_user.png'
import iconFeedCheck from '../../../img/icon_feed_check.png'
import iconFeedEyes from '../../../img/icon_feed_eyes.png'
import userSample from '../../../img/user_sample.png'

const FeedItem = (props) => {
    const {data} = props
    const [feed, setFeed] = useState({img:"", type:"", content:"content", date:"2000-01-01"})

    // userImg 설정 제외
    useEffect(()=>{setFeed({...feed, type:data.attributes.event_type, content:data.attributes.content, date: data.attributes.created_at})},[])

    const setType = ()=>{
        // temp state
        switch(feed.type) {
            case "create":
                return <img src={iconFeedUser} alt="icon user"/>
            case "submit":
                return <img src={iconFeedCheck} alt="icon check"/>
            case "review score":
                return <img src={iconFeedEyes} alt="icon eyes"/>
            default:
                return <img src={iconFeedUser} alt="icon user"/>
        }
    }

    return (
        <div className="line">
            {setType()}
            <img src={userSample} className='img_user_sample' alt="user"/> {/* user img 설정 필요 */}
            <p> {feed.content}
                <span className="date">{moment(feed.date).format("YYYY.MM.DD")}</span>
            </p>
        </div>
    )
}

export default FeedItem