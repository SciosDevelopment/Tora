import React from 'react';
import './style/ProjectIssueMain.scss'
import { NavLink } from 'react-router-dom';
import Searchicon from '../../../img/search-white-with-border.png'
import IssueItem from '../Issue/IssueItem/IssueItem'



const ProjectIssueMain:React.FC = () => {

    return (
        <div className = "Issue-main">
            <div className = "Issue-main-function-header">
                <div className = "Issue-main-function-new-issue-button">
                    <NavLink exact to = "/project/issuewrite"><button className = "Issue-main-new-issue-button">New Issue</button></NavLink>
                </div>
            </div>
            <div className = "Issue-main-area-wrapper">
                <div className = "Issue-main-sorting-header">
                    <div className = "Issue-main-counter-title">
                        <p>Open 2311</p>
                    </div>
                    <div className = "Issue-main-counter">
                        <a>Closed 1800</a>
                    </div>
                    <div className = "Issue-main-sort-Issuelist">
                        <p>Iusse list</p>
                        <div className = "Issuelist-arrow">
                        </div>
                    </div>

                    <div className = "Issue-main-sort-search">
                        <p>Search</p>
                        <img src = {Searchicon}/>
                    </div>
                </div>
                <div className = "Issue-main-area">

                    <NavLink exact to = "/project/issuedetail"><button className = "Issue-main-Item-button">
                    <IssueItem
                        title = "Scripts"
                        version = "Version 1.02"
                        context = {`fix(CLI): Ensure to not fallback to Framework on components run error`}
                        tag = "Ruby"
                        time = "21 on 11 Non 2020"
                        counter1 = {1}
                        counter2 = {2}
                    />
                    </button></NavLink>
                </div>
            </div>
        </div>
        );
    };

export default ProjectIssueMain;