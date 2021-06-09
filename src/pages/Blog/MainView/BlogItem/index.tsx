import React, { FunctionComponent, useState} from 'react'
import './style/BlogItem.scss'
import likeImg from '../../../../img/heart64.png'
import profile from '../../../../img/profile.png'

interface ProjectProps {
    key : number,
    title : string,
    desc: string,
    lang: string,
    like: number
}

// PC : Pagination, Mobile : Infinite Scroll UI.
const BlogItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) =>{

    const {key, title, desc, lang, like} = Props
    
    return (
        <div className="Blog-Item">
            <div className = "Blog-Item-profile-name">
                <div className = "Blog-Item-profile">
                    <input type="hidden" id="ProjectKey" value={key}/>
                    <img src = {""}/>
                </div>
            </div>
            <div className = "Blog-Item-text">
                    <div className = "Blog-Item-name">
                        <p>AWS Project New 721</p>
                    </div>
                    <div className = "Blog-Item-context">
                        <p>this is context</p>
                    </div>
                    <div className = "Blog-Item-Like-personnel">
                        <div className="Blog-Item-Like"> <img src={likeImg}/>{like}</div>
                        <div className = "Blog-Item-personnel">
                            <img src = {profile}/>
                            <p>Nicolas Serrano</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default BlogItem