import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import axios from 'axios'
import FileTreeItemFolder from './Folder'
import './style/FileView.scss'
import iconSearch from 'src/img/ide/icon_search.png'
import iconFork from 'src/img/ide/icon_fork.png'
import iconArrowDown2 from 'src/img/ide/icon_arrow_down2.png'
import iconAdd from 'src/img/ide/icon_add.png'
import { ReadFile } from './File/ContextMenu'

const FileView = (props) => {
    // example : https://material-ui.com/components/tree-view/
    const {setFile, projectId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    // another ref : https://www.npmjs.com/package/react-folder-tree
    const [expanded, setExpanded] = useState([])
    const [selected, setSelected] = useState([])
    
    const useStyles = makeStyles({
        root: {
          height: '100%',
          padding: 3,
          //flexGrow: 1,
          maxWidth: 1000,
          overflow: 'hidden',
          overflowY: 'scroll',
          background:'white',
        },
        label: {
            fontSize: '0.7rem',
            overflowX:'hidden',
            whiteSpace:'nowrap',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
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
            ReadFile(projectId, nodeIds, setFile)
        else setSelected(nodeIds)
    }

    return (
        <div className="fileView">
            <div className="header">
                <div className="left">
                    <button className="btnFolderUser">
                        <img src={iconFork} alt="fork" />
                        <span>Master</span>
                        <img src={iconArrowDown2} className="iconArrowDown2" alt="down" />
                    </button>
                </div>
                <div className="right">
                    <button className="btnAdd">
                        <img src={iconAdd} alt="add"/>
                    </button>
                    <button className="btnSearch">
                        <img src={iconSearch} alt="search" />
                    </button>
                </div>
            </div>
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
                        info={{path: "/", name:"ProjectName" /* ProjectName 적기 */}}
                        projectId={projectId}
                        setFile={setFile}/>
                </TreeView>
            </div>
        </div>
    )
}

export default FileView