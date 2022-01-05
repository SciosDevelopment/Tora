import React from 'react';
import './style/ProjectIssueWrite.scss'
import modify from '../../../../img/modify-white.png'
import exclamation from '../../../../img/exclamation yellow.png'
import Text from './Text/IssueWriteText'
import Set from './Set/IssueWriteSet'

const ProjectIssueWrite = () => {
    return (
        <div className = "Project-Issue-write-main">
            <div className = "Project-Issue-write-header">
                    <div className = "Project-Issue-write-type">
                        <img src = {exclamation}/>
                        <p>Issue</p>
                    </div>
                    <div className = "Project-Issue-write-modify">
                        <img src = {modify}/>
                    </div>
            </div>
            <div className = "Project-Issue-write-view">
                <Text/>
            </div>
            <div className = "Project-Issue-write-set">
                <Set/>
            </div>
        </div>
    );
};

export default ProjectIssueWrite;