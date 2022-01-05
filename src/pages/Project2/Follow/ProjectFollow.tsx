import React from 'react';
import './style/ProjectFollow.scss'
import Searchicon from '../../../img/searchNavy@2x.png'
import Calendar from './Calendar/ProjectFollowCalendar'
import MainView from './MainView/ProjectFollowMainView'

const ProjectFollow= () => {
    return (
        <div className = "ProjectFollow">
            <div className = "ProjectFollow-side-tab">
                <div className = "ProjectFollow-side-tab-searchbar">
                    <input type = "input" placeholder = 'Search' />
                    <img src = {Searchicon}/>
                </div>
                <div className = "ProjectFollow-side-tab-button">
                    <div className = "ProjectFollow-side-tab-Language">
                        <div className = "ProjectFollow-side-tab-Language-title">
                            <p>Language</p>
                        </div>
                        <p>C</p>
                        <p>C#</p>
                        <p>Python</p>
                    </div>
                    <div className = "ProjectFollow-side-tab-Position">
                        <div className = "ProjectFollow-side-tab-Position-title">
                            <p>Position</p>
                        </div>
                        <p>Manage</p>
                        <p>PM</p>
                        <p>Sales person</p>
                    </div>
                </div>
            </div>
            <div className = "ProjectFollow-main">
                <div className = "ProjectFollow-calendar">
                    <Calendar/>
                </div>
                <div className = "ProjectFollow-users">
                    <p>All Followers 40</p>
                    <div className = "ProjectFollow-follow-mainview">
                        <MainView/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectFollow;