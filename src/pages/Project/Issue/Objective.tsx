import React, {useState} from 'react'
import iconBranchSearch from '../../../img/img2/icon_branch_search.png'
import iconBranchArrowDownBlack from '../../../img/img2/icon_branch_arrow_down_black.png'
import iconBranchSearchNavy from '../../../img/img2/icon_branch_search_navy.png'
import iconArrowIssueTitle from '../../../img/img2/icon_arrow_issue_title.png'
import iconObjectiveMenu from '../../../img/img2/icon_objective_menu.png'
import iconObjectiveAdd from '../../../img/img2/icon_objective_add.png'


const Objective = () => {
    const [isShowObjectivePopup, setIsShowObjectivePopup] = useState(false)
    const clickObjectivePopup = () => setIsShowObjectivePopup(isShowObjectivePopup ? false : true)
    const [branchList, setBranchList] = useState(["master","master2","master3","master4","master5","master6"])
    const [isSelected, setIsSelected] = useState(null)

    const selectBranch = (data)=> {
        setIsSelected(data)
    }
    return (
        <div className="titlebox"> {/* //titlebox */}
            <div className="left">
                <button className='btn_objective' onClick={clickObjectivePopup}>
                    Objective
                    <img src={iconArrowIssueTitle} alt="objective" />
                </button>
                {
                    isShowObjectivePopup && 
                    <div className="objectivePopup innerShadow2">
                        <div className="wrap">
                            <div className="searchbox">
                                <input type="text" />
                                <button className='btn_search'>
                                    <img src={iconBranchSearchNavy} alt="search" />
                                </button>
                            </div>
                            <h5>Switch board</h5>
                            <div className="items innerShadow2">
                                {branchList.map((data)=>{
                                    return (<button onClick={()=>selectBranch(data)}>
                                    {isSelected === data && 
                                    <img src={iconBranchArrowDownBlack} alt="check"/>}
                                    {data}
                                    </button>)})}
                            </div>
                            <div className="btnbox">
                                <button className='btn_confirm'>Create board</button>
                                <button className='btn_del'>Delete board</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="right">
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <button><img src={iconBranchSearch} /></button>
                </div>
                <button className='btn_add'>
                    <img src={iconObjectiveAdd} alt="add" />
                </button>
                <button>
                    <img src={iconObjectiveMenu} alt="menu" />
                </button>
            </div>
        </div>
    )
}

export default Objective