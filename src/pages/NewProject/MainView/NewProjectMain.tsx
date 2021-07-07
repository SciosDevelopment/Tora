import React from 'react';
import './style/NewProjectMain.scss'

const NewProjectMain = () => {

    return (
        <div className = "NewProjectMain">
            <div className = "NewProjectMain-enter-info">
                <div className = "NewProjectMain-name">
                    <p>Name your project</p>
                    <input type = "text"/>
                </div>
                <div className = "NewProjectMain-language">
                    <p>Program Language</p>
                    <select name="subject" id="select-id">
                    <option value="language1"></option>
                </select>
                </div>
            </div>
            <div className = "NewProjectMain-select-btn">
                <div className = "NewProjectMain-public-btn">
                        <p>Public</p>
                        <p>Private</p>
                </div>
                <div className = "NewProjectMain-decision-btn">
                    <div className = "NewProjectMain-cancel-btn">
                        <input type = "button" value = "Cancel"/>
                    </div>
                    <div className = "NewProjectMain-create-btn">
                        <input type = "button" value = "Create"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProjectMain;