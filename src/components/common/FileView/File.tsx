import TreeItem from '@material-ui/lab/TreeItem'

const FileTreeItemFile = (props) => {
    const {info} = props
    return <TreeItem key={info.path} nodeId={info.path} label={info.name}/>
}

export default FileTreeItemFile