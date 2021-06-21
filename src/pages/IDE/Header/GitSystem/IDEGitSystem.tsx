import React from 'react';
import './style/IDEGitSystem.scss'
import CommitIcon from '../../../../img/tora-git-commit-icon@2x.png'
import PullIcon from '../../../../img/tora-git-pull-icon@2x.png'
import PushIcon from '../../../../img/tora-git-push-icon@2x.png'
import FetchIcon from '../../../../img/tora-git-fetch-icon@2x.png'
import BranchIcon from '../../../../img/tora-git-branch-icon@2x.png'
import MergeIcon from '../../../../img/tora-git-merge-icon@2x.png'
import TagIcon from '../../../../img/tora-git-tag-icon@2x.png'
import PullReqIcon from '../../../../img/tora-git-pull-request-icon@2x.png'

const IDEGitSystem = () => {
    return (
        <div className = "IDE-GitSystem-main">
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {CommitIcon} id = "ide-commit-icon"/>
                <p>Commit</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {PullIcon}/>
                <p>Pull</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {PushIcon}/>
                <p>Push</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper" >
                <img src = {FetchIcon} id = "ide-fetch-icon"/>
                <p>Patch</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {BranchIcon}/>
                <p>Branch</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {MergeIcon}/>
                <p>Merge</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {TagIcon}/>
                <p>Tags</p>
            </div>
            <div className = "IDE-GitSystem-icon-wrapper">
                <img src = {PullReqIcon}/>
                <p>Pull Request</p>
            </div>
            
        </div>
    );
};

export default IDEGitSystem;