import './style/BlogDetailMain.scss'
import Header from 'src/components/common/Header/Header'
import Maintext from './Maintext'
import ContentList from './ContentList'
import CommentList from '../../../components/common/CommentList'
import Pagination from '../../../components/common/Pagination'
import SideButton from 'src/components/common/SideButton/SideButton'

import { useState, useEffect } from 'react'
import {history} from '../../../configureStore'
import axios from 'axios'

const BlogDetailMain = (props) => {
    const {id} = props.match.params
    const [BlogPost, setBlogPost] = useState({title:"0", tags:"0",content:"0", created_at:"0", view_cnt:0, score:0, user_id:0, user_name:"", comments_count:0})
    const [WritingList, setWritingList] = useState(Array())
    const [Comments_List, setCommentList] = useState(Array())
    
    const [isOpen, setIsOpen] = useState(false)
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    
    const [curPage, setCurPage] = useState(1)
    const [postsPerPage, _] = useState(4)
    const indexOfLast = curPage * postsPerPage
    const indexOfFirst = indexOfLast - postsPerPage
    
    const currentPosts = (tmp) => {
        let currentPosts = 0
        currentPosts = tmp.slice(indexOfFirst, indexOfLast)
        return currentPosts
    }

    useEffect(()=> {
        if(id === "best" || id === "new") {
            history.replace(`/blog/${id}/\n`) 
            return
        }

        axios.get(`${SERVER_IP}/api/v1/posts/${id}`).then((res)=>{
            const posts_attr = res.data.data.attributes
            const data_ = { title:posts_attr.title, tags:posts_attr.tags,
                            content:posts_attr.content, created_at:posts_attr.created_at,
                            view_cnt:posts_attr.view_cnt, score:posts_attr.score,
                            user_id:posts_attr.user_id, user_name:posts_attr.user_name, comments_count:posts_attr.comments_count }
            
            setBlogPost(data_)
            setWritingList(posts_attr.user_posts.filter((element)=>element.kind ==="blog"))
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
        <div className = "Blog-Detail">
            <div className = "Blog-Detail-left-button">
                <SideButton/>
            </div>
            <div className = "Blog-Detail-main">
                <div className = "Blog-Detail-view">
                    <div className = "Blog-Detail-maintext-view">
                        <Maintext data={BlogPost} showOptions={()=>setIsOpen(!isOpen)}/>
                    </div>
                    <div className = "Blog-Detail-list-view">
                        <ContentList data={currentPosts(WritingList)}/>
                        <Pagination postsPerPage={postsPerPage} totalPosts={WritingList.length} paginate={setCurPage}/>
                    </div>
                    <div className = "Blog-Detail-comments-view">
                        <CommentList list={Comments_List} post_id={id}/>
                    </div>
                </div>
            </div>
            {
                isOpen?
                    <div className = "Blog-Detail-Option">
                        <button className="btnOption" onClick={()=>history.push(`/blog/edit/${id}`)}>수정</button>
                        <button className="btnOption" onClick={()=>alert("삭제?")}>삭제</button>
                    </div>
                :
                <div className = "Blog-Detail-Option-disappear"/>
            }
            
        </div>
        </>
    )
}

export default BlogDetailMain