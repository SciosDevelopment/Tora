import Searchbar from 'src/components/common/Searchbar'
import CollaborItem from './CollaborItem'
const ProjectCollaborator = (props) => {
    const {projectId} = props    
    
    const Collaborator = () => {
        return (
        <>
            <div className="colTitle">
                <div>Contributors list <p>{123}</p></div>
                <div>Content</div>
                <div>Update Date</div>
            </div>
            
            {[1,2,3,4,5].map((data)=>{ return <CollaborItem projectId={projectId} data={data}/> }) /* tmp */} 
        </>)
    }

    return (
        <div className="projectCollaborator">
            <div className="head">
                <div className="left"/>
                <div className="right">
                    <div className="container">
                        <Searchbar/>
                    </div>
                </div>
            </div>
            <div className="body">
                <Collaborator/>
            </div>    
        </div>
    )
}

export default ProjectCollaborator