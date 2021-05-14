import React from 'react';
import './style/CommentList.scss'
import Comment from '../../../../components/common/Comment'
import CommentPost from '../../../../components/common/CommentPost'


const BlogDetailMain = () => {
    return (
        <>
            <Comment/> {/* List로 변경 */}
            <CommentPost/>
        </>
    );
};

export default BlogDetailMain