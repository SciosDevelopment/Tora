import React from 'react'
import './style/BlogWritePage.scss'

const BlogWritePage = () => {
    return (
        <div className = "Blog-write-main">
            <div className = "Blog-write-view">
                <div className = "Blog-write-produce">
                    <div className = "Blog-write-title">
                        <div className = "Blog-write-title-left">
                            <div className = "Blog-write-title-tag-left">
                                <div className = "Blog-write-title-left">
                                    <p>제목을 입력하세요.</p>
                                </div>
                                <div className = "Blog-write-tag-left">
                                    <p>태그를 입력하세요.</p>
                                </div>
                            </div>
                            <div className = "Blog-write-toolbar-left">
                            </div>
                        </div>
                        <div className = "Blog-write-title-right">
                            <div className = "Blog-write-title-tag-right">
                                <div className = "Blog-write-title-right">
                                    <p>제목을 입력하세요.</p>
                                </div>
                                <div className = "Blog-write-tag-right">
                                    <p>태그를 입력하세요.</p>
                                </div>
                            </div>
                            <div className = "Blog-write-toolbar-right">
                            </div>
                        </div>
                    </div>

                    <div className = "Blog-write-text">
                        <p>Markdown 사용가능</p>
                    </div>

                    <div className = "Blog-write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BlogWritePage