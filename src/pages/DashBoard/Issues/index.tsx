import React, {useEffect, useState} from 'react'
import axios from 'axios'
import IssueItem from './Item'

const DashBoardIssues = (props) => {
    const {userId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [IssueList, setIssueList] = useState([])

    useEffect(()=>{
        if(userId == -1) return
        const data = { user_id: userId, search_text: "", kind: "issue"}
        axios.post(`${SERVER_IP}/api/v1/dashboard/issue`, data).then(res => {
            const list = res.data.data
            setIssueList(list)
        })
        .catch((e)=>{setIssueList([])})
    }, [userId])

    // 데이터 부분
    return (
        <div className = "issues">
            <p>My Issues</p>
                {
                IssueList.length !== 0 ?
                IssueList.map((item) => {return <IssueItem item={item}/>})
                    : 
                    /* 임시 : page 중요 */
                    <div>Contents is nothing</div> 
                }
        </div>
    )
}

export default DashBoardIssues