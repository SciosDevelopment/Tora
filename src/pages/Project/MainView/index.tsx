import React from 'react'

import ProjectBoard from './ProjectBoard'
import FeedList from './FeedList'
import IssueList from '../Issue/IssueList'
import ProjectDescription from './Description'

const MainView = (props) => {
    const {projectId} = props
    return (
        <div className="MainView">
            <div className="publishFile">
                <ProjectBoard/>
                <FeedList/>
            </div>
            <IssueList projectId={projectId}/>
            <ProjectDescription/>
        </div>
    )
}

export default MainView