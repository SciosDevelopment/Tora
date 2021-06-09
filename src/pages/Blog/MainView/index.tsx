import React, { FunctionComponent, useState } from 'react'
import './style/MainView.scss'
import BlogItem from './BlogItem'
import Searchbar from '../../../components/common/Searchbar'

// PC : Pagination, Mobile : Infinite Scroll UI.
const BlogMainView :FunctionComponent = () =>{
    const ProjectSearchQuery = null // 검색한 결과를 저장하는 변수 : 전역변수로 지정할 예정
    
    const initData = () => {
        if(ProjectSearchQuery != null) return Array()
        return Array(
            {key : 0, title : "text", desc:"desc", lang:"c++", like:500},
            {key : 1, title : "text", desc:"desc", lang:"c++", like:200},
            {key : 2, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 3, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 4, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 5, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 6, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 7, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 8, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 9, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 10, title : "text", desc:"desc", lang:"c++", like:120},
            {key : 11, title : "text", desc:"desc", lang:"c++", like:120},
        )
    }

    //const [newitem, setNewitem] = useState("")
    const [ProjectList, setProjectList] = useState(initData)
    
    const addItem = () => { // 검색 결과 더보기
        const newItem = { 
            key : 1 + ProjectList.length,
            title : "text",
            desc: "desc",
            lang: "java",
            like: 230    
        }

        const list_ = [...ProjectList]
        list_.push(newItem)
        setProjectList(list_)
    }

    return (
        <div className="Blog-View">
        <div className="Blog-View-Title">
            
            <div className="Blog-View-Search">
                <Searchbar/>
            </div>
            <div className = "Blog-View-Sort">
                <div className = "Blog-View-container">
                    <div className = "Blog-View-wrapper">
                        <div className = "Blog-View-wrapper-sub1">
                            <a >Best</a>
                        </div>
                        <div className = "Blog-View-wrapper-sub2">
                            <a >Newest</a>
                        </div>
                    </div>

                    <div className = "Blog-View-newproject">
                    <input type='submit' value="New project"></input>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="Blog-View-List">
                {
                ProjectList.map(item => {
                    return (
                        <BlogItem key={item.key} title={item.title} desc={item.desc} lang={item.lang} like={item.like}/>
                        )
                    })
                }
        </div>
        


        <div className="Blog-View-ListBtnArea">
                <button onClick={addItem} id="BtnAPVListAdd"/>
        </div>
    </div>
    )
}

export default BlogMainView