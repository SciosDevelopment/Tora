import React from 'react';
import './style/CommentList.scss'
import Comment from '../Comment'
import CommentPost from '../CommentPost'


const CommentList = () => {
    return (
        <>
            <Comment/> {/* List로 변경 */}
            <CommentPost/>
        </>
    );
};

export default CommentList