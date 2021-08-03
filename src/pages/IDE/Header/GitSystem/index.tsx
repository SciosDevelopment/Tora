import './style/IDEGitSystem.scss'
import CommitIcon from '../../../../img/tora-git-commit-icon@2x.png'
import PullIcon from '../../../../img/tora-git-pull-icon@2x.png'
import PushIcon from '../../../../img/tora-git-push-icon@2x.png'
import FetchIcon from '../../../../img/tora-git-fetch-icon@2x.png'
import BranchIcon from '../../../../img/tora-git-branch-icon@2x.png'
import MergeIcon from '../../../../img/tora-git-merge-icon@2x.png'
import TagIcon from '../../../../img/tora-git-tag-icon@2x.png'
import PullReqIcon from '../../../../img/tora-git-pull-request-icon@2x.png'
import GitSystemIcon from './Icon'

const IDEGitSystem = () => {
    const tempFnc = () => alert("!?")

    // 추후에 함수 부분 hooks로 처리할 예정
    const IconList = Array(
        {icon : CommitIcon, title : "Commit" , onAction : tempFnc},
        {icon : PullIcon, title : "Pull" , onAction : tempFnc},
        {icon : PushIcon, title : "Push" , onAction : tempFnc},
        {icon : FetchIcon, title : "Fetch" , onAction : tempFnc},
        {icon : BranchIcon, title : "Branch" , onAction : tempFnc},
        {icon : MergeIcon, title : "Merge" , onAction : tempFnc},
        {icon : TagIcon, title : "Tags" , onAction : tempFnc},
        {icon : PullReqIcon, title : "Pull Request" , onAction : tempFnc}
    )

    return (
        <div className = "IDE-GitSystem-main">
            { 
                IconList.map((data)=>
                    <GitSystemIcon 
                     icon={data.icon}
                     title={data.title}
                     onAction={data.onAction}/>
            )}
        </div>
    )
}

export default IDEGitSystem