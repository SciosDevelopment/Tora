import {useState, useEffect} from 'react'
import Comment from '../Comment'
import CommentPost from '../CommentPost'

const CommentList = (props) => {
    const {list, post_id} = props
    const [opened, setOpened] = useState(false)
    const [comment_id, setCommentID] = useState(-1)
    const [mode, setMode] = useState("reply")
    const [pc, setPC] = useState("") // edit시 필요 : post_content

    // CommentList 컴포넌트 List 구현 필요
    const setCommentID_ = (comment_num, mode, pc = "")=> {
        setMode(mode)
        if(comment_id === comment_num) setCommentID(-1)
        else setCommentID(comment_num)
        setPC(pc)
    }

    const cancel = () => setCommentID(-1)

    return (
        <div className="commentlist">
            <div className="info">
                <div className="cnt" onClick={()=>setOpened(!opened)}>댓글 {list.length} {opened ? "▽" : "▷"}</div>
            </div>
            { list.length === 0 && <div className="notExist">"댓글이 존재하지 않습니다"</div> /* 댓글이 존재하지 않을때 */}
            { opened && list.map((data_)=><Comment data={data_} onClick={setCommentID_}/>) } 
            <CommentPost comment_id={comment_id} post_id={post_id} post_content = {pc} mode={mode} Cancel={cancel}/>
            <div className="info">
                <div className="addbtn">
                        <input type="button" className="CommentBtn" id="Comment-reply" value="reply" onClick={()=>setCommentID_(post_id, "reply")}/>    
                </div>    
            </div>
        </div>
    )
}

export default CommentList