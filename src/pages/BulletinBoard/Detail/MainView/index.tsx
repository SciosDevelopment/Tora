import React from 'react';
import './style/BulletinBoardDetailView.scss'
import BulletinBoardDetailMainText from './MainText'
import BulletinBoardDetailTitle from './Title'
import Comments from '../../../../components/common/Comment'
import Commentspost from '../../../../components/common/CommentPost'
import Modifyicon from '../../../../img/modify.png'

const BulletinBoardDetailView = () => {
    return (
        <div className = "BulletinBoard-Detail-view">
            <div className = "BulletinBoard-Detail-title-view">
                <BulletinBoardDetailTitle/>
            </div>
            <div className = "BulletinBoard-Detail-contents-view">
                <BulletinBoardDetailMainText/>
            </div>
            <div className = "BulletinBoard-Detail-comments-view">
                <Comments/>
            </div>
            <div className = "BulletinBoard-Detail-commentspost-view">
                <Commentspost/>
            </div>
        </div>
    );
};

export default BulletinBoardDetailView;