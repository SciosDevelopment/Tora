import './style/Maintext.scss'
import moment from 'moment'
import Profile from '../../../../img/profile3.png'
import Option from '../../../../img/modify.png'
import { useEffect } from 'react'
import {history} from '../../../../configureStore'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
// aws elastic beanstalk - auto version up

const BlogDetailMaintext = (props) => {
    const {data, showOptions} = props
    useEffect(()=>{
        const viewer = new Viewer({
            el: document.querySelector('.Blog-Detail-maintext-contents'),
            initialValue: data.content,
          })
    },[data.content])

    return (
        <div className = "Blog-Detail-maintext-main">
            <div className = "Blog-Detail-maintext-top">
                    <div className = "Blog-Detail-maintext-title">
                        <p>{data.title}</p>
                    </div>

                    <div className = "Blog-Detail-maintext-tag">
                        {data.tags.split(" ").map((tag)=>{return <p>{tag}</p>})}
                    </div>

                    {/* post 주인과 로그인정보가 일치할 때 보여주기 */}
                    <div className = "Blog-Detail-maintext-option"> 
                        <img src={Option} alt="" onClick={showOptions}/> 
                    </div>

                    <div className = "Blog-Detail-maintext-info">                    
                        <div className = "Blog-Detail-maintext-info-number">
                            <div className = "Blog-Detail-maintext-info-hits">
                                <p>조회수 {data.view_cnt}</p>
                            </div>
                            <div className = "Blog-Detail-maintext-info-comments">
                                <p>댓글 {data.comments_count}</p>
                            </div>
                            <div className = "Blog-Detail-maintext-info-date">
                                <p>{moment(data.created_at).format("YYYY.MM.DD")}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className = "Blog-Detail-maintext-contents"/>
            <div className = "Blog-Detail-view-profile">
            <img src = {data.profileImage ? data.profileImage: Profile}
                 onClick={()=>history.push(`/mypage/${data.user_name}`)} 
                 onError = {(e)=> {e.currentTarget.src = Profile}}/> 
                <p>{data.user_name}</p>
            </div>
        </div>
    )
}

export default BlogDetailMaintext