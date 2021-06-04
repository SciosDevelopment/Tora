import React, {FunctionComponent, useEffect} from 'react'
import './style/CommentList.scss'
import Comment from '../Comment'
import CommentPost from '../CommentPost'

const CommentList = (props) => {
    const {list, post_id} = props

    // CommentList 컴포넌트 List 구현 필요
    useEffect(()=>{
        //console.log(list)
    }, [])
    return (
        <>
            {
                /* List로 변경 */
                list.map((data_)=>{
                    return <Comment data={data_}/>
                })
            } 
            
            <CommentPost id={post_id}/>
        </>
    )
}

export default CommentList