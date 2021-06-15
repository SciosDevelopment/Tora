import React, { FunctionComponent } from 'react'
import './style/BlogItem.scss'
import likeImg from '../../../../img/heart64.png'
import profile from '../../../../img/profile.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

interface ProjectProps {
    id : number,
    title : string,
    desc: string,
    user_name: string,
    score: number,
    user_image: string
}

const BlogItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) =>{

    const {id, title, desc, user_name, score, user_image} = Props
    useEffect(()=>{console.log(user_image)},[])
    return (
        <div className="Blog-Item">
            <Link to = {`/blog/${id}`}>
                <div className = "Blog-Item-profile-name">
                    <div className = "Blog-Item-profile">
                        <img src = {profile}/>
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
                                <img src = {user_image === null ? profile : user_image}/>
                                <p>{user_name}</p>
                            </div>
                        </div>
                </div>
            </Link>
        </div>
    )
}


export default BlogItem