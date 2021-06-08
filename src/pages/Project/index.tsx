import React, {useState} from 'react';
import Header from 'src/components/common/Header/Header';
import './style/ProjectMain.scss'
import MainView from '../Project/MainView'
import IssueView from '../Project/Issue'
import IssueWrite from '../Project/Issue/Write/ProjectIssueWrite'
import IssueDetail from '../Project/Issue/Detail/index'
const ProjectMain:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0);

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

                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Project-main-follow">
                        <IssueWrite/>
                    </div>
                )
            }
            case 3 : {
                return(
                    <div className = "Project-main-file">
                        <IssueDetail/>
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
                    <div className = {tabValue === 0 ? `Project-main-tab-clicked` : `Project-main-tab-closed` } onClick = {()=>setTabValue(0)} key = {0}>Main</div>
                    <div className = {tabValue === 1 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>setTabValue(1)} key = {1}>Code Calendar</div>
                    <div className = {tabValue === 2 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>setTabValue(2)} key = {2}>Follow</div>
                    <div className = {tabValue === 3 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>setTabValue(3)} key = {3}>File</div>
                    <div className = {tabValue === 4 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>setTabValue(4)} key = {4}>lssue</div>
                    <div className = {tabValue === 5 ? `Project-main-tab-clicked` : `Project-main-tab-closed`} onClick = {()=>setTabValue(5)} key = {4}>License</div>
                </div> 
                <div className = "Project-main-tab-tab-body">
                    {
                        switchTab(tabValue)
                    } 
                </div>
            </div>
        </div>
        </>
    );
};


export default ProjectMain;