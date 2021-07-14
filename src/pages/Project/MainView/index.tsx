import React from 'react';
import './style/ProjectMainview.scss'
import ProjectErd from '../MainView/Erd/ProjectErd'
import ProjectFeed from './Feed/ProjectFeed'
import ProjectCodeofConduct from '../MainView/CodeofConduct/ProjectCodeofConduct'
import ProjectInfo from '../MainView/Info/ProjectInfo'
import Sidebutton from '../../../components/common/SideMenu/ProjectSideMenu'
import ConnectButton from '../../../components/common/SideMenu/ConnectSideMenu'

import { NavLink } from 'react-router-dom';

const ProjectMain = () => {
    return (
        <div className = "Project-main-view">
            <div className = "Project-left-button">
                <Sidebutton/>
            </div>
            <div className = "Project-right-button">
                <ConnectButton/>
            </div>
            <div className = "Project-main-view-erd">
                <ProjectErd/>
            </div>
            <div className = "Project-main-view-use">
                <ProjectFeed/>
            </div>
            <div className = "Project-main-view-readme">
                <ProjectCodeofConduct/>
            </div>
            <div className = "Project-main-view-info">
                <ProjectInfo/>
            </div>
        </div>
    );
};

export default ProjectMain;