import React from 'react';
import './style/ProjectFile.scss'
import Header from './Header/ProjectFileHeader'
import FileItem from './FileItem/ProjectFileItem'
import FileSearch from './Search/ProjectFileSearch'
import FileConnect from './Connect/ProjectFileConnect'
import { NavLink } from 'react-router-dom';

const ProjectFile = () => {
    return (
        <div className = "ProjectFile">
            <div className = "ProjectFile-Header-select">
                <div className = "ProjectFile-Header-code">
                    <select>
                        <option>Code</option>
                        <option>Code2</option>
                    </select>
                    
                </div>
                <div className = "ProjectFile-Header-branch">
                    <select>
                        <option>Master</option>
                        <option>Branch</option>
                    </select>
                </div>
            </div>
            <div className = "ProjectFile-Main">
                <div className = "ProjectFile-Header">
                    <Header/>
                </div>
                <div className = "ProjectFile-List">
                <NavLink exact to = "/project/filedetail"><button className = "ProjectFile-List-Item-button">
                    <FileItem/>
                </button></NavLink>
                </div>
            </div>

            <div className = "ProjectFile-Search">
                <FileSearch/>
            </div>
            <div className = "ProjectFile-Connect">
                <FileConnect/>
            </div>
        </div>
    );
};

export default ProjectFile;