import React from 'react'
import Header from 'src/components/common/Header/Header'
import MarkdownEditor from 'src/components/common/MarkdownEditor'
import './style/PostWritePage.scss'

const PostWritePage = () => {
    return (        
        <>
        <Header/>
        <div className = "Post-write-main">
            <div className = "Post-write-view">
                <div className = "Post-write-produce">
                    <div className = "Post-write-top">
                        <div className = "Post-write-title">
                            <input type="text" placeholder="제목을 입력하세요."/>
                            {/* <p>제목을 입력하세요.</p> */}
                        </div>
                        <div className = "Post-write-tag">
                            <p>태그를 입력하세요.</p>
                        </div>
                    </div>
                
               

                    <div className = "Post-write-text">
                       <MarkdownEditor height="100%"/>
                    </div>

                    <div className = "Post-write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PostWritePage