const ProjectSetting = (props) => {
    const {projectId} = props
    return (
    <>
        <div className="projectSetting">
            <div>
                <div className="title">Project name</div>
                <input type="text" placeholder="프로젝트이름을 입력해주세요"/>
            </div>
            <div>
                <div className="title">Project description (optional)</div>
                <textarea placeholder="프로젝트에 대한 설명을 간단히 적어주세요"/>
            </div>
            <div>
                <div className="title">Language</div>
                <input type="text" placeholder="태그로 프로그램 언어를 입력해주세요"/>
            </div>
            <div>
                <div className="title">License</div>
                <div>
                    <img src="#" alt="addLicense"/>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div className="title">Social information</div>
                <div className="socialInfo">
                    <div>
                        <img src="#" alt="email"/>
                        <input type="text" placeholder="이메일 주소를 입력해주세요"/>
                    </div>
                    <div>
                        <img src="#" alt="youtube"/>
                        <input type="text" placeholder="유튜브 주소를 입력해주세요"/>
                    </div>
                    <div>
                        <img src="#" alt="github"/>
                        <input type="text" placeholder="Github 계정을 입력해주세요"/>
                    </div>
                    <div>
                        <img src="#" alt="gitlab"/>
                        <input type="text" placeholder="GitLab 계정을 입력해주세요"/>
                    </div>
                    <div>
                        <img src="#" alt="facebook"/>
                        <input type="text" placeholder="페이스북 주소를 입력해주세요"/>
                    </div>
                    <div>
                        <img src="#" alt="twiter"/>
                        <input type="text" placeholder="트위터 계정을 입력해주세요"/>
                    </div>
                </div>
            </div>
            <div className="btnlist">
                <button onClick={()=>alert("확인")}>
                    Save changes
                </button>
                <button onClick={()=>alert("취소")}>
                    Cancel
                </button>
            </div>
        </div>
    </>
    )
}

export default ProjectSetting