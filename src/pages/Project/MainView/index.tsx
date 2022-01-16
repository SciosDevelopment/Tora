import React from 'react'

import ProjectBoard from './ProjectBoard'
import FeedList from './FeedList'
import IssueList from './IssueList'
import ProjectDescription from './Description'

const MainView = () => {

    return (
        <div className="MainView">
            <div className="publishFile">
                <ProjectBoard/>
                <FeedList/>
            </div>
            <IssueList/>
            <ProjectDescription/>
        </div>
    )
}

export default MainView