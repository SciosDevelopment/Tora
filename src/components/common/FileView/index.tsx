import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import FileTreeItemFolder from './Folder'
import { ReadFile } from './File/ContextMenu'
import FileViewHeader from './header'

const FileView = (props) => {
    // example : https://material-ui.com/components/tree-view/
    const {setFile, projectId, close, isIde} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    // another ref : https://www.npmjs.com/package/react-folder-tree
    const [expanded, setExpanded] = useState([])
    const [selected, setSelected] = useState([])

    // viewState
    const [isShowBranchesPopup, setIsShowBranchesPopup] = useState(false)
    const clickBranch = () => setIsShowBranchesPopup(isShowBranchesPopup ? false: true)
    const closePopup = () => { close() }

    const useStyles = makeStyles({
        root: {
          height: '100%',
          padding: 3,
          //flexGrow: 1,
          maxWidth: 1000,
          overflow: 'hidden',
          overflowY: 'scroll',
          background:'transparent',
        },
        label: {
            fontSize: '0.7rem',
            overflowX:'hidden',
            whiteSpace:'nowrap',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            color:'red'
        },
    })

    const classes = useStyles()

    // OnToggle
    const handleToggle = (event, nodeIds) => {
        let difference = nodeIds.filter(x => !expanded.includes(x))
                        .concat(expanded.filter(x => !nodeIds.includes(x)))
        setExpanded(nodeIds)
    }
  
    // OnSelected
    const handleSelect = (event, nodeIds) => { 
        if(nodeIds == selected)  // double click시 
            setFile != null ? ReadFile(projectId, nodeIds, setFile) :
                alert("Select File " + nodeIds)   
        else setSelected(nodeIds)
    }
    
    return (
        <div className="fileView">
            <FileViewHeader projectId={projectId} close={close} isIde={isIde}/>
            <div className="body">
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    expanded={expanded}
                    selected={selected}
                    onNodeToggle={handleToggle}
                    onNodeSelect={handleSelect}>       
                    <FileTreeItemFolder 
                        info={{path: "/", name:"root" /* ProjectName 적기 */}}
                        projectId={projectId}
                        setFile={setFile}/>
                </TreeView>
            </div>
        </div>
    )
}

export default FileView