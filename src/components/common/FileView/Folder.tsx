import TreeItem from '@material-ui/lab/TreeItem'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FileTreeItemFile from './File'

const FileTreeItemFolder = (props) => {
    const {info, projectId} = props
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [isLoading, setIsLoading] = useState(false)
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])

    const renderData = async() => {
        await axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/directory`, {project:{directory_name:info.path}})
        .then((res) => {
            const directories_ = res.data.directories.filter((data)=>{ return !(data==='.' || data==='..')}) // temp-filter
            const files_ = res.data.files
            setDirectories(directories_)
            setFiles(files_)
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                console.log(e.response)
            }
            else if(e.request) {
                
            }
            else console.log('Error', e.message)
        })
        setIsLoading(true)
    }

    const handleSelect = () => {
        if(!isLoading) renderData()
    }
    
    const renderFolder = () =>{
        return directories.map((data)=>{
            return <FileTreeItemFolder info={{path: info.path + data +'/', name: data}} projectId={projectId}/>
        })
    }
    const renderFile = () => {
        return files.map((data)=>{
            return <FileTreeItemFile info={{path: info.path + data, name: data}} projectId={projectId}/>
        })
    }
    
    return (
        <TreeItem key={info.path} nodeId={info.path} label={info.name} onClick={handleSelect}>
            {renderFolder()}
            {renderFile()}
        </TreeItem>
    )
}

export default FileTreeItemFolder