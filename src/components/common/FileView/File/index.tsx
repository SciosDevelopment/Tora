import TreeItem from '@material-ui/lab/TreeItem'
import { useRef } from 'react'
import ContextMenu from './ContextMenu'

const FileTreeItemFile = (props) => {
    const {info, projectId, setFile, refresh} = props
    const ref_ = useRef<HTMLDivElement>()

    return <>
        <TreeItem 
            key={info.path}
            nodeId={info.path}
            label={info.name}
            ref={ref_}/>

        {setFile != null && <ContextMenu 
            target={ref_} 
            info={info}
            projectId={projectId}
            setFile={setFile}
            refresh={refresh}/>
        }
    </>
}

export default FileTreeItemFile