import React, {useEffect, useState} from 'react'
import Searchbar from '../../../components/common/Searchbar'
import PostItem from './PostItem'
import axios from 'axios'
import {history} from '../../../configureStore'
import Pagination from '../../../components/common/Pagination'

const PostMainView = (props) => {
    var {query, sorted} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [PostList, setPostList] = useState([])

    const [curPage, setCurPage] = useState(1)
    const [postsPerPage, _] = useState(10)
    const indexOfLast = curPage * postsPerPage
    const indexOfFirst = indexOfLast - postsPerPage

    const currentPosts = (tmp) => {
        let currentPosts = []
        currentPosts = tmp.slice(indexOfFirst, indexOfLast)
        return currentPosts
    }

    useEffect(()=>{
        if(sorted !== "new" || sorted !== "best") sorted = "new"
        if(query==="\n") query=""
        const data = {"post": {"kind": "free_board", "search_text": query, "sort": sorted }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => {setPostList(res.data.data)})
        .catch((e)=>{setPostList([])})
    }, [query])

    useEffect(()=>{ // 임시
        console.log(PostList)
    },[PostList])

    // 검색 구현
    const Search = (text) =>{
        // 검색어가 존재하지않을때, 검색어 입력해주세요 띄우기
       if(text==="") {
           alert("검색어를 입력해주세요")
           return
       }
       history.push('/post/new/'+ text)
   }

    // 데이터 부분
    return (
        <div className = "main">
            <div className = "header">
                <div className="search">
                    <Searchbar onClick={Search}/>
                </div>
                <div className ="sortlist">
                    <div className = "sort">
                        <input type = "button" value = "All"/>
                        <input type = "button" value = "Free Topic"/>
                        <input type = "button" value = "Issue"/>
                    </div>
                    <div className = "sort2">
                        <div className = "wrapper2">
                            <div className = "sub1">
                            <div onClick={()=>history.push('/post/best/\n')}>Best</div>
                            </div>
                            <div className = "sub2">
                                <div onClick={()=>history.push('/post')}>Newest</div>
                            </div>
                            <div className = "sub3">
                                <input type='button' value="Write Post" onClick={()=>history.push('/post/write')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className = "postlist">
                    {
                    currentPosts(PostList).length !== 0 ?
                    currentPosts(PostList).map(
                            (item) => {return <PostItem item={item}/>}
                        )
                        : 
                        /* 임시 : page 중요 */
                        <div>Contents is nothing</div> 
                    }
                    
                    {
                    PostList.length !== 0 &&
                     <Pagination postsPerPage={postsPerPage} totalPosts={PostList.length} paginate={setCurPage}/>
                    }
            </div>
        </div>
    )
}

export default PostMainView