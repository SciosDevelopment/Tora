import {useState, useEffect} from 'react'
import './style/CommentList.scss'
import Comment from '../Comment'
import CommentPost from '../CommentPost'

const CommentList = (props) => {
    const {list, post_id} = props
    const [comment_id, setCommentID] = useState(-1)
    const [mode, setMode] = useState("reply")
    const [pc, setPC] = useState("")
    // CommentList 컴포넌트 List 구현 필요

    const setCommentID_ = (comment_num, mode, pc = "")=> {
        setMode(mode)
        if(comment_id === comment_num) setCommentID(-1)
        else setCommentID(comment_num)
        setPC(pc)
    }

    const cancel = () => setCommentID(-1)

    return (
        <>
            {list.map((data_)=><Comment data={data_} onClick={setCommentID_}/>)} 
            <CommentPost comment_id={comment_id} post_id={post_id} post_content = {pc} mode={mode} Cancel={cancel}/>
            <input type="button" value="[reply]" onClick={()=>setCommentID_(post_id, "reply")}/>
        </>
    )
}

export default CommentList