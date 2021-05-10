import React from 'react';
import './style/BlogDetailMain.scss'
import Header from 'src/components/common/Header/Header';
import Maintext from './Maintext/BlogDetailMaintext'
import ContentList from './List'
import Comments from '../../../components/common/Comment'
import Commentspost from '../../../components/common/CommentPost'

const BlogDetailMain = () => {
    return (
        <>
        <Header/>
        <div className = "Blog-Detail">
            <div className = "Blog-Detail-left-button">

            </div>
            <div className = "Blog-Detail-main">
                <div className = "Blog-Detail-view">
                    <div className = "Blog-Detail-maintext-view">
                        <Maintext/>
                    </div>
                    <div className = "Blog-Detail-list-view">
                        <ContentList/>
                    </div>
                    <div className = "Blog-Detail-comments-view">
                        <Comments/> {/* List로 변경 */}
                    </div>
                    <div className = "Blog-Detail-commentspost-view">
                        <Commentspost/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BlogDetailMain;