import React, { FunctionComponent, useEffect, useState} from 'react'
import './style/BlogItem.scss'
import likeImg from '../../../../img/heart64.png'
import profile from '../../../../img/profile.png'
import { Link } from 'react-router-dom'

interface ProjectProps {
    id : number,
    title : string,
    desc: string,
    user_id: string,
    score: number
}

// PC : Pagination, Mobile : Infinite Scroll UI.
const BlogItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) =>{

    const {id, title, desc, user_id, score} = Props

    return (
        <div className="Blog-Item">
            <Link to = {`/blog/${id}`}>
                <div className = "Blog-Item-profile-name">
                    <div className = "Blog-Item-profile">
                        <input type="hidden" id="ProjectKey" value={id}/>
                        <img src = {""}/>
                    </div>
                </div>
                <div className = "Blog-Item-text">
                        <div className = "Blog-Item-name">
                            <p>{title}</p>
                        </div>
                        <div className = "Blog-Item-context">
                            <p>{desc}</p>
                        </div>
                        <div className = "Blog-Item-Like-personnel">
                            <div className="Blog-Item-Like"> <img src={likeImg}/>{score}</div>
                            <div className = "Blog-Item-personnel">
                                <img src = {profile}/>
                                <p>{user_id}</p>
                            </div>
                        </div>
                </div>
            </Link>
        </div>
    )
}


export default BlogItem