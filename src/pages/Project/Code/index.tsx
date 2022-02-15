import { useState } from 'react'
import iconArrowIssueTitle from '../../../img/icon_arrow_issue_title.png'
import iconFolder from '../../../img/icon_left_live.png'
import CodeDetail from './codeDetail'
import CodeItem from './codeitem'
const ProjectCode = (props) => {
    const {projectId} = props    
    const Directory = () => {
        return (
        <>
            <div className="colTitle">
                <div>Name</div>
                <div>Content</div>
                <div>Update Date</div>
            </div>
            
            {[1,2,3,4,5].map((data)=>{ return <CodeItem/> }) /* tmp */} 
        </>)
    }

    const FileDetails = () => {
        const [readOnly, setReadOnly] = useState(true)
        return (
            <>
                <div className="colTitle">
                    <div className="left">
                        <img src={iconFolder} alt="fileOption"/>gkasdmklas
                    </div>
                    <div className="right">
                        <button onClick={()=>{setReadOnly(!readOnly)}}>Edit</button>
                        <button>Delete</button>
                        <div><img src={iconFolder} alt="exportFile"/></div>
                    </div>
                </div>
                <CodeDetail readonly={readOnly}/>
            </>
        )
    }

    return (
        <div className="projectCode">
            <div className="head">
                <div className="left">
                <button className='option' onClick={()=>{console.log(1)}}>
                    <img src={iconArrowIssueTitle} alt="code"/> {/* 이미지 변경 */}
                    Master
                    <img src={iconArrowIssueTitle} alt="showlist"/>
                </button>
                <div>149 branches</div>
                <div>326 bytes</div>

                </div>
                <div className="right"/> {/* 컨텐츠 없음*/}
            </div>
            <div className="body">
                <Directory/>
                {/* <FileDetails/> */}
            </div>    
        </div>
    )
}

export default ProjectCode