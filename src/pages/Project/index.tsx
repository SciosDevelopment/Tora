import React, {useEffect, useState} from 'react';
import Header from 'src/components/common/Header/Header';
import './style/ProjectMain.scss'
import MainView from '../Project/MainView'
import IssueView from '../Project/Issue'
import IssueWrite from '../Project/Issue/Write/ProjectIssueWrite'
import IssueDetail from '../Project/Issue/Detail/index'
import FileList from './File/ProjectFile'
import FileDetail from './File/Detail/FileDetail'
import CodeCalendar from './CodeCalendar/ProjectCodeCalendar'
import Follow from './Follow/ProjectFollow'
import License from './License/ProjectLicense'
import LicenseWrite from './License/Write/ProjectLicenseWrite'

import {history} from '../../configureStore'

const ProjectMain = (props) => {
    const {token, id} = props.match.params
    const [tabValue, setTabValue] = useState<Number>(0);

    enum token_ { NOTHING=-1, Main, CodeCalendar, Follow, File, Issue, License, IssueWrite, IssueDetail, FileDetail, LicenseWrite }

    const setToken = ()=> {
        switch(token) {
            case "main": 
                return token_.Main
            case "codecalendar": 
                return token_.CodeCalendar
            case "follow":
                return token_.Follow
            case "file":
                return token_.File
            case "issue":
                return token_.Issue
            case "license":
                return token_.License
            case "issuewrite":
                return token_.IssueWrite
            case "issuedetail":
                return token_.IssueDetail
            case "filedetail":
                return token_.FileDetail
            case "licensewrite":
                return token_.LicenseWrite
            default:
                return token_.NOTHING
        }
    }

    const changeURL = async(token) => history.push(`/project/${token}`)

    useEffect(()=>{setTabValue(setToken())}, [token])

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Project-main-mainview">
                        <MainView/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Project-main-codecalendar">
                        <CodeCalendar/>
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Project-main-follow">
                        <Follow/>
                    </div>
                )
            }
            case 3 : {
                return(
                    <div className = "Project-main-file">
                        <FileList/>
                    </div>
                )
            }
            case 4 : {
                return(
                    <div className = "Project-main-issue">
                        <IssueView/>
                    </div>
                )
            }
            case 5 : {
                return(
                    <div className = "Project-main-license">
                        <License/>
                    </div>
                )
            }
            case 6 : {
                return(
                    <div className = "Project-main-issue-click">
                        <IssueWrite/>
                    </div>
                )
            }
            case 7 : {
                return(
                    <div className = "Project-main-issue-click">
                        <IssueDetail/>
                    </div>
                )
            }
            case 8 : {
                return(
                    <div className = "Project-main-file-click">
                        <FileDetail/>
                    </div>
                )
            }
            case 9 : {
                return(
                    <div className = "Project-main-file-click">
                        <LicenseWrite/>
                    </div>
                )
            }
        }
    }

    return (
        <>
        <Header/>
        <div className = "Project-main">
            <div className = "Project-main-tab">
                <div className = "Project-main-tab-button">
                    <div className = {tabValue === 0 ? `Project-main-tab-clicked` : `Project-main-tab-closed` } onClick = {()=>changeURL('main')}>Main</div>
                    <div className = {tabValue === 1 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>changeURL('codecalendar')}>Code Calendar</div>
                    <div className = {tabValue === 2 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>changeURL('follow')}>Follow</div>
                    <div className = {tabValue === 3 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>changeURL('file')}>File</div>
                    <div className = {tabValue === 4 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>changeURL('issue')}>lssue</div>
                    <div className = {tabValue === 5 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>changeURL('license')}>License</div>
                </div> 
                <div className = "Project-main-tab-tab-body">
                    {
                        switchTab(tabValue)
                    } 
                </div>
            </div>
        </div>
        </>
    )
}


export default ProjectMain;