import React from 'react';
import './style/NewProjectGithub.scss'

const NewProjectGithub = () => {
    return (
        <div className = "NewProjectGithub">
            <div className = "NewProjectGithub-URL">
                <p>Paste any repository URL</p>
                <input type = "text"/>
            </div>
            <div className = "NewProjectGithub-btn">
                <div className = "NewProjectGithub-cancel-btn">
                    <input type = "button" value = "Cancel"/>
                </div>
                <div className = "NewProjectGithub-import-btn">
                    <input type = "button" value = "Import from Github"/>
                </div>
            </div>
        </div>
    );
};

export default NewProjectGithub;