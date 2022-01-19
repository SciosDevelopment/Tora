import TreeItem from '@material-ui/lab/TreeItem'
import {useState, useRef} from 'react'
import FileTreeItemFile from '../File'
import ContextMenu, { LoadDirectory } from './ContextMenu'

const FileTreeItemFolder = (props) => {
    const {info, projectId, setFile} = props
    const [isLoading, setIsLoading] = useState(false)
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const ref_ = useRef<HTMLDivElement>()
    
    const refresh = async() => {
        LoadDirectory(projectId, info.path, setDirectories, setFiles)
        setIsLoading(true)
    }

    const handleSelect = () => { if(!isLoading) refresh() }
    
    const renderFolder = () =>{
        return directories.map((data)=>{
            return <FileTreeItemFolder info={{path: info.path + data +'/', name: data}}
                projectId={projectId}
                setFile={setFile}
                refresh={refresh}/>
        })
    }

    const renderFile = () => {
        return files.map((data)=>{
            return <FileTreeItemFile 
                info={{path: info.path + data, name: data}}
                projectId={projectId}
                setFile={setFile}
                refresh={refresh}/>
        })
    }
    
    return (<>
        <TreeItem key={info.path} nodeId={info.path} label={info.name} ref={ref_} onClick={handleSelect}>
            {renderFolder()}
            {renderFile()}
        </TreeItem>
        
        {setFile != null && 
        <ContextMenu target={ref_}
            route={info.path} 
            projectId={projectId}
            setFile={setFile}
            refresh={refresh}/>
        }
    </>)
}

export default FileTreeItemFolder