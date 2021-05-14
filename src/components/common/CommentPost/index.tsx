import React from 'react';
import MarkdownEditor from '../MarkdownEditor';
import './style/CommentPost.scss'

const CommentPost:React.FC = () => {
    return (
        <div className = "CommentPost-main">
            <div className = "CommentPost-container">
                <MarkdownEditor initialEditType="wysiwyg"/>
                <div className = "CommentPost-button">
                    <input type='submit' value="Comment"/>
                </div>
            </div>
        </div>
    )
}

export default CommentPost