import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import axios from 'axios'
import FileTreeItemFolder from './Folder'

const FileView = (props) => {
    // example : https://material-ui.com/components/tree-view/
    const {setFile} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const projectId = 7 // temp projectID - IDE Set
    // another ref : https://www.npmjs.com/package/react-folder-tree
    const [expanded, setExpanded] = useState([])
    const [selected, setSelected] = useState([])

    const useStyles = makeStyles({
        root: {
          height: '100%',
          padding: 3,
          //flexGrow: 1,
          maxWidth: 200,
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
        console.log(difference)
        setExpanded(nodeIds)
    }
  
    // OnSelected
    const handleSelect = (event, nodeIds) => { 
        if(nodeIds == selected) { // double click시 
            try {
                // directory인 경우, Error로 return
                var filename_ = nodeIds.match(/[^\\/\n]+$/)[0]
                var filepath_ = nodeIds?.replace(filename_, '')
            }
            catch(e) {return}
  
            var fileData = { filename: null, filetype: null, filepath: null, fileContent : null}    
            var filetype_ = getFiletype()
            const data = {"project": { directory_name: filepath_, file_name: filename_ }}
            axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/file`, data).then(res => res.data)
            .then(data => {
                fileData = {
                    filename: filename_,
                    filetype: filetype_,
                    filepath: filepath_, 
                    fileContent: data.content
                }
                setFile(fileData)
            })
            .catch(err=> console.log("this is error " + err)) // error handling 필요       
        }
        else setSelected(nodeIds)
    }
    
    // temp - 더 추가해야함
    const getFiletype = (extension = "text") => {
        switch(extension) {
            case 'js': case 'jsx': case 'ts': case 'tsx':
                return 'javascript'
            case 'py': 
                return 'python'
            default:
                return 'text'
        }
    }

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon/>}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}>       
            <FileTreeItemFolder info={{path: "/", name:"ProjectName" /* ProjectName 적기 */}} projectId={projectId}/>
        </TreeView>
    )
}

export default FileView