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
    const [blogs, setBlogs] = useState({title:"", tags:"", content:"", temptags:""})
    const [prevBlogs, setPrev] = useState({title:"", tags:"", content:""})
    const [loading, setLoading] = useState(false)
    const [taglist, setTaglist] = useState(Array())
    const [cookies, setCookies, removeCookies] = useCookies(['tora_blog'])
    const {id} = props.match.params
    const [tempsaving, setTempsaving] = useState(false) // 임시저장중인지 보여주는 ui visible
    const [timer, setTimer] = useState() // 임시저장 타이머
    
    const handleChange = (e) => {
        const{ name, value} = e.target
        setBlogs({...blogs, [name]: value})      
    }   

    // edit과 write의 분기점
    const init = () => {
        if(false) console.log("로그인 체크 필요")
        // 임시저장이 존재하는 경우 set
        if(cookies.tora_blog !== undefined) {
            setBlogs(cookies.tora_blog)
            editorRef.current.getInstance().getCodeMirror().setValue(cookies.tora_blog[`content`])
        }

        //write인 경우
        if(id === undefined) {
            setLoading(true)
            return
        }

        // edit의 경우에만 axios로 load
        axios.get(`${SERVER_IP}/api/v1/posts/${id}`).then((res)=>{
            const posts_attr = res.data.data.attributes
            const data_ = { 
                title:posts_attr.title,
                tags:posts_attr.tags,
                content:posts_attr.content,
                temptags:""}

            setPrev(data_)
            setBlogs(data_)
            setLoading(true)
        }).catch((e)=>{
            // 404 error : 글이 존재하지 않는 경우
            alert("글이 존재하지 않습니다.")
            history.goBack()
        })
    }

    // Component init
    useEffect(()=> { init() }, [])
    useEffect(()=> { if(!loading && id !== undefined) editorRef.current.getInstance().getCodeMirror().setValue(blogs.content) }, [blogs.content])
    useEffect(()=> { blogs.tags!=="" ? setTaglist(blogs.tags.split(" ")) : setTaglist(Array())}, [blogs.tags])

    // 임시저장
    // 참고자료 : https://codepen.io/Lance-Jernigan/pen/qrxmpp
    // 5초마다 글 자동저장부분 (임시로 버튼을 눌렀을때, 쿠키에 저장하도록 구현)
    // Ref.Instance 성격상 null 값을 리턴 (SetInterval, SetTimeout 사용 시) 
   // onChange TextEditor
    const editValue = (text) => {
        setBlogs({...blogs, content:text})
        const resetTimeout = (id, newID) => {
            clearTimeout(id)
            return newID
        }
        setTimer(resetTimeout(timer, setTimeout(tempSave, 3000)))
    }

    // 임시저장
    const tempSave = () => {	
        setTempsaving(true)
        setCookies('tora_blog', blogs)
        setTimeout(() =>setTempsaving(false), 1000)
    }

    const resetContents = () => {
        setBlogs({title:"", tags:"", content:"", temptags:""})
        removeCookies('tora_blog')
        clearTimeout(timer)
    }
    
    const sendBlog = () => id === undefined ? writeBlog() : editBlog()
    
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
    
    const setTagLists = (e) => {
        if(e.key === " " || e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            const Tag = document.getElementById("InputTag").getAttribute("value")
            if(!Tag) return
            if(taglist.indexOf(Tag) < 0) setBlogs({...blogs, tags:(blogs.tags + " " + Tag).trim(), temptags:""})
            else setBlogs({...blogs,temptags:""}) // 중복되는 태그
        }
        
        // remove tag - backspace
        if(e.key === "Backspace" && !document.getElementById("InputTag").getAttribute("value")) {
            if(taglist.length !== 0) {
                const list = taglist.slice(0, taglist.length-1)
                var tags = ""
                for(var i = 0; i<list.length; i++) tags += (list[i] + " ")
                setBlogs({...blogs, tags: tags.trim()})
            }
        }
    }
    
    return (        
        <>
        <Header/>
        <div className = "Blog-write-main">
            <div className = "Blog-write-view">
                <div className = "Blog-write-produce">
                    <div className = "Blog-write-top">
                        <div className = "Blog-write-title">
                            <input type="text" placeholder="제목을 입력하세요." name="title"
                             value = {blogs.title} required onChange = {handleChange}/>
                        </div>
                        <div className = "Blog-write-tag">
                            {taglist.map((data)=>{return <div>{data}</div>})}
                            <input type="text" placeholder="태그를 입력하세요." name="temptags" id="InputTag"
                             value={blogs.temptags} onChange = {handleChange} required onKeyDown = {(e)=>{setTagLists(e)}}/>
                        </div>
                    </div>
                    
                    <div className = "Blog-write-text">
                       <MarkdownEditor height="100%" editorRef = {editorRef} initialValue = {blogs.content}
                       onChange={() => editValue(editorRef.current.getInstance().getCodeMirror().getValue())}/>
                    </div>

                    <div className = "Blog-write-button">
                        {tempsaving && <div>임시저장중...</div>} {/* 디자인 필요 */}
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