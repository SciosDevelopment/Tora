import Header from '../../../components/common/Header/Header'
import MainText from './MainText'
import CommentList from '../../../components/common/CommentList'

import { useState, useEffect } from 'react'
import {history} from '../../../configureStore'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import useUser from '../../../hooks/useUser'

const PostDetailMain = (props) => {
    const {id} = props.match.params
    const [Post, setPost] = useState({title:"0", tags:"0",content:"0", created_at:"0",
                                      view_cnt:0, score:0, user_id:0, user_name:"", comments_count:0, profileImage:""})
    const [cookies] = useCookies(['ToraNoID'])
    const {onGetUserID} = useUser()
    const [Comments_List, setCommentList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    
    useEffect(()=> {
        // post list sorted.
        if(id === "best" || id === "new") {
            history.replace(`/post/${id}/\n`) 
            return
        }

        axios.get(`${SERVER_IP}/api/v1/posts/${id}`).then((res)=>{
            const posts_attr = res.data.data.attributes
            const data_ = { title:posts_attr.title, tags:posts_attr.tags,
                            content:posts_attr.content, created_at:posts_attr.created_at,
                            view_cnt:posts_attr.view_cnt, score:posts_attr.score,
                            user_id:posts_attr.user_id, user_name:posts_attr.user_name, 
                            comments_count:posts_attr.comments_count, profileImage: !posts_attr.user_photo.url ? "": SERVER_IP + posts_attr.user_photo.url }
            setPost(data_)
            setCommentList(posts_attr.comments_list.data)
        }).catch(()=>{
            // 404 error : 글이 존재하지 않는 경우
            alert("글이 존재하지 않습니다.")
            history.goBack()
        })   
    }, [])
    
    const editPost = () => {
        if(cookies.ToraNoID != Post.user_id && onGetUserID != Post.user_id) return
        history.push(`/post/edit/${id}`)
    }

    const deletePost = () => {
        if(cookies.ToraNoID != Post.user_id && onGetUserID != Post.user_id) return
        if(window.confirm("삭제하시겠습니까?") === true ) {
            const data_ = { post: { id: id } }
            axios.put(`${SERVER_IP}/api/v1/posts/destroy`, data_).then((res)=>{
                alert("글이 삭제되었습니다.")
                history.goBack()
            }).catch((e)=>{
                if(e.response) {
                    var status = e.response.status // or use message
                    // - 401 "Do not have permission" : 자신의 글이 아님   
                    if(status === 401) {
                        alert("로그인이 필요합니다.")
                        history.replace("/login")
                    }
                    // - 404 "Post could not be found" : 글을 찾을 수 없음 
                    // - 404 "Invalid parameter" : 파라미터 오류
                    if(status === 404) alert("이미 삭제된 글입니다.")
                    if(status === 400) alert("글을 삭제하는데 에러가 발생했습니다.")
                    
                    // 서버 연결 문제일때 : temp-status
                    if(status >= 500) alert("server is dead")
                }
                else if(e.request) {
                    // temp
                    alert("server is dead")
                    console.log(e.request)
                }
                else console.log('Error', e.message)
          })   
        }
    }
    
    return (
        <div className="postdetailpage">
            <Header/>
            <div className = "container">
                <div className = "sidebutton">
                    {/* 사이드버튼 준비 */}
                </div>

                <div className = "content">
                    <div className = "container">
                        <div className = "maintext">
                            <MainText data={Post} showOptions={()=>setIsOpen(!isOpen)}/>
                        </div>

                        <div className = "comments">
                            <CommentList list={Comments_List} post_id={id}/>
                        </div>
                    </div>
                </div>

                <div className = {isOpen ? "optionMenu" : "optionMenuClose"} >
                    <button className="btnOption" onClick={editPost}>수정</button>
                    <button className="btnOption" onClick={deletePost}>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetailMain