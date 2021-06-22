import './style/PostItem.scss'
import HeartLogo from '../../../../img/heart64.png'
import Profile11 from '../../../../img/profile11.png'
import { Link } from 'react-router-dom'

const PostItem = (Props)=> {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {item} = Props
    
    return (
        <div className = "Post-item-main-container">
            <div className = "Post-item-name-text-area">
            <Link to={`/post/${item.id}`}>
                <div className = "Post-item-name-area">
                    <p> {item.attributes.title} </p>
                </div>
                <div className = "Post-item-text-area">
                    <p>{item.attributes.content}</p>
                </div>
            </Link>
            </div>
            <div className = "Post-item-profile-tag">
                <p>{item.attributes.tags}</p> {/* tag 구분자에 의한 출력 */}
            </div>
            <div className = "Post-item-icon-area">
                <div className = "Post-item-img">
                    <img src = {item.attributes.user_photo.url === null 
                        ? Profile11 : `${SERVER_IP}/${item.attributes.user_photo.url}`}/>
                    <p>{item.attributes.user_name}</p>
                </div>

                    <div className = "Post-item-icon">
                        <div className = "Post-item-icon2">
                            <p>조회수 {item.attributes.view_cnt}</p>
                        </div>
                        <div className = "Post-item-icon3">
                            <p>댓글 {item.attributes.comments_count}</p>
                        </div>
                        <div className = "Post-item-icon4">
                            <img src = {HeartLogo}/>
                            <p>{item.attributes.collection_count}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PostItem