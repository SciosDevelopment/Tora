import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProjectBox = (props) => {
    const {projectId} = props
    const [title, setTitle] = useState("Project Title")
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    
    useEffect(()=>{axios.get(`${SERVER_IP}/api/v1/projects/${projectId}`).then((res)=>{setTitle(res.data.data.attributes.name)})}, [])
    return (
        <>
        <div className="titlebox">
            <div className="top_title">{title}</div>
            <div className="btm">
                <button>on Select Publish File</button>
            </div>
        </div>{/* // titlebox */}
        </>
    )
}

export default ProjectBox