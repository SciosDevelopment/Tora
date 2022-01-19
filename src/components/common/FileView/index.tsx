import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import axios from 'axios'
import FileTreeItemFolder from './Folder'
import iconSearch from 'src/img/ide/icon_search.png'
import iconFork from 'src/img/ide/icon_fork.png'
import iconArrowDown2 from 'src/img/ide/icon_arrow_down2.png'
import iconAdd from 'src/img/ide/icon_add.png'
import { ReadFile } from './File/ContextMenu'

import iconBranchDown from 'src/img/img2/icon_branch_down.png'
import iconBranchShare from 'src/img/img2/icon_branch_share.png'
import iconBranchArrowDownBlack from 'src/img/img2/icon_branch_arrow_down_black.png'
import iconBranchSearchNavy from 'src/img/img2/icon_branch_search_navy.png'
import iconBranchAdd from 'src/img/img2/icon_branch_add.png'
import iconBranchSearch from 'src/img/img2/icon_branch_search.png'
import iconBranchClose from 'src/img/img2/icon_branch_close.png'

const FileView = (props) => {
    // example : https://material-ui.com/components/tree-view/
    const {setFile, projectId, close} = props
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
            <div className="header">
                <div className="left">
                    <img src={iconBranchShare} alt="share" />
                    <button onClick={clickBranch}>Master</button>
                    <img src={iconBranchDown} alt="down" />
                    {
                        isShowBranchesPopup &&
                        <div className="branchesPopup innerShadow2">
                            <div className="wrap">
                                <div className="searchbox">
                                    <input type="text" />
                                    <button>
                                        <img src={iconBranchSearchNavy} alt="search" />
                                    </button>
                                </div>
                                <h5>Branches</h5>
                                <div className="items innerShadow2">
                                    <button>
                                        <img src={iconBranchArrowDownBlack} alt="check" />
                                        master
                                    </button>
                                    <button>
                                        master1
                                    </button>
                                    <button>
                                        master2
                                    </button>
                                    <button>
                                        master3
                                    </button>
                                    <button>
                                        master4
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="right">
                    <button><img src={iconBranchAdd} alt="add" /></button>
                    <button><img src={iconBranchSearch} alt="search" /></button>
                    {close!=null && <button onClick={closePopup}><img src={iconBranchClose} alt="close" /></button>}
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