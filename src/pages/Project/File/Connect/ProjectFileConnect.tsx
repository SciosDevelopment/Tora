import React from 'react';
import './style/ProjectFileConnect.scss'
import URLicon from '../../../../img/URLicon.png'
import IDEicon from '../../../../img/IDEicon2.png'
import Fileicon from '../../../../img/Fileicon2.png'
import Title from 'src/components/common/Title/Title';

const ProjectFileConnect = () => {
    return (
        <div className = "FileConnect">
            <div className = "FileConnect-URL">
                <div className = "FileConnect-URL-title">
                    <Title name = "HTTPS"/>
                </div>
                <div className = "FileConnect-URL-address">
                    <p>https://toragit.com. OpenSoueff/</p>
                    <img src = {URLicon}/>
                </div>
            </div>
            <div className = "FileConnect-Project">
                <div className = "FileConnect-Project-name">
                    <div className = "FileConnect-Project-name-icon">
                        <img src = {IDEicon}/>
                    </div>
                    <p>프로젝트 이름</p>
                </div>
                <div className = "FileConnect-Project-file">
                    <div className = "FileConnect-Project-file-icon">
                        <img src = {Fileicon}/>
                    </div>
                    <p>Download ZIP</p>
                </div>
                
            </div>
        </div>
    );
};

export default ProjectFileConnect;