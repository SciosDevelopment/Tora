import axios from 'axios'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import iconSelect3 from '../../../img/ic_select3.png'

// temp file : need refactoring
const PopupNewProject = ({isShowPopupProject, setIsShowPopupProject}) =>{
    const [tab, setTab] = useState('new') // new, from, git
    const [projectname, setProjectname] = useState("")
    const [pub, setPub] = useState(true)
    const [lang, setLang] = useState("C/C++")
    const langData = [ {value:"C/C++", text:"C/C++"},
                       {value:"csharp", text:"C#"}, 
                       {value:"html", text:"HTML/CSS/JS"},
                       {value:"python", text:"python"},
                       {value:"django", text:"Django"},
                       {value:"java", text:"Java"},
                       {value:"spring", text:"Spring"},
                       {value:"react", text:"React"},
                       {value:"reactnative", text:"React Native"},
                       {value:"vuejs", text:"Vue.js"},
                       {value:"nodejs", text:"Node.js"},
                       {value:"ruby", text:"Ruby"},
                       {value:"rails", text:"Rails"},
                       {value:"golang", text:"Go"},
                       {value:"php", text:"PHP"}]
                       
    const clickTab = (e) => setTab(e)
    const clickClose = () => setIsShowPopupProject(false)
    const clickConfirm = () => {
        switch(tab) {
            case 'new': return NewProjectFromTora()
            case 'git': return ImportFromGithub()
        }
    }

    const NewProjectFromTora = () => {
        CreateNewProject("tora")
    }

    const ImportFromGithub = () => {
        // CreateNewProject("github")
    }

    const CreateNewProject = (type) => {
        const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
        const data = {
            project: { 
                name: projectname, 
                program_language: lang,
                project_type: pub ? "type_public" : "type_private", 
                create_type: type, 
                state: "use" 
            } 
        }
        console.log(data)
        axios.post(`${SERVER_IP}/api/v1/projects/create`,data).then((res)=>{
            // 201 생성 성공
            alert("프로젝트가 생성되었습니다. Mypage에서 확인해주세요.")
        }).catch(e=>{
            if(e.response) {
                var status = e.response.status // or use message
                // 로그인이 필요
                if(status === 401) {
                    alert("로그인이 필요합니다")
                }
                if(status === 400) alert("프로젝트 생성에 실패했습니다. 다시 시도해주세요.")
                // 서버 연결 문제일때 : temp-status
                if(status >= 500) alert("server is dead")
            }
            else if(e.request) {
                // temp
                alert("server is dead")
                console.log(e.request)
            }
            else console.log('Error', e.message)
        }) 
    }

    const CreateNewProjectView = () => {
        const handleChangeSelect = (e)=>{console.log(e.target.value);setLang(e.target.value)}
        const handleChangeProjectName = (e) =>{setProjectname(e.target.value.trim())}
        return ( // new 
            <>
                <div className="left">
                    <p className="title">Name your project</p>
                    <input type="text" onChange={handleChangeProjectName} value={projectname} autoFocus/>
                    <div className="h40"/>
                    <p className="title">Program Language</p>
                    <select style={{backgroundImage:`url(${iconSelect3})`}} onChange={handleChangeSelect} value={lang}>
                        {langData.map((data)=>{return <option value={data.value}>{data.text}</option>})}
                    </select>
                </div>
                <div className="right">
                    <div className="toggleButton innerShadow">
                        <button className= {pub && "on"} onClick={()=>setPub(true)}>Public</button>
                        <button className= {!pub && "on"} onClick={()=>setPub(false)}>Private</button>
                    </div>
                </div>
           </>
        )
    }

    const ImportFromGithubView = () =>{
        return ( // git 
            <>
                <div className="left type_git">
                    <p className="title">Paste any repository URL</p>
                    <div className="repositoryURL">
                        <select style={{backgroundImage:`url(${iconSelect3})`}}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                        <button className="btn_url">Authorize GitHub to import your repos</button>
                    </div>
                </div>
            </>
        )
    }

    const FormBody = () => {
        switch(tab) {
            case 'new': return <CreateNewProjectView/>
            case 'git': return <ImportFromGithubView/>
        }
    }

    return (
        <>
        {
            isShowPopupProject &&
            <Draggable>
                <div className="popupIDE popupNewProject innerShadow">
                    <div className="popupBody">
                        <div className="topBtn">
                            <button onClick={() => clickTab('new')} className={tab == 'new' && 'on'}>Create new project</button>
                            <button onClick={() => clickTab('git')} className={tab == 'git' && 'on'}>Import from Github</button>
                        </div>
                        <div className="form">
                           <FormBody/>
                        </div>
                    </div>
                    <div className="popupFoot">
                        <div className="btn">
                            <button className="btn_confirm" onClick={clickConfirm}>Create</button>
                            <button className="btn_cancel" onClick={clickClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Draggable>
        }
        </>
    )
}

export default PopupNewProject
