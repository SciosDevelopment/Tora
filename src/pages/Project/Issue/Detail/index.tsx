import React from 'react';
import './style/IssueDetail.scss'
import modify from '../../../../img/modify-white.png'
import exclamation from '../../../../img/exclamation yellow.png'
import MainText from './MainText/IssueDetailMainText'
import Set from './Set/IssueDetailSet'
import Comments from './Comments/IssueDetailComments'
import SideMenu from '../../../../components/common/SideMenu/IssueSideMenu'
import ConnectMenu from '../../../../components/common/SideMenu'

const IssueDetail = () => {
    return (
        <div className = "Issue-Detail-main">
            <div className  ="Issue-Detail-left-button">
                <SideMenu/>
            </div>
            <div className  ="Issue-Detail-right-button">
                <ConnectMenu/>
            </div>
            <div className = "Issue-Detail-header">
                    <div className = "Issue-Detail-type">
                        <img src = {exclamation}/>
                        <p>Issue</p>
                    </div>
                    <div className = "Issue-Detail-modify">
                        <img src = {modify}/>
                    </div>
            </div>
            <div className = "Issue-Detail-view">
                <MainText/>
            </div>
            <div className = "Issue-Detail-set">
                <Set/>
            </div>
            <div className = "Issue-Detail-comments">
                <Comments/>
            </div>
        </div>
    );
};

export default IssueDetail;