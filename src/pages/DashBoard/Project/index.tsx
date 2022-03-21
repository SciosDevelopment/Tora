import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProjectItem from './Item'

const DashBoardProject = (props) => {
    const {userId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [ProjectList, setProjectList] = useState([])

    useEffect(()=>{
        if(userId == -1) return
        const data = { project: { search_text: "", sort: "new", user_id: userId } }
        axios.post(`${SERVER_IP}/api/v1/projects`, data).then(res => {setProjectList(res.data.data)})
        .catch((e)=>{setProjectList([])})
    }, [userId])

    // 데이터 부분
    return (
        <div className = "project">
            <p>My project</p>
                {
                ProjectList.length !== 0 ?
                ProjectList.map((item) => {return <ProjectItem item={item}/>})
                    : 
                    /* 임시 : page 중요 */
                    <div>Contents is nothing</div> 
                }
        </div>
    )
}

export default DashBoardProject