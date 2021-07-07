import React from 'react';
import './style/ProjectErd.scss'
import Playbtn from '../../../../img/playbtn.png'


const ProjectErd = () => {
    return (
        <div className = "Project-erd-main">
            <div className = "Project-erd-header">
                <img src = {Playbtn}/>
                <p>프로젝트 제목</p>
            </div>
            <div className = "Project-erd-body">
                <input type = "button" value = "on Select Publish File"/>
            </div>
        </div>
    );
};

export default ProjectErd;