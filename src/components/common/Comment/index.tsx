import React, { useEffect, useState } from 'react'
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
        <div className = "comment">
            <div className = "header">
                <div className = "parents">
                    <p>{parentData === undefined ? null : <a href={`#${parentData}`}>#{parentData}</a>}</p>
                </div>
                <div className = "date">
                    <p>{moment(data.attributes.created_at).format("YYYY.MM.DD")}</p>
                </div>
            </div>
            <div className = "body">
                <div className = "context" id={`content${data.id}`}/>
                <div className = "info">
                    <div className = "user">
                        <div className = "like-reply">
                            <div className = "like">
                                <img src = {Hearticon}/>
                                <p>{data.attributes.score}</p>
                            </div>
                            <div className = "reply">
                                <img src = {Replyicon} onClick={()=>setIsOpen(!isOpen)}/>
                                <p>{data.attributes.comments_list.data.length}</p>
                            </div>
                        </div>
                        <div className = "profile">
                            <img src = {Profile}></img>
                            <p>{data.attributes.user_name}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="buttonlist">
            { data.attributes.depth < 5 && (<button onClick={()=>openReply(data.id, "reply")}>reply</button>)}
                <button onClick={()=>openReply(data.id, "edit")}>edit</button>
                <button onClick={removeComment}>delete</button>
            </div>
        
        </div>
        {
            isOpen ? 
            (
                <div className = "replylist" style={{ width: "95%", marginLeft: "5%" }}>
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