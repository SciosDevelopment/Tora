import React, { FunctionComponent, useState} from 'react';
import {Link} from 'react-router-dom'
import './style/MyPageListFolder.scss'
import ListFolderItem from './FolderItem/ListFolderItem';

const MyPageListFolder:FunctionComponent = () => {

    const ProjectSearchQuery = null

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
        <div className = "Mypage-list-folder-main">
                <div className="Mypage-list-folder-view">
                    {
                        ProjectList.map(item => {
                            return (
                            <Link to="/find">
                                <ListFolderItem key={item.key} title={item.title} desc={item.desc} lang={item.lang} like={item.like}/>
                            </Link>
                            )
                        })
                    }
                </div>
            <div className="Mypage-list-folder-BtnArea">
                <button onClick={addItem} id="Mypage-list-folderAdd"/>
            </div>
        </div>
    );
};

export default MyPageListFolder;