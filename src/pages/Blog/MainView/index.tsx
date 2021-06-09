import React, { FunctionComponent, useState, useEffect } from 'react'
import './style/MainView.scss'
import BlogItem from './BlogItem'
import Searchbar from '../../../components/common/Searchbar'
import axios from 'axios'
import {history} from '../../../configureStore'
// PC : Pagination, Mobile : Infinite Scroll UI.

const BlogMainView = (props) =>{
    var {query, sorted} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [BlogList, setBlogList] = useState(Array())

    useEffect(()=>{
        if(sorted !== "new" || sorted !== "best") sorted = "new"
        if(query==="\n") query=""
        const data = {"post": {"kind": "blog", "search_text": query, "sort": sorted }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => setBlogList(res.data.data))
        .catch((e)=>{setBlogList(Array())})
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

    const addItem = () => { // 검색 결과 더보기 : 이 방식대로 진행
        const newItem = { 
            key : 1 + BlogList.length,
            title : "text",
            desc: "desc",
            lang: "java",
            like: 230    
        }

        const list_ = [...BlogList]
        list_.push(newItem)
        setBlogList(list_)
    }
    
    return (
        <div className="Blog-View">
        <div className="Blog-View-Title">
            
            <div className="Blog-View-Search">
                <Searchbar onClick={Search}/>
            </div>
            <div className = "Blog-View-Sort">
                <div className = "Blog-View-container">
                    <div className = "Blog-View-wrapper">
                        <div className = "Blog-View-wrapper-sub1">
                            <div onClick={()=>history.push('/blog/best/\n')}>Best</div>
                        </div>
                        <div className = "Blog-View-wrapper-sub2">
                            <div onClick={()=>history.push('/blog')}>Newest</div>
                        </div>
                    </div>

                    <div className = "Blog-View-newproject">
                    <input type='submit' value="Write blog" onClick={()=>history.push('/blog/write')}></input>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="Blog-View-List">
                {
                    BlogList.length !== 0 ?
                    BlogList.map(item => {
                    return <BlogItem id={item.id}
                                  title={item.attributes.title}
                                  desc={item.attributes.content}
                                  user_id={item.attributes.user_id}
                                  score={item.attributes.score}
                        />})
                    : 
                    /* 임시 : page 중요*/
                    <div>Contents is nothing</div> 
                }
        </div>
        
        <div className="Blog-View-ListBtnArea">
                <button onClick={addItem} id="BtnAPVListAdd"/>
        </div>
    </div>
    )
}

export default BlogMainView