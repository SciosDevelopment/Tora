import './style/Maintext.scss'
import moment from 'moment'
import Profile from '../../../../img/profile3.png'
import Option from '../../../../img/modify.png'
import { useEffect } from 'react'

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

/* contents markdown부분 참조 : https://velog.io/@alskt0419/React-markdown-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EA%B8%B0 */

const BlogDetailMaintext = (props) => {
    const {data} = props
    useEffect(()=>{
        const viewer = new Viewer({
            el: document.querySelector('.Blog-Detail-maintext-contents'),
            initialValue: data.content,
          })

        console.log(data.content)
    },[data.content])
    return (
        <div className = "Blog-Detail-maintext-main">
            <div className = "Blog-Detail-maintext-top">
                    <div className = "Blog-Detail-maintext-title">
                        <p>{data.title}</p>
                    </div>

                    <div className = "Blog-Detail-maintext-tag">
                        <p>{data.tags}</p> {/* 태그 클릭시 태그 검색결과로 이동 구현 필요 */}
                    </div>

                    <div className = "Blog-Detail-maintext-option">
                        <img src={Option} alt=""/> {/* 수정, 삭제 버튼 활성화 및 기능 연결 */}
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
                <img src = {Profile}/> {/* profile image 경로 및 user_id를 통한 id값을 가져오는 부분이 필요 */}
                <p>{data.user_id}</p>
            </div>
        </div>
    )
}

export default BlogDetailMaintext