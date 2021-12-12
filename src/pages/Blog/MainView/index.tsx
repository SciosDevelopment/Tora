import React, { useState, useEffect } from 'react'
import BlogItem from './BlogItem'
import Searchbar from '../../../components/common/Searchbar'
import axios from 'axios'
import {history} from '../../../configureStore'
// PC : Pagination, Mobile : Infinite Scroll UI.

const BlogMainView = (props) =>{
    var {query, sorted} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [BlogList, setBlogList] = useState([])
    const [mIndex, setmIndex] = useState(16)
    
    useEffect(()=>{
        if(sorted !== "new" || sorted !== "best") sorted = "new"
        if(query==="\n") query=""
        const data = {"post": {"kind": "blog", "search_text": query, "sort": sorted }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => {setBlogList(res.data.data)})
        .catch((e)=>{setBlogList([])})
        window.addEventListener('scroll', infiniteScroll, true)
    }, [query])
    
    
    // 검색 구현
    const Search = (text) =>{
         // 검색어가 존재하지않을때, 검색어 입력해주세요 띄우기
        if(text==="") {
            alert("검색어를 입력해주세요")
            return
        }
        history.push('/blog/new/'+ text)
    }

    const infiniteScroll = () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        let clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight >= scrollHeight) setmIndex(mIndex+12)
    }

    return (
        <div className="blogview">
            <div className="header">
                <div className="search">
                    <Searchbar onClick={Search}/>
                </div>
                <div className = "sort">
                    <div className = "container">
                        <div className = "wapper">
                            <div className = "sub1">
                                <div onClick={()=>history.push('/blog/best/\n')}>Best</div>
                            </div>
                            <div className = "sub2">
                                <div onClick={()=>history.push('/blog')}>Newest</div>
                            </div>
                        </div>
                        <div className = "newproject">
                            <input type='submit' value="Write blog" onClick={()=>history.push('/blog/write')}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                    {
                        BlogList.length !== 0 ?
                        BlogList.map((item, index) => {
                        if(index >= mIndex) return
                        return <BlogItem id={item.id}
                                    title={item.attributes.title}
                                    desc={item.attributes.content}
                                    user_name={item.attributes.user_name}
                                    user_image={item.attributes.user_photo.url}
                                    score={item.attributes.score}
                            />})
                        : 
                        /* 임시 : page 중요*/
                        <div>Contents is nothing</div> 
                    }
            </div>
        </div>
    )
}

export default BlogMainView