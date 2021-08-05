import React, { FunctionComponent } from 'react'
import './style/BlogItem.scss'
import likeImg from '../../../../img/heart64.png'
import profile from '../../../../img/profile.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {Viewer} from '@toast-ui/react-editor'

const BlogItem = (Props) =>{
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {id, title, desc, user_name, score, user_image} = Props
    const [ThumbnailImage, setThumbnailImage] = useState(null)
    const [ThumbnailText, setThumbnailText] = useState(desc)
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{init()},[desc])
    const init = () => {initThumbNail()}
    const initThumbNail = () => {
        initThumbNailImage()
        initThumbNailText()
    }

    // BlogItem의 썸네일 이미지 추출 : 이미지들 중 맨처음 나오는 이미지를 추출
    const initThumbNailImage = () => {
        const regex = (/\((.*?)\)/g) 
        const regex_web = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        const findImage = new RegExp(regex)
        var matchArray:string[]

        while((matchArray = findImage.exec(desc)) != null) {
            // front : image인지 확인, back : url의 형태인지 확인
            if(matchArray[1].indexOf("image") >= 0 && new RegExp(regex_web).exec(matchArray[1]) !== null){
                setThumbnailImage(matchArray[1]) 
                return
            }
        }
    }

    // BlogItem의 썸네일 텍스트 추출 : 추출한 이미지데이터를 제외한 text 저장
    const initThumbNailText = () => {
        const regex = (/\!\[.*?\]\((.*?)\)/g) 
        const findSub = new RegExp(regex)
        var matchArray:string[]
        var str:string = desc

        while((matchArray = findSub.exec(desc)) != null) 
           str = str.replace(matchArray[0],"")

        setThumbnailText(str)
        setLoading(true) // 이 state를 이용하여, reload하게 해준다.
    }

    return (
        <div className="Blog-Item">
            <Link to = {`/blog/${id}`}>
                <div className = "Blog-Item-thumbnail">
                    <div className = "Blog-Item-thumbnail-image">
                        <img src = {ThumbnailImage === null ? profile : ThumbnailImage} alt="" onError = {(e)=> {e.currentTarget.src = profile}}/>
                    </div>
                </div>
                <div className = "Blog-Item-description">
                    <div className = "Blog-Item-title">
                        <p>{title}</p>
                    </div>
                    <div className = "Blog-Item-context">
                        { loading && <Viewer initialValue={ThumbnailText}/> }
                    </div>
                    
                    <div className = "Blog-Item-writer">
                        <div className="Blog-Item-Like"> <img src={likeImg} alt=""/>{score}</div>
                        <div className = "Blog-Item-profile">
                            <img src = {user_image === null ? profile : SERVER_IP + user_image} alt="" onError = {(e)=> {e.currentTarget.src = profile}}/>
                            <p>{user_name}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem