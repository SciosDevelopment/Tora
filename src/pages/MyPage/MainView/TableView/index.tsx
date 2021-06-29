import React, { FunctionComponent, useState} from 'react'
import './style/TableView.scss'
import TableItem from './Item'

const MypageTableView:FunctionComponent = () => {

    const ProjectSearchQuery = null
    
    const initData = () => {
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
        )
    }
    
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
        <div className = "Mypage-table-view-main">
                <div className="Mypage-table-view-container">
                    { ProjectList.map(item => <TableItem key={item.key} title={item.title} desc={item.desc} lang={item.lang} like={item.like}/>) }
                </div>
            <div className="Mypage-table-view-BtnArea">
                <button onClick={addItem}/>
            </div>
        </div>
    )
}

export default MypageTableView