import './style/PostMainText.scss'
import moment from 'moment'
import Profile from '../../../../img/profile4.png'
import Option from '../../../../img/modify.png'
import { useEffect } from 'react'

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

const PostMainText = (props) => {
    const {data, showOptions} = props
    useEffect(()=>{
        const viewer = new Viewer({
            el: document.querySelector('.Post-Detail-maintext-contents'),
            initialValue: data.content,
        })
    },[data.content])
    
    return (
        <div className="Post-Detail-maintext-main">
            <div className = "Post-Detail-maintext-top">
                    <div className = "Post-Detail-maintext-title">
                        <p>{data.title}</p>
                    </div>

                    <div className = "Post-Detail-maintext-tag">
                        <p>{data.tags}</p> {/* 태그 클릭시 태그 검색결과로 이동 구현 필요 */}
                    </div>

                    {/* post 주인과 로그인정보가 일치할 때 보여주기 */}
                    <div className = "Post-Detail-maintext-option">
                        <img src={Option} alt="" onClick={showOptions}/>
                    </div>

                    <div className = "Post-Detail-maintext-info">                    
                        <div className = "Post-Detail-maintext-info-number">
                            <div className = "Post-Detail-maintext-info-hits">
                                <p>조회수 {data.view_cnt}</p>
                            </div>
                            <div className = "Post-Detail-maintext-info-comments">
                                <p>댓글 {data.comments_count}</p>
                            </div>
                            <div className = "Post-Detail-maintext-info-date">
                                <p>{moment(data.create_at).format("YYYY.MM.DD")}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className = "Post-Detail-maintext-contents"/>
            <div className = "Post-Detail-maintext-profile">
                <img src = {Profile}/> {/* profile image 경로 및 user_id를 통한 id값을 가져오는 부분이 필요 */}
                <p>{data.user_name}</p>
            </div>
        </div>
    )
}

export default PostMainText