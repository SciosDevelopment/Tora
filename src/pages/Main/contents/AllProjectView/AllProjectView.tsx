import React, { FunctionComponent, useState} from 'react'
import {Link} from 'react-router-dom'
import './style/AllProjectView.scss'
import AllProjectItem from './AllProjectItem'
import MainSearchHeader from '../../../../components/common/Searchbar/Searchbar'
// PC : Pagination, Mobile : Infinite Scroll UI.
const AllProjectView:FunctionComponent = () =>{
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
    
    const addItem = () => {
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
        <div className="AllProjectView">
        <div className="APVTitle">
            
            <div className="APVSearch">
                <MainSearchHeader/>
                {/* <form>
                    <input type="input" placeholder="Search"/>
                    <button type='submit' value="검색"><img src = {searchNavy}/></button>
                </form> */}
            </div>
            <div className = "APVSort">
                <div className = "APVSort-container">
                    <div className = "sort-wrapper">
                        <div className = "sort-wrapper-sub1">
                            <a >Best</a>
                        </div>
                        <div className = "sort-wrapper-sub2">
                            <a >Newest</a>
                        </div>
                    </div>

                    <div className = "sort-newproject">
                    <input type='submit' value="New project"></input>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="APVList">
                {
                    ProjectList.map(item => {
                        return (
                        <Link to="/find">
                            <AllProjectItem key={item.key} title={item.title} desc={item.desc} lang={item.lang} like={item.like}/>
                        </Link>
                        )
                    })
                }
        </div>
        


        <div className="APVListBtnArea">
                <button onClick={addItem} id="BtnAPVListAdd"/>
        </div>
    </div>
    )
}

export default AllProjectView