import React from 'react';
import './style/ProjectLicenseWrite.scss'
import MarkdownEditor from 'src/components/common/MarkdownEditor'

const ProjectLicenseWrite = () => {
    return (
        <div className = "Project-License-Write">
            <div className = "Project-License-Write-view">
                <div className = "Project-License-Write-produce">
                    <div className = "Project-License-Write-top">
                        <div className = "Project-License-Write-title">
                            <input type="text" placeholder="제목을 입력하세요."/>
                            {/* <p>제목을 입력하세요.</p> */}
                        </div>
                        <div className = "Project-License-Write-tag">
                            <p>태그를 입력하세요.</p>
                        </div>
                    </div>
                
               

                    <div className = "Project-License-Write-text">
                       <MarkdownEditor height="100%"/>
                    </div>

                    <div className = "Project-License-Write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectLicenseWrite;