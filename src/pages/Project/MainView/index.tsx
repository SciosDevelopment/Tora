import React from 'react';
import './style/ProjectMainview.scss'
import ProjectErd from '../MainView/Erd/ProjectErd'
import ProjectNotice from '../MainView/Notice/ProjectNotice'
import ProjectCodeofConduct from '../MainView/CodeofConduct/ProjectCodeofConduct'
import ProjectInfo from '../MainView/Info/ProjectInfo'

const ProjectMain = () => {
    return (
        <div className = "Project-main-view">
            <div className = "Project-main-view-erd">
                <ProjectErd/>
            </div>
            <div className = "Project-main-view-use">
                <ProjectNotice/>
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