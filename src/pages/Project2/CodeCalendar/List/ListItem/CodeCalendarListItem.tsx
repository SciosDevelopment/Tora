import React from 'react';
import './style/CodeCalendarListItem.scss'
import Profile from '../../../../../img/profile4.png'

const CodeCalendarListItem = () => {
    return (
        <div className = "CodeCalendar-ListItem">
            <div className = "CodeCalendar-ListItem-profile">
                <img src = {Profile}/>
                <p>YaImma</p>
            </div>
            <div className = "CodeCalendar-ListItem-title">
                <p>Branch1</p>
            </div>
            <div className = "CodeCalendar-ListItem-content">
                <p>This branch doesn't have any content, it's just writing</p>
            </div>
            <div className = "CodeCalendar-ListItem-date">
                <p>17 Jun</p>
            </div>
        </div>
    );
};

export default CodeCalendarListItem;