import React, {useState, useEffect} from 'react'
import './style/FileView.scss'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import axios from 'axios'

const FileView = () => {
    // example : https://material-ui.com/components/tree-view/


    // another ref : https://www.npmjs.com/package/react-folder-tree
    const [data, setData] = useState({path:'.',name:'loading..', children:null, type:"null", size:0, })
    const [expanded, setExpanded] = useState([])
    const [selected, setSelected] = useState([])
    
    const init = async() => {
        getFileTree()
    }

    const getFileTree = async() => { 
        // local test code - 임시, api 서버에서 구현되어야함.
        let result = await axios.get('http://localhost:3001/getTree')
        .then(res => (res.data))
        .then(data => {setData(data)})
        .catch(err=> console.log("this is error " + err))            
    }

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

    const renderTree = (nodes, depth) => (
      <TreeItem key={nodes.path} nodeId={nodes.path} label={nodes.name}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node,depth+1)) : null}
      </TreeItem>
    )
    useEffect(() => { init() },[]) // componentDidMount

    useEffect(() => { }, [data]) // componentUpdateMount

    // OnToggle
    const handleToggle = (event, nodeIds) => setExpanded(nodeIds)
    
    // OnSelected
    const handleSelect = (event, nodeIds) => { 
        if(nodeIds == selected) {
            console.log('handleSelect : ' + nodeIds)
            // // 여기서 state 변경
            // let result = axios.get('http://localhost:3001/getFile', {params: {route:nodeIds}})
            // .then(res => (res.data))
            // .then(data => {
            //     if(data.filename != null && data.filetype != null)
            //         addFileList(data)
            // }
            // )
            // .catch(err=> console.log("this is error " + err))       
        }
        else setSelected(nodeIds)
    }

    const addFileList = (fileinfo) => {
        console.log("addFileList : " + fileinfo)
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
         {renderTree(data, 1)}
        </TreeView>
    );

};

export default FileView