import React from 'react'
import Header from 'src/components/common/Header/Header'
import './style/PostDetailMain.scss'
import MainText from './MainText'
import CommentList from '../../../components/common/CommentList'
import { useState, useEffect } from 'react'
import {history} from '../../../configureStore'
import axios from 'axios'
import SideButton from '../../../components/common/SideMenu'
import ConnectButton from '../../../components/common/SideMenu/ConnectSideMenu'

const PostDetailMain = (props) => {
    const {id} = props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [Post, setPost] = useState({title:"0", tags:"0",content:"0", created_at:"0", view_cnt:0, score:0, user_id:0, user_name:"", comments_count:0})
    const [Comments_List, setCommentList] = useState(Array())
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(()=> {
        if(id === "best" || id === "new") {
            history.replace(`/post/${id}/\n`) 
            return
        }

        axios.get(`${SERVER_IP}/api/v1/posts/${id}`).then((res)=>{
            const posts_attr = res.data.data.attributes
            const data_ = { title:posts_attr.title, tags:posts_attr.tags,
                            content:posts_attr.content, created_at:posts_attr.created_at,
                            view_cnt:posts_attr.view_cnt, score:posts_attr.score,
                            user_id:posts_attr.user_id, user_name:posts_attr.user_name, comments_count:posts_attr.comments_count }
            setPost(data_)
            setCommentList(posts_attr.comments_list.data)
        }).catch(()=>{
            // 404 error : 글이 존재하지 않는 경우
            alert("글이 존재하지 않습니다.")
            history.goBack()
        })   
    }, [])

    return (
        <>
        <Header/>
        <div className = "Post-Detail">
            <div className = "Post-Detail-left-button">
                <SideButton/>
            </div>
            <div className = "Post-Detail-right-button">
                <ConnectButton/>
            </div>

            <div className = "Post-Detail-main">
                <div className = "Post-Detail-view">
                    <div className = "Post-Detail-maintext-view">
                        <MainText data={Post} showOptions={()=>setIsOpen(!isOpen)}/>
                    </div>

                    <div className = "Post-Detail-comments-view">
                        <CommentList list={Comments_List} post_id={id}/>
                    </div>
                </div>
            </div>
            {
                isOpen?
                    <div className = "Post-Detail-Option">
                        <button className="btnOption" onClick={()=>history.push(`/post/edit/${id}`)}>수정</button>
                        <button className="btnOption" onClick={()=>alert("삭제?")}>삭제</button>
                    </div>
                :
                <div className = "Post-Detail-Option-disappear"/>
            }
        </div>
        </>
    )
}

export default PostDetailMain