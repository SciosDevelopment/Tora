import React from 'react';
import './style/ProjectFileItem.scss'
import Filelogo from '../../../../img/filelogo.png';
import Exclamationyellow from '../../../../img/exclamation yellow.png';
import Exclamationred from '../../../../img/exclamation red.png';

const ProjectFileItem = () => {
    return (
        <div className = "ProjectFile-Item">
            <div className = "ProjectFile-Item-fileicon">
            <img src = {Filelogo}/>
            </div>
            <div className = "ProjectFile-Item-title">
                <p>{`CONTRIBUTING.md`}</p>
            </div>
            <div className = "ProjectFile-Item-commit-message">
                <p>{`fix(CLI): Ensure to not fallback to Framework on components run error`}</p>
            </div>
            <div className = "ProjectFile-Item-info">
                <div className = "ProjectFile-Item-date">
                    <p>{`21 on 11 Non 2020`}</p>
                </div>
                <div className = "ProjectFile-Item-issue">
                    <img src = {Exclamationyellow}/>
                    <img src = {Exclamationyellow}/>
                    <img src = {Exclamationred}/>
                    <img src = {Exclamationyellow}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectFileItem;