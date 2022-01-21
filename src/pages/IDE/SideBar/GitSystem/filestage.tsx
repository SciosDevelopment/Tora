import { useEffect, useState } from "react"
import FileStageItem from "./stageitem"

const FileStage = (props) => {
    const {projectId} = props

    const [unstagefiles, setUnstagefiles] = useState([])
    const [stagefiles, setStagefiles] = useState([])
    const [selectedStage, setSelectedStage] = useState()
    const [selectedUnstage, setSelectedUnstage] = useState()

    useEffect(()=>{
        init()
    },[])

    const init = () => {
        setUnstagefiles([{filename: "A", },{filename: "B", },])
        setStagefiles([{filename: "C", },{filename: "D", },])
    }
    const handleCommit = () => { alert("commit") }
    
    return (
        <div className="filestage">
           <div className="title">
               <p>Excluded file</p>
               <img src="#" alt="addAll"/>
            </div>
           <div className="filecontainer">
                {unstagefiles.map((data)=>{return (
                    <FileStageItem fileinfo={data} selected={data === selectedStage} onClick={setSelectedStage}>
                        <img src="#" alt="+"/>
                    </FileStageItem>)})}
           </div>
           <div className="title">
               <p>added file</p>
               <img src="#" alt="addAll"/>
           </div>
           <div className="filecontainer">
                {stagefiles.map((data)=>{return (
                    <FileStageItem fileinfo={data} selected={data === selectedUnstage} onClick={setSelectedUnstage}>
                        <img src="#" alt="-"/>
                    </FileStageItem>)})}
           </div>
           <div className="title">Commit message</div>
           <div>
               <textarea placeholder="write commit message"/>
           </div>
           <div className="commitbtn">
               <button onClick={handleCommit}>Commit</button>
           </div>
        </div>
    )
}

export default FileStage