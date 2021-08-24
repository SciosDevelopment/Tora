import './style/PostMainText.scss'
import moment from 'moment'
import Profile from '../../../../img/profile4.png'
import Option from '../../../../img/modify.png'
import { useEffect, useState} from 'react'
import {history} from '../../../../configureStore'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import {useCookies} from 'react-cookie'
import useUser from '../../../../hooks/useUser'

const PostMainText = (props) => {
    const {data, showOptions} = props
    const {onGetUserID} = useUser()
    const [isWriter, setIsWriter] = useState(false)
    const [cookies] = useCookies(['ToraNoID'])

    useEffect(()=>{
        setIsWriter(onGetUserID == data.user_id && cookies.ToraNoID == onGetUserID)
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
                        {data.tags.split(" ").map((tag)=>{return <p>{tag}</p>})}
                    </div>
                    { isWriter &&
                    <div className = "Post-Detail-maintext-option">
                        <img src={Option} alt="" onClick={showOptions}/>
                    </div>}
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
               <img src = {data.profileImage ? data.profileImage: Profile}
                 onClick={()=>history.push(`/mypage/${data.user_name}`)} 
                 onError = {(e)=> {e.currentTarget.src = Profile}}/> 
                <p>{data.user_name}</p>
            </div>
        </div>
    )
}

export default PostMainText