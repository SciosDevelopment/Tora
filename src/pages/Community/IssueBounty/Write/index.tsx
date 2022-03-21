import React, {useState, useEffect} from 'react'
import Header from '../../../../components/common/Header/Header'


const IssueWritePage = () => {
    
    // Component init
    useEffect(()=> {init()}, [])

    const init = () =>{

    }

    return (        
        <>
        <Header/>
        <div className="issuewrite"> 
            <div>
                this is navigation
            </div> 
            <div>
                <p className="title">프로젝트 선택</p>
                <div>
                    <select name="project" id="projectList">
                        <option value="">--Please choose Region--</option>
                    </select>
                </div>
            </div>
            <div>
                <p className="title">이슈 형태</p>
                <div className="issueSort">
                    <div>
                        <p className="title">Free 1:1</p>
                        <input type="radio" name="issueSort"/>
                    </div>
                    <div>
                        <p className="title">Bounty 1:1</p>
                        <input type="radio" name="issueSort"/>
                    </div>
                    <div>
                        <p className="asd">Bounty 1:N</p>
                        <input type="radio" name="issueSort"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="editor">
                    {`Editor`}
                </div>
            </div>
            <div>
                <div className="infoBox">
                    <div>
                        <p className="title">이슈 타입</p>
                        <select name="project">
                            <option value="">--Please choose Region--</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">난이도</p>
                        <select name="project">
                            <option value="">--Please choose Region--</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">시작일</p>
                        <select name="project">
                            <option value="">--Please choose Region--</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">마감일</p>
                        <select name="project">
                            <option value="">--Please choose Region--</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <p className="title">이슈 주소</p>
                <input type="text" placeholder="text"/>
            </div>
            <div className="btnlist">
                <button onClick={()=>{}}>
                    Issue post
                </button>
                <button onClick={()=>alert("취소")}>
                    Cancel
                </button>
            </div>   
        </div>
        </>
    )
}

export default IssueWritePage