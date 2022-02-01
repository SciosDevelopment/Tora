import React, {useEffect, useState} from 'react'

import {history} from '../../configureStore'
import iconArrowExpend from '../../img/img2/icon_arrow_expend.png'
import MainView from './MainView'
import Issue from './Issue'
import ProjectCode from './Code'
import Header from 'src/components/common/Header/Header'
import ProjectCollaborator from './Collaborator'
import ProjectStatus from './Status'
import ProjectSetting from './Setting'

const Project = (props) => {
    const {id = 0, tab} = props.match.params
    
    useEffect(()=>{setTabValue(tab)},[tab])

    const [isShowPopupProject, setIsShowPopupProject] = useState(false)
    const [isShowAsideMenu, setIsShowAsideMenu] = useState(false)
    const clickBtnMenu = () => setIsShowAsideMenu(isShowAsideMenu ? false : true)

    const clickNavDepth1 = (e) => {
        if( e.target.parentElement.classList.value == 'on' ) {
            e.target.parentElement.classList.remove('on')
        }else{
            e.target.parentElement.classList.add('on')
        }
    }

    enum token_ { Main ="main", Issues="issues", Tree="tree", Collabor="collaborators", Status="status", Setting="setting"}
    const [tabValue, setTabValue] = useState(token_.Main)

    const switchTab = (tabValue) => {
        switch(tabValue){
            case token_.Main : return <MainView projectId={id}/>
            case token_.Issues : return <Issue projectId={id}/>
            case token_.Tree :  return  <ProjectCode projectId={id}/>
            case token_.Collabor: return <ProjectCollaborator projectId={id}/>
            case token_.Status : return <ProjectStatus projectId={id}/>
            case token_.Setting : return <ProjectSetting projectId={id}/>
        }
    }

    return (
    <>
        <Header/>
        <div className= "project">
            <div className= "project-tab">
                <div className="location">
                    <span>Support</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>FAQ</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>Product</span>
                    <img src={iconArrowExpend} alt="expend" />
                    <span>Git 서비스 사용 방법</span>
                </div>

                <div className="top_tab">
                    {/* left */}
                    <div className="btnbox">
                        <div className = {tabValue === token_.Main ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/main`)}>Main</div>
                        <div className = {tabValue === token_.Issues ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/issues`)}>Issues</div>
                        <div className = {tabValue === token_.Tree ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/tree`)}>Code</div>
                        <div className = {tabValue === token_.Collabor ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/collaborators`)}>collaborators</div>
                    </div>
                    {/* right */}
                    <div className="btnbox">
                        <div className = {tabValue === token_.Status ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/status`)}>Status</div>
                        <div className = {tabValue === token_.Setting ? `btnbox-open` : `btnbox-close` } onClick = {()=>history.push(`/project/${id}/setting`)}>Setting</div>
                    </div>
                </div>
                <div className="publishFile">
                    {/* <ProjectLeftSidebar projectId={id}/>
                    <ProjectRightSidebar projectId={id}/> */}
                </div>

                <div className = "project-view"> 
                    {switchTab(tabValue)}
                </div>
            </div>
        </div>
    </>
    )
}

export default Project