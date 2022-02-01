const ProjectStatus = (props) => {
    const {projectId} = props
    return (
    <>
        <div className="projectStatus">
            <div>
                <div className="title">Default image</div>
                <div className="content">
                    <div>GCC/G++, GDB, Clang/Clang++</div>
                </div>
            </div>
            <div>
                <div className="title">Information</div>
                <div className="content">
                    <div className="info">
                        <div><p>CPU</p><p>0.5</p></div>
                        <div><p>memory</p><p>500MB</p></div>
                        <div><p>storage</p><p>1GB</p></div>
                    </div>
                    <div className="info">
                        <div><p>OS</p><p>Ubuntu 18.04</p></div>
                        <div><p>Language</p><p>C++</p></div>
                        <div><p>Region</p><p>Oregon</p></div>
                    </div>
            </div>
            </div>
            <div>
                <div className="title">Storage {"550/1GB"}</div>
                <div className="content">
                   <progress value={550} max={1000}/>
                </div>
            </div>
            <div>
                <div className="title">Delete</div>
                <button className="delete" onClick={()=>alert("delete")}>
                    Delete Project
                </button>
            </div>
        </div>
    </>
    )
}

export default ProjectStatus