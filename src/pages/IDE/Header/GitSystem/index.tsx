import CommitIcon from '../../../../img/tora-git-commit-icon@2x.png'
import PullIcon from '../../../../img/tora-git-pull-icon@2x.png'
import PushIcon from '../../../../img/tora-git-push-icon@2x.png'
import BranchIcon from '../../../../img/tora-git-branch-icon@2x.png'
import GitSystemIcon from './Icon'

const IDEGitSystem = () => {
    const tempFnc = () => alert("!?")

    // 추후에 함수 부분 hooks로 처리할 예정
    const IconList = [
        {icon : CommitIcon, title : "Commit" , onAction : tempFnc},
        {icon : PullIcon, title : "Pull" , onAction : tempFnc},
        {icon : PushIcon, title : "Push" , onAction : tempFnc},
        {icon : BranchIcon, title : "Branch" , onAction : tempFnc}
    ]

    return (
        <>
            { 
                IconList.map((data)=>
                    <GitSystemIcon 
                     icon={data.icon}
                     title={data.title}
                     onAction={data.onAction}/>
            )}
        </>
    )
}

export default IDEGitSystem