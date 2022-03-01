import { useEffect, useState} from 'react'
import moment from 'moment'
import Profile from '../../../../../img/profile4.png'
import Option from '../../../../../img/modify.png'
import {history} from '../../../../../configureStore'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import {useCookies} from 'react-cookie'
import useUser from '../../../../../hooks/useUser'

const PostMainText = (props) => {
    const {data, showOptions} = props
    const {onGetUserID} = useUser()
    const [isWriter, setIsWriter] = useState(false)
    const [cookies] = useCookies(['ToraNoID'])

    useEffect(()=>{
        setIsWriter(onGetUserID == data.user_id && cookies.ToraNoID == onGetUserID)
        const viewer = new Viewer({
            el: document.querySelector('.postdetail'),
            initialValue: data.content,
        })
    },[data.content])
    
    return (
        <div className="wrapper">
            <div className = "header">
                <div className = "title">
                    <p>{data.title}</p>
                </div>
                <div className = "tag">
                    {data.tags.split(" ").map((tag)=>{return <p>{tag}</p>})}
                </div>
                { isWriter &&
                <div className = "option">
                    <img src={Option} alt="" onClick={showOptions}/>
                </div>}
                <div className = "detailinfo">                    
                    <div className = "wrapper">
                        <div className = "hits">
                            <p>조회수 {data.view_cnt}</p>
                        </div>
                        <div className = "comments">
                            <p>댓글 {data.comments_count}</p>
                        </div>
                        <div className = "date">
                            <p>{moment(data.create_at).format("YYYY.MM.DD")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "postdetail"/>
            <div className = "profile">
               <img src = {data.profileImage ? data.profileImage: Profile}
                 onClick={()=>history.push(`/mypage/${data.user_name}`)} 
                 onError = {(e)=> {e.currentTarget.src = Profile}}/> 
                <p>{data.user_name}</p>
            </div>
        </div>
    )
}

export default PostMainText