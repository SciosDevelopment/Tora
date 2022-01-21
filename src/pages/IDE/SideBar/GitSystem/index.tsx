import { useState } from "react"
import FileViewHeader from "../../../../components/common/FileView/header"
import FileStage from "./filestage"
import CommitHistory from "./commithistory"
import IssueMessage from "./issuemessage"

const GitSystem = (props) => {
    const {projectId} = props
    const TAB = {FILESTAGE:"File stage", COMMITHISTORY:"history", ISSUEMESSAGE:"issue message"}
    const [curtab, setCurtab] = useState(TAB.FILESTAGE)
    
    return (
        <div className="gitsystem">
            <FileViewHeader projectId={projectId} isIde={true}/>
            <div className="tab">
                <div className={curtab === TAB.FILESTAGE && "on"} onClick={()=>{setCurtab(TAB.FILESTAGE)}}>{TAB.FILESTAGE}</div>
                <div className={curtab === TAB.COMMITHISTORY && "on"} onClick={()=>{setCurtab(TAB.COMMITHISTORY)}}>{TAB.COMMITHISTORY}</div>
                <div className={curtab === TAB.ISSUEMESSAGE && "on"} onClick={()=>{setCurtab(TAB.ISSUEMESSAGE)}}>{TAB.ISSUEMESSAGE}</div>
            </div>
            <div className="body">
                {curtab === TAB.FILESTAGE && <FileStage projectId={projectId}/>}
                {curtab === TAB.COMMITHISTORY && <CommitHistory projectId={projectId}/>}
                {curtab === TAB.ISSUEMESSAGE && <IssueMessage projectId={projectId}/>}
            </div>
        </div>
    )
}

export default GitSystem