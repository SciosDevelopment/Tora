import React, {useEffect, useState} from 'react'
import PostItem from './PostItem'
import axios from 'axios'
import Pagination from '../../../../components/common/Pagination'

const PostItemView = (props) => {
    var {query, sorted} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const limit = 10
    const [PostList, setPostList] = useState([])
    const [curPage, setCurPage] = useState(1)
    const offset = (curPage - 1) * limit

    useEffect(()=>{
        if(sorted !== "new" || sorted !== "best") sorted = "new"
        if(query==="\n") query=""
        const data = {"post": {"kind": "free_board", "search_text": query, "sort": sorted }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => {setPostList(res.data.data)})
        .catch((e)=>{setPostList([])})
    }, [query])

    // 데이터 부분
    return (
        <div className = "postlist">
                {
                PostList.length !== 0 ?
                PostList.slice(offset, offset+limit).map((item) => {return <PostItem item={item}/>})
                : 
                    /* 임시 : page 중요 */
                <div>Contents is nothing</div> 
                
                }
                
                {
                PostList.length !== 0 &&
                    <Pagination total={PostList.length}
                    limit={limit}
                    page={curPage}
                    setPage={setCurPage}/>
                }
        </div>
    )
}

export default PostItemView