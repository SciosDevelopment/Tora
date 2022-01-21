import { useEffect, useState } from "react"

const CommitHistory = (props) => {
    const {projectId} = props
    const [commitHistory, setCommitHistory] = useState([])

    useEffect(()=>{ init() },[])

    const init = () => {
        setCommitHistory([
            {commitid: 1, commitmessage:"Hello, commit", time:new Date('1995-12-17T03:24:00')},
            {commitid: 1, commitmessage:"Hello, commit", time:new Date('1995-12-17T03:24:00')},
            {commitid: 1, commitmessage:"Hello, commit", time:new Date('1995-12-17T03:24:00')}]
        )
    }
    
    return (
        <div className="commithistory">
            {commitHistory.map((data)=>{return <HistoryData projectId={projectId} data={data}/>})}
        </div>
    )
}

const HistoryData = (props)=> {
    const {projectId, data} = props

    return (
        <div className="historyData"> 
            <div className="header">
                <input type="hidden" value={data.commitid} className="commitId"/>

                <div className="date">
                    {data.time.toDateString()}
                </div>
            </div>
            <div className="commitmessage">
                {data.commitmessage}
            </div>
        </div>
    )
}

export default CommitHistory