import React from 'react';
import MarkdownEditor from '../MarkdownEditor';
import './style/CommentPost.scss'

const CommentPost:React.FC = () => {
    return (
        <div className = "CommentPost-main">
            <div className = "Blog-Detail-commentspost-library">
                <div className = "Blog-Detail-commentspost-text">
                    <MarkdownEditor/>
                </div>
                <div className = "Blog-Detail-commentspost-button">
                <input type='submit' value="Comment"/>
                </div>
            </div>
        </div>
    )
}

export default CommentPost