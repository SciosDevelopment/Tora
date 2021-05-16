import React, {useEffect, useState} from 'react'
import './style/MainView.scss'
import Searchbar from '../../../components/common/Searchbar'
import PostItem from './PostItem'

const PostMainView = () => {
    return (
        <div className = "Post-Mainview">
            <div className = "Post-Mainview-title">
                <div className="Post-Mainview-search">
                    <Searchbar/>
                </div>
                <div className ="Post-Mainview-sort">
                    <div className = "Post-Mainview-container">
                            <div className = "Post-Mainview-wrapper">
                                <div className = "Post-Mainview-wrapper-sub1">
                                    <a>Best</a>
                                </div>
                                <div className = "Post-Mainview-wrapper-sub2">
                                    <a>Newest</a>
                                </div>
                            </div>
                            <div className = "Post-Mainview-newproject">
                                <input type='button' value="New project"/>
                            </div>
                    </div>
                </div>
            </div>
            
            <div className = "Post-Mainview-list">
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>
        </div>
    )
}

export default PostMainView