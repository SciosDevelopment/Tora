import IconStar from 'src/img/icon_star.png'
import Profile11 from 'src/img/profile11.png'
import { history } from 'src/configureStore'
import { useEffect } from 'react'

const IssueItem = (Props)=> {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {item} = Props
    
    return (
        <div className = "dbIssueItem">
            <div className="bounty">
                <img src={IconStar} alt="Bounty"/>
                <p>{item.attributes.score}</p>
            </div>
            <div className = "description" onClick={()=>history.push(`/community/issue/${item.id}`)}>
                <div>
                    <div className = "title">
                        <p> {item.attributes.title} </p>
                    </div>
                    <div className = "tag">
                        {item.attributes.tags.split(",").map((data)=>{return data && <p>{data}</p>})}
                        <p>{item.attributes.issue_grade}</p>
                        <p>{item.attributes.issue_type}</p>
                    </div>
                </div>
                
                <div className = "summary">
                    <p>{item.attributes.content}</p>
                </div>
            </div>
            
            <div className = "details">
                <div className = "items">
                    <p>{item.attributes.view_cnt}</p> {/* 조회수 */}
                </div>
                <div className = "items">
                    <p>{item.attributes.comments_count}</p> {/* 댓글 */}
                </div>
                <div className = "items">
                    <img src = {IconStar}/>
                    <p>{item.attributes.comments_count}</p>
                </div>
                <div className = "items">
                    {/* <p>{item.attributes.comments_count}</p> */} 
                    {/* updated time */}
                    <img src = {item.attributes.user_photo.url === null 
                        ? Profile11 : `${SERVER_IP}/${item.attributes.user_photo.url}`}
                        alt={item.attributes.user_photo.url === null ? "profile" : item.attributes.user_name}/>
                </div>
            </div>
        </div>
    )
}

export default IssueItem