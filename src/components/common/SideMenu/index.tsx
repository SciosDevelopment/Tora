import React, {useState} from 'react';
import './style/SideMenu.scss'
import {history} from '../../../configureStore'
import Modify from '../../../img/modify.png'
import Tora from '../../../img/toralogobutton.png'
import Chat from '../../../img/chatbutton.png'
import SideMenuItem from './Item';
import Custom from './Custom'

const SideMenu = (props) => {
    // const {token} = props.match.params
    const  [showCon, setShowCon] = useState(false)

    const openPage = (page) => { history.push(page) }

    const initData = () => {
        return Array(
            {key : 0, content : "자유게시판", image : 'https://image.shutterstock.com/image-photo/fresh-red-apple-isolated-on-260nw-254938384.jpg', onAction : "자유게시판", page : '/post'},
            {key : 1, content : "블로그", image : 'https://image.shutterstock.com/image-vector/abstract-orange-icon-vector-flat-260nw-1104205634.jpg', onAction : "블로그", page : '/blog'},
            {key : 2, content : "라이센스", image : 'https://image.shutterstock.com/image-photo/blueberries-isolated-260nw-722035450.jpg', onAction : "라이센스", page : '/license'},
            {key : 3, content : "노트", image : 'https://en.pimg.jp/050/595/319/1/50595319.jpg',onAction : "노트", page: '/post'},
            {key : 4, image : 'https://en.pimg.jp/050/595/319/1/50595319.jpg', onAction : "채팅", page : '/chat'},
        )
    }
    const [SideList, setSideList] = useState(initData) 

    
    return (
        <div className = "SideMenu">
            <div className = "SideMenu-modify">
                <button onClick ={() => setShowCon(!showCon)}><img src = {Modify}/></button>
            </div>
            <>
                {
                    SideList.map(item => {
                        return (
                            <button onClick={ ()=>openPage(item.page)}>
                                <SideMenuItem key = {item.key} content = {item.content} image = {item.image} onAction={()=>console.log(item.onAction)}/>
                            </button>
                        )
                    })
               
                }
            </>
            <div className = "SideMenu-custom">
                {showCon && <Custom/>}
            </div>
        </div>
    )
}

export default SideMenu