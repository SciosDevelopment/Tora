import React from 'react';
import './style/CodeCalendarListView.scss'
import Profile from '../../../../../img/profile4.png'

const CodeCalendarListView = () => {
    return (
        <div className=  "CodeCalendar-ListView">
            <div className = "CodeCalendar-ListView-title">
                <div className = "CodeCalendar-ListView-name">
                    <p>Branch1</p>
                </div>
                <div className = "CodeCalendar-ListView-date">
                    <p>17 Jun</p>
                </div>
            </div>
            <div className = "CodeCalendar-ListView-text">
                <p>This branch doesn't have any content, it's just writing</p>
                <div className = "CodeCalendar-ListView-Profile">
                    <img src = {Profile}/>
                    <p>Jones</p>
                </div>
            </div>
        </div>
    );
};

export default CodeCalendarListView;