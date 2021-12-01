import TreeItem from '@material-ui/lab/TreeItem'
import { useRef } from 'react'
import ContextMenu from './ContextMenu'
const FileTreeItemFile = (props) => {
    const {info} = props
    const ref_ = useRef<HTMLDivElement>()

    return <><TreeItem key={info.path} nodeId={info.path} label={info.name} ref={ref_}/>
    <ContextMenu target={ref_}/></>
}

export default FileTreeItemFile