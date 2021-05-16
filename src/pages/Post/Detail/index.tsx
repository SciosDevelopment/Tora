import React from 'react'
import Header from 'src/components/common/Header/Header'
import './style/PostDetailMain.scss'
import PostMainText from './MainText'
import Comments from '../../../components/common/Comment'
import Commentspost from '../../../components/common/CommentPost'

const  PostDetailMain = () => {
    return (
        <>
        <Header/>
        <div className = "Post-Detail">
            <div className = "Post-Detail-left-button">

            </div>
            <div className = "Post-Detail-main">
                <div className = "Post-Detail-view">
                    <div className = "Post-Detail-maintext-view">
                        <PostMainText/>
                    </div>

                    <div className = "Post-Detail-comments-view">
                        <Comments/>
                        <Commentspost/>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default PostDetailMain