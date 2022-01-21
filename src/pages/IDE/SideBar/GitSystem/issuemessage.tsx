import { useEffect, useState } from "react"
import iconCoin1 from 'src/img/ide/icon_coin1.png'

const IssueMessage = (props) => {
    const {projectId} = props
    const [issueMessage, setIssueMessage] = useState([])
    const SORTED = { ALL : 'all', OPEN : 'open', CLOSE: 'close' }
    const [sorted, setSorted] = useState(SORTED.ALL)
    useEffect(()=>{ init() },[])
    
    const init = () => {
        setIssueMessage([
            {icon: iconCoin1, link:"www.naver.com", message:"issue Title"},
            {icon: iconCoin1, link:"www.naver.com1", message:"issue Title"}, 
            {icon: iconCoin1, link:"www.naver.com2", message:"issue Title"},
            {icon: iconCoin1, link:"www.naver.com3", message:"issue Title"},
            {icon: iconCoin1, link:"www.naver.com4", message:"issue Title"},
        ])
    }
    
    return (
        <div className="issuehistory">
            <div className="sorted">
                <p className={SORTED.ALL == sorted && "selected"} onClick={()=>setSorted(SORTED.ALL)}>all</p>
                <p className={SORTED.OPEN == sorted && "selected"} onClick={()=>setSorted(SORTED.OPEN)}>open</p>
                <p className={SORTED.CLOSE == sorted && "selected"} onClick={()=>setSorted(SORTED.CLOSE)}>close</p>
            </div> 
            {issueMessage.map((data)=>{return <IssueData projectId={projectId} data={data}/>})}
        </div>
    )
}

const IssueData = (props)=> {
    const {projectId, data} = props
    const goToIssue = ()=> {
        alert(data.link)
    }
    return (
        <div className="historyData" onClick={goToIssue}>
           <button>
                <img src={data.icon} alt="bounty" />
                <span>{data.message}</span>
            </button>
        </div>
    )
}

export default IssueMessage