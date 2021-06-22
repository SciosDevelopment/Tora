import React, {useState, useEffect} from 'react'
import Header from 'src/components/common/Header/Header';
import MarkdownEditor from 'src/components/common/MarkdownEditor'
import './style/BlogWriteMain.scss'
import { Editor } from '@toast-ui/react-editor'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import {history} from '../../../configureStore'

const BlogWritePage = (props) => {
    const editorRef = React.createRef<Editor>()
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [blogs, setBlogs] = useState({title:"", tags:"", content:""})
    const [prevBlogs, setPrev] = useState({title:"", tags:"", content:""})
    const [cookies, setCookies, removeCookies] = useCookies(['tora_blog'])
    const {id} = props.match.params
    
    
    const handleChange = (e) => {
        const{ name, value} = e.target
        setBlogs({...blogs, [name]: value})      
    }   

    // edit과 write의 분기점
    const init = () => {
        // 임시저장이 존재하는 경우 set
        if(false) console.log("로그인 체크 필요")
        if(cookies.tora_blog !== undefined) setBlogs(cookies.tora_blog)

        // edit의 경우에만 axios로 load
        if(id === undefined) return
        axios.get(`${SERVER_IP}/api/v1/posts/${id}`).then((res)=>{
            const posts_attr = res.data.data.attributes
            const data_ = { 
                title:posts_attr.title,
                tags:posts_attr.tags,
                content:posts_attr.content
            }
            setPrev(data_)
            setBlogs(data_)
        }).catch((e)=>{
            // 404 error : 글이 존재하지 않는 경우
            alert("글이 존재하지 않습니다.")
            history.goBack()
        })
    }

    // Component init
    useEffect(()=> { init() }, [])

    // 데이터가 로드되면, editor에 set
    useEffect(()=> { editorRef.current.getInstance().getCodeMirror().setValue(blogs.content) }, [blogs.content])
    
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
    
    const sendBlog = () => {
        if (id === undefined) writeBlog()
        else editBlog()
    }

    // 게시글 수정
    const editBlog = () => {
        const data = {
             post: { id: id, kind: "blog", title: blogs.title, tags: blogs.tags,
             content: editorRef.current.getInstance().getCodeMirror().getValue()
            } 
        }
        if(prevBlogs.content === data.post.content && prevBlogs.title === data.post.title && prevBlogs.tags === data.post.tags) {
            alert("변경사항이 없습니다.")
            return
        }
        
        axios.put(`${SERVER_IP}/api/v1/posts/edit`, data)
        // 201 : 성공, 400 : 오류, 404: Invalid parameter
        .then((res)=>{
            alert("글수정이 완료되었습니다.")
            resetContents()
            history.replace(`/blog/${res.data.data.id}`)
        })
        .catch((e)=>{alert("server error")})
    }

    // 게시글 작성
    const writeBlog = () => {
        const data = { 
            post: { 
                kind: "blog", title: blogs.title, tags: blogs.tags,
                content: editorRef.current.getInstance().getCodeMirror().getValue()
            }
        }
        
        axios.post(`${SERVER_IP}/api/v1/posts/create`, data)
        // 201 : 성공, 400 : 오류, 404: Invalid parameter
        .then((res)=>{
            alert("글쓰기가 완료되었습니다.")
            resetContents()
            history.replace(`/blog/${res.data.data.id}`)
        })
        .catch((e)=>{alert("server error")})
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
                        </div>
                        <div className = "Blog-write-tag">
                            {/* need : auto tag system impl. */}
                            <input type="text" placeholder="태그를 입력하세요." name="tags" required value = {blogs.tags} onChange = {handleChange}/>
                        </div>
                    </div>
                    
                    <div className = "Blog-write-text">
                       <MarkdownEditor height="100%" editorRef = {editorRef} initialValue = {blogs.content}/>
                    </div>

                    <div className = "Blog-write-button">
                        <input type='button' value="TempSave" onClick={tempSave}/>
                        <input type='submit' value="Create" onClick={sendBlog}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogWritePage