import HeartLogo from '../../../../img/heart64.png'
import Profile11 from '../../../../img/profile11.png'
import { Link } from 'react-router-dom'

const PostItem = (Props)=> {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {item} = Props
    
    return (
        <div className = "postitem">
            <div className = "description">
            <Link to={`/post/${item.id}`}>
                <div className = "title">
                    <p> {item.attributes.title} </p>
                </div>
                <div className = "summary">
                    <p>{item.attributes.content}</p>
                </div>
            </Link>
            </div>
            <div className = "tag">
                {item.attributes.tags.split(" ").map((data)=>{return data && <p>{data}</p>})}
            </div>
            <div className = "userinfo">
                <div className = "profile">
                    <img src = {item.attributes.user_photo.url === null 
                        ? Profile11 : `${SERVER_IP}/${item.attributes.user_photo.url}`}/>
                    <p>{item.attributes.user_name}</p>
                </div>

                    <div className = "statistics">
                        <div className = "items">
                            <p>조회수 {item.attributes.view_cnt}</p>
                        </div>
                        <div className = "items">
                            <p>댓글 {item.attributes.comments_count}</p>
                        </div>
                        <div className = "items">
                            <img src = {HeartLogo}/>
                            <p>{item.attributes.collection_count}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PostItem