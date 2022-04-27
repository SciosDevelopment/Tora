import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProjectDescription = (props) => {
    const {projectId} = props
    // body에 추후 markup viewer 적용
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [desc, setDesc] = useState("")
    useEffect(()=>{
        // readme.md가 없을때, description 적용
        axios.get(`${SERVER_IP}/api/v1/projects/${projectId}`).then((res)=>{setDesc(res.data.data.attributes.description)})
    }, [])
    return (
        <div className="readme innerShadow2">
            <div className="head">README.md</div>
            <div className="body">
                <h4>Overview</h4>
                <p>
                    For nearly 40 years, SF Match has provided residency and fellowship matching services in various specialties and subspecialties across the spectrum of medicine, including ophthalmology, plastic surgery, movement disorders, critical care anesthesiology, microsurgery, and many others. They work to connect people with organizations using a proven applicant review and ranking methodology as well as a centralized application service that streamlines the processing, distribution, and review of applications with a simple user interface.
                </p>
                <div className="h50"></div>
                <h4>Usage</h4>
                <p>
                    Use any computer and a car charger to AC outlet converter so that it's powered by your car. Run Honeyminer on the computer. Download this node app. Install dependecies one using npm aka 'npm install send-crypto'. then run the app using 'npm run'.
                </p>
                <p>
                    For nearly 40 years, SF Match has provided residency and fellowship matching services in various specialties and subspecialties across the spectrum of medicine, including ophthalmology, plastic surgery, movement disorders, critical care anesthesiology, microsurgery, and many others. They work to connect people with organizations using a proven applicant review and ranking methodology as well as a centralized application service that streamlines the processing, distribution, and review of applications with a simple user interface.
                </p>
            </div>
        </div>
    )
}

export default ProjectDescription