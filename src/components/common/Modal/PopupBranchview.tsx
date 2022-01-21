import { useEffect, useState } from 'react'
import iconBranchArrowDownBlack from 'src/img/img2/icon_branch_arrow_down_black.png'
import iconBranchSearchNavy from 'src/img/img2/icon_branch_search_navy.png'

const PopupBranchview = (props) => {
    const {projectId, cur, setCur, isIde} = props
    const [branchlist, setBranchlist] = useState(["master", "test", "testBranch"])
    const [idestate, setIdestate] = useState(0)
    useEffect(()=>{
        init()
    },[])

    const init = () => {
        // projectId를 이용하여 branchList를 가져오고, curbranch를 세팅
    }

    const setbranchList_ = () => {
        return branchlist.map((data)=>{
            return (
                <button onClick={()=>setbranch(data)} className={data === cur && "selected"}>
                    {data === cur && 
                        <img src={iconBranchArrowDownBlack} alt="check" />}
                    {data}
                </button>
            )
        })
    }
    
    const setbranch =(data) =>{
        setCur(data)
        // 변경된 branch의 파일리스트 가져오기
    }

    return (
        <div className="branchesPopup innerShadow2">
            <div className="wrap">
                <div className="searchbox">
                    <input type="text" />
                    <button>
                        <img src={iconBranchSearchNavy} alt="search" />
                    </button>
                </div>
                <h5>Branches</h5>
                <div className="items innerShadow2">
                    {setbranchList_()}
                </div>
                { isIde &&
                <div className="ideOption">
                    <button className={idestate===1 && 'on'} onClick={()=>(idestate===1 ? setIdestate(0):setIdestate(1))}>Create</button>
                    <button className={idestate===2 && 'on'} onClick={()=>(idestate===2 ? setIdestate(0):setIdestate(2))}>Merger</button>
                </div> }
                {idestate===1 && <CreateBranch projectId={projectId}/>}
                {idestate===2 && <MergeBranch projectId={projectId} selected={cur}/>}
            </div>
        </div>       
    )
}
// 여기부터 진행하면됨
const CreateBranch = ({projectId}) => {    
    return (
        <div className="createBranch">
            <div className="title">Create branches</div>
            <div>
                <p>Currently</p>    
                <input type="text" disabled/>
            </div>
            <div>
                <p>new</p>
                <input type="text"/>
            </div>
            <div className='options'>
                <p>Commit</p>
                <div className="data">
                    <div><input type="radio" name='option'/><p>Working copy parent</p></div>
                    <div><input type="radio" name='option'/><p>Specified commit :</p></div>
                    <div><input type="text"/></div>
                    <div><input type="checkbox"/><p>Checkout new branch</p></div>
                </div>
            </div>
            <div>
                <button>Cancel</button>   
                <button>Create Branches</button>   
            </div>
        </div>
    )
}

const MergeBranch = ({projectId, selected}) => {    
    
    const [branchlist, setBranchlist] = useState(["master", "test", "testBranch"])
    const [cur,setCur] = useState(selected)
    const setbranch =(data) =>{
        setCur(data)
        // 변경된 branch의 파일리스트 가져오기
    }
    const setbranchList_ = () => {
        return branchlist.map((data)=>{
            return (
                <button onClick={()=>setbranch(data)} className={data === cur && "selected"}>
                    {data === cur && 
                        <img src={iconBranchArrowDownBlack} alt="check" />}
                    {data}
                </button>
            )
        })
    }
    
    return <div className="mergeBranch">
        <div className="title">Merger branches</div>
        <div className="items innerShadow2">
            {setbranchList_()}
        </div>
        <div className="option">
            <input type="checkbox"/><p>Attach a message to the merge</p>
        </div>
        <div>
            <button>Cancel</button>   
            <button>Merger Branches</button>   
        </div>
    </div>
}
export default PopupBranchview