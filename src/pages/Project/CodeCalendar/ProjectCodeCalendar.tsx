import React from 'react';
import './style/ProjectCodeCalendar.scss'
import Calendar from './Calendar/CodeCalendarDate'
import List from './List/ProjectCodeCalendarList'

const ProjectCodeCalendar = () => {
    return (
        <div className = "CodeCalendar">
            <div className = "CodeCalnedar-side-tab">
                <div className = "CodeCalendar-side-select">
                    <select>
                        <option>Select</option>
                        <option>Select2</option>
                    </select>
                </div>
                <div className = "CodeCalendar-side-tab">
                    <div className = "CodeCalendar-side-mybranch">
                        <p>My Branch</p>
                        <span>TEST</span>
                    </div>
                    <div className = "CodeCalendar-side-all">
                        <p>All</p>
                        <span>MASTER</span>
                    </div>
                </div>
            </div>
            <div className = "CodeCalendar-calendar-view">
                <Calendar/>
            </div>
            <div className = "CodeCalendar-list-view">
                <List/>
            </div>
        </div>
    );
};

export default ProjectCodeCalendar;