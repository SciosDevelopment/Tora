import React from 'react';
import './style/IssueWriteText.scss'
import MarkdownEditor from 'src/components/common/MarkdownEditor'

const IssueWriteText = () => {
    return (
        <div className = "Issue-write-main">
            <div className = "Issue-write-view">
                <div className = "Issue-write-produce">
                    <div className = "Issue-write-top">
                        <div className = "Issue-write-title">
                            <input type="text" placeholder="제목을 입력하세요."/>
                            {/* <p>제목을 입력하세요.</p> */}
                        </div>
                        <div className = "Issue-write-tag">
                            <p>태그를 입력하세요.</p>
                        </div>
                    </div>
                
               

                    <div className = "Issue-write-text">
                       <MarkdownEditor height="100%"/>
                    </div>

                    <div className = "Issue-write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueWriteText;