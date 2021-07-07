import React, { useEffect, useState } from 'react'
import './style/Comment.scss'
import Replyicon from '../../../img/replyicon.png'
import Hearticon from '../../../img/yellowstar.png'
import Profile from '../../../img/profile.png'
import moment from 'moment'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

const Comment = (props) => {
    const {data, onClick, parentData} = props
    
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{
    const viewer = new Viewer({
        el: document.querySelector(`#content${data.id}`),
        initialValue: data.attributes.content,
      })
    },[data])

    const openReply = (replyID, mode)=> onClick(replyID, mode, mode==="edit" && data.attributes.content)
    // reply ui 변경, depth에 따른 Comment ui 변경
    const removeComment = ()=> {

    }

    return (
        <>
        <div className = "Comment-main">
            <div className = "Comment-header">
                <div className = "Comment-parents">
                    {/* temp */}
                    <p>{parentData === undefined ? null : <a href={`#${parentData}`}>#{parentData}</a>}</p>
                </div>
                <div className = "Comment-date">
                    <p>{moment(data.attributes.created_at).format("YYYY.MM.DD")}</p>
                </div>
            </div>
            <div className = "Comment-body">
                <div className = "Comment-context" id={`content${data.id}`}/>
                <div className = "Comment-info">
                    <div className = "Comment-user">
                        <div className = "Comment-like-reply">
                            <div className = "Comment-like">
                                <img src = {Hearticon}/>
                                <p>{data.attributes.score}</p>
                            </div>
                            <div className = "Comment-reply">
                                <img src = {Replyicon} onClick={()=>setIsOpen(!isOpen)}/>
                                <p>{data.attributes.comments_list.data.length}</p>
                            </div>
                        </div>
                        <div className = "Comment-profile">
                            <img src = {Profile}></img>
                            <p>{data.attributes.user_name}</p>
                        </div>
                    </div>
                </div>
            </div>
               
            <div className = "Comment-footer">
                <div className="Comment-buttonlist">
                { data.attributes.depth < 5 && (<button onClick={()=>openReply(data.id, "reply")}>[reply]</button>)}
                    <button onClick={()=>openReply(data.id, "edit")}>[edit]</button>
                    <button onClick={removeComment}>[delete]</button>
                </div>
            </div>
        </div>
        {
            isOpen ? 
            (
                <div className = "Comment-replylist" style={{ width: "95%", marginLeft: "5%" }}>
                    {data.attributes.comments_list.data.map((datum)=><Comment data={datum} onClick={onClick} parentData={parentData === undefined ? data.id : parentData}/>)}
                </div>
            )
            :
            null
        }
        </>
    )

    
}

export default Comment