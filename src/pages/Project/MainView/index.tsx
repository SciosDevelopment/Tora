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
                <ProjectBoard projectId={projectId}/>
                <FeedList projectId={projectId}/>
            </div>
            <IssueList projectId={projectId}/>
            <ProjectDescription projectId={projectId}/>
        </div>
    )
}

export default MainView