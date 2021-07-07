import React from 'react';
import './style/NewProjectAWS.scss'

const NewProjectAWS = () => {
    return (
        <div className = "NewProjectAWS">
            <div className = "NewProjectAWS-enter-info">
                <div className = "NewProjectAWS-name">
                    <p>Name your project</p>
                    <input type = "text"/>
                </div>
                <div className = "NewProjectAWS-agree-btn">
                    <input type ="checkbox" value = "awa"></input>
                    <p>Allow write access</p>
                </div>
            </div>
            <div className = "NewProjectAWS-btn">
                <div className = "NewProjectAWS-cancel-btn">
                    <input type = "button" value = "Cancel"/>
                </div>
                <div className = "NewProjectAWS-import-btn">
                    <input type = "button" value = "Import from AWS"/>
                </div>
            </div>
        </div>
    );
};

export default NewProjectAWS;