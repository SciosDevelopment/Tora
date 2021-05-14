import React from 'react'
import Header from 'src/components/common/Header/Header';
import MarkdownEditor from 'src/components/common/MarkdownEditor'
import './style/BlogWriteMain.scss'

const BlogWritePage = () => {
    return (        
        <>
        <Header/>
        <div className = "Blog-write-main">
            <div className = "Blog-write-view">
                <div className = "Blog-write-produce">
                    <div className = "Blog-write-top">
                        <div className = "Blog-write-title">
                            <input type="text" placeholder="제목을 입력하세요."/>
                            {/* <p>제목을 입력하세요.</p> */}
                        </div>
                        <div className = "Blog-write-tag">
                            <p>태그를 입력하세요.</p>
                        </div>
                    </div>
                
               

                    <div className = "Blog-write-text">
                       <MarkdownEditor height="100%"/>
                    </div>

                    <div className = "Blog-write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BlogWritePage