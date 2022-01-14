import React, { useState } from 'react'
import Draggable from 'react-draggable'
import iconSelect3 from '../../../img/ic_select3.png'

// temp file : need refactoring
const PopupNewProject = ({isShowPopupProject, setIsShowPopupProject}) =>{
    const [tab, setTab] = useState('new') // new, from, git

    const clickTab = (e) => setTab(e)
    const clickClose = () => setIsShowPopupProject(false)
    const clickConfirm = () => {
        switch(tab) {
            case 'new':
                return CreateNewProject()
            case 'from':
                return ImportFromProject()
            case 'git':
                return ImportFromGithub()
        }
    }

    const CreateNewProject = () => {
        alert("test")
    }

    const ImportFromProject = () => {
        alert("test2")
    }

    const ImportFromGithub = () => {
        alert("test3")
    }

    const CreateNewProjectView = () => {
        const create = () => {

        }
        return ( // new 
            <>
                <div className="left">
                    <p className="title">Name your project</p>
                    <input type="text"/>
                    <div className="h40"/>
                    <p className="title">Program Language</p>
                    <select style={{backgroundImage:`url(${iconSelect3})`}}>
                        <option>javascript</option>
                        <option>python</option>
                    </select>
                </div>
                <div className="right">
                    <div className="toggleButton innerShadow">
                        <button className="on">Public</button>
                        <button>Private</button>
                    </div>
                </div>
           </>
        )
    }

    const ImportFromProjectView = () => {
        return ( // from 
            <>
                <div className="left">
                    <p className="title">Import from project</p>
                    <input type="text"/>
                    <div className="h40"/>
                    <p className="title">project import</p>
                    <label className="fileSelection">
                        <input type="file"/>
                        <p>File Selection</p>
                    </label>
                </div>
                <div className="right">
                    <div className="toggleButton innerShadow">
                        <button className="on">Public</button>
                        <button>Private</button>
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
            case 'new':
                return <CreateNewProjectView/>
            case 'from':
                return <ImportFromProjectView/>
            case 'git':
                return <ImportFromGithubView/>
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
                            <button onClick={() => clickTab('from')} className={tab == 'from' && 'on'}>Import from project</button>
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
