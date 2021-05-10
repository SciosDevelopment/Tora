import React from 'react'
import './style/BlogWritePage.scss'

const BlogWritePage = () => {
    return (
        <div className = "Blog-write-main">
            <div className = "Blog-write-view">
                <div className = "Blog-write-produce">
                    <div className = "Blog-write-title-tag">
                        <div className = "Blog-write-title">
                            <p>제목을 입력하세요.</p>
                        </div>
                        <div className = "Blog-write-tag">
                            <p>태그를 입력하세요.</p>
                        </div>
                    </div>
                    <div className = "Blog-write-toolbar">

                    </div>
                    <div className = "Blog-write-text">
                        <p>Markdown 사용가능</p>
                    </div>
                    <div className = "Blog-write-button">
                    <input type='submit' value="Create"/>
                    </div>
                </div>

                <div className = "Blog-write-preview">

                </div>
            </div>
            
        </div>
    );
};

export default BlogWritePage