import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import IssueList from './IssueList'


const Issue = (props) => {
    const {projectId} = props
    const [status, setStatus] = useState(true) // true : card, false : board
    return (
        <div className= "issue">
            <div className="issuebox">
                <IssueList projectId ={projectId} setMode = {setStatus} mode ={status}/>
            </div>
        </div>
    )
}

export default Issue