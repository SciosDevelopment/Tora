import React from 'react'
import Parser from 'html-react-parser'
import iconFeedUser from '../../../img/icon_feed_user.png'
import iconFeedCheck from '../../../img/icon_feed_check.png'
import iconFeedEyes from '../../../img/icon_feed_eyes.png'
import userSample from '../../../img/user_sample.png'



const FeedItem = (props) => {
    // request, check, user
    // html-react-parser 임시 사용
    const {type="user", user="", content="tempdata", date="time"} = props

    const setType = ()=>{
        switch(type) {
            case "user":
                return <img src={iconFeedUser} alt="icon user"/>
            case "check":
                return <img src={iconFeedCheck} alt="icon check"/>
            case "request":
                return <img src={iconFeedEyes} alt="icon eyes"/>
            default:
                return <img src={iconFeedUser} alt="icon user"/>
        }
    }


    return (
        <div className="line">
            {setType()}
            <img src={userSample} className='img_user_sample' alt="user" />
            <p>{Parser(content)}
                <span className="date">{date}</span>
            </p>
        </div>
    )
}

export default FeedItem