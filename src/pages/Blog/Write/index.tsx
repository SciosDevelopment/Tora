import React, {useState, useEffect} from 'react'
import Header from 'src/components/common/Header/Header';
import MarkdownEditor from 'src/components/common/MarkdownEditor'
import './style/BlogWriteMain.scss'
import { Editor } from '@toast-ui/react-editor'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import {history} from '../../../configureStore'

const BlogWritePage = () => {
    const editorRef = React.createRef<Editor>()
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [blogs, setBlogs] = useState({title:"", tags:"", content:""})
    const [cookies, setCookies, removeCookies] = useCookies(['tora_blog'])
    
    const handleChange = (e) => {
        const{ name, value} = e.target
        setBlogs({...blogs, [name]: value})      
    }
   
    useEffect(()=>{
        // 쿠키에 임시글이 존재하면 불러오기
        if(cookies.tora_blog !== undefined) setBlogs(cookies.tora_blog)
    }, [])
    

    // 임시저장
    // 5초마다 글 자동저장부분 (임시로 버튼을 눌렀을때, 쿠키에 저장하도록 구현)
    // Ref.Instance 성격상 null 값을 리턴 (SetInterval, SetTimeout 사용 시) 
    const tempSave = () => {
        setBlogs({...blogs, content:editorRef.current.getInstance().getCodeMirror().getValue()})
        setCookies('tora_blog', blogs)
        alert("임시저장이 완료되었습니다.")
    }

    const resetContents = () => {
        setBlogs({title:"", tags:"", content:""})
        removeCookies('tora_blog')
    }

    const writeBlog = () => {
        console.log(editorRef.current.getInstance().getCodeMirror().getValue())
        const data = { 
                    post: { 
                        kind: "blog",
                        title: blogs.title, 
                        tags: blogs.tags,
                        content: editorRef.current.getInstance().getCodeMirror().getValue()
                    }
        }
        
        axios.post(`${SERVER_IP}/api/v1/posts/create`, data)
        // 201 : 성공, 400 : 오류, 404: Invalid parameter
        .then((res)=>{
            alert("글쓰기 완료")
            resetContents()
            history.replace(`/blog/${res.data.data.id}`)
        })
        .catch((e)=>{
            console.log(e)
            alert("server error")
        })
    }

    return (        
        <>
        <Header/>
        <div className = "Blog-write-main">
            <div className = "Blog-write-view">
                <div className = "Blog-write-produce">
                    <div className = "Blog-write-top">
                        <div className = "Blog-write-title">
                            <input type="text" placeholder="제목을 입력하세요." name="title" required value = {blogs.title} onChange = {handleChange}/>
                            {/* <p>제목을 입력하세요.</p> */}
                        </div>
                        <div className = "Blog-write-tag">
                        <input type="text" placeholder="태그를 입력하세요." name="tags" required value = {blogs.tags} onChange = {handleChange}/>
                            {/* <p>태그를 입력하세요.</p> */}
                        </div>
                    </div>
                    
                    <div className = "Blog-write-text">
                       <MarkdownEditor height="100%" editorRef = {editorRef}/>
                    </div>

                    <div className = "Blog-write-button">
                        <input type='button' value="TempSave" onClick={tempSave}/>
                        <input type='submit' value="Create" onClick={writeBlog}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogWritePage