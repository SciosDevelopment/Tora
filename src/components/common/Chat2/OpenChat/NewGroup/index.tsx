import React from 'react';
import plus from '../../../../../img/plus48px.png'

const NewGroup = () => {
    return (
        <div className= "newgroup">
            <div className= "title">
                <span>New Open Group</span>
            </div>
            <div className= "photo">
                <span>Profile Photo</span>
                <div className= "box">
                    <img src = {plus}/>
                </div>
            </div>
            <div className= "name">
                <span>Group Name</span>
                <div className= "box">
                    <input type= "text"/>
                </div>
            </div>
            <div className= "topic">
                <span>Group Topic</span>
                <div className= "box">
                    <input type= "text"/>
                </div>
            </div>
        </div>
    );
};

export default NewGroup;