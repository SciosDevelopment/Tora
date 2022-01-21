import {useEffect, useState} from 'react'
import iconBranchDown from 'src/img/img2/icon_branch_down.png'
import iconBranchShare from 'src/img/img2/icon_branch_share.png'
import iconBranchAdd from 'src/img/img2/icon_branch_add.png'
import iconBranchSearch from 'src/img/img2/icon_branch_search.png'
import iconBranchClose from 'src/img/img2/icon_branch_close.png'
import PopupBranchview from '../Modal/PopupBranchview'

const FileViewHeader = (props) => {
    // example : https://material-ui.com/components/tree-view/
    const {projectId, close, isIde} = props

    // viewState
    const [isShowBranchesPopup, setIsShowBranchesPopup] = useState(false)
    const clickBranch = () => setIsShowBranchesPopup(isShowBranchesPopup ? false: true)
    const [curbranch, setCurbranch] = useState(null)
    const closePopup = () => { close() }

    useEffect(()=>{
        init()
    },[])

    const init = () => {
        // projectId를 이용해서 curBranch 가져오도록 혹은 terminal을 이용해서 정보를 가져오기
        setCurbranch("master")
    }

    
    return (
        <div className="header">
            <div className="left">
                <img src={iconBranchShare} alt="share" />
                <button onClick={clickBranch}>{curbranch}</button>
                <img src={iconBranchDown} alt="down" />
                {
                    isShowBranchesPopup &&
                    <PopupBranchview projectId={projectId} cur={curbranch} setCur={setCurbranch} isIde={isIde}/>
                }
            </div>

            <div className="right">
                <button><img src={iconBranchAdd} alt="add" /></button>
                <button><img src={iconBranchSearch} alt="search" /></button>
                {close!=null && <button onClick={closePopup}><img src={iconBranchClose} alt="close" /></button>}
            </div>
        </div>
    )
}

export default FileViewHeader