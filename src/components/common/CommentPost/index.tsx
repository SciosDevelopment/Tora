import MarkdownEditor from '../MarkdownEditor'
import './style/CommentPost.scss'
import React from 'react'
import {Editor} from '@toast-ui/react-editor'
import axios from 'axios'
import { useEffect } from 'react'

const CommentPost = (props) => {
    const {post_id, comment_id, post_content, mode, Cancel} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const editorRef = React.createRef<Editor>()    
    const mountedStyle = { animation: "inAnimation 500ms ease-in" }
    const unmountedStyle = { animation: "outAnimation 500ms ease-out", animationFillMode: "forwards"}

    useEffect(()=> { editorRef.current.getInstance().setMarkdown(post_content)}, [post_content])

    const postComment = ()=> {
        // commentable_id == 댓글의 참조 (Post의 경우, post_id), root_id : post의 ID
        if(editorRef.current.getInstance().getMarkdown() === "") {
            alert("작성내용이 존재하지않습니다.")
            return
        }

        const data = {
            "comment": { 
                    "commentable_id": comment_id, 
                    "commentable_type": comment_id === post_id ? "Post": "Comment",
                    "content": editorRef.current.getInstance().getMarkdown()
            } 
        }
        
        axios.post(`${SERVER_IP}/api/v1/comments/create`, data)
        .then((res)=>{
            alert("댓글이 등록되었습니다.")
            window.location.reload()
        })

        .catch((e)=>{
            alert("다시 시도해주세요.")
        })
    }

    const editComment = () => {
        const data = {
            "comment": { 
                    "id": comment_id, 
                    "content": editorRef.current.getInstance().getMarkdown()
            } 
        }
        axios.put(`${SERVER_IP}/api/v1/comments/edit`, data)
        .then((res)=>{
            alert("댓글이 수정되었습니다.")
            window.location.reload()
        })
        .catch((e)=>{
            alert("다시 시도해주세요.")
            console.log(e)
        })
    }

    const selectMode = () =>{
        if(mode === "reply") postComment()
        if(mode === "edit") editComment()
    }

    return (
        <div className = "CommentPost-main" style={comment_id !== -1 ? mountedStyle : unmountedStyle}>
            <div className = "CommentPost-container">
                <MarkdownEditor initialEditType="wysiwyg" editorRef = {editorRef}/>
    
                <div className = "CommentPost-button">
                    { mode==="reply" && <input type='submit' value="Comment" onClick = {selectMode}/>}
                    { mode==="edit" && <input type='submit' value="Edit" onClick = {selectMode}/>}
                    <input type='submit' value="Cancel" onClick = {Cancel}/>
                </div>
            </div>
        </div>
    )
}

export default CommentPost