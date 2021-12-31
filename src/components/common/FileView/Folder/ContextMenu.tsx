import ContextMenu from '../../ContextMenu'
import { CreateFile } from '../File/ContextMenu'
import axios from 'axios'
const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

export const LoadDirectory = async(projectId, path, setDirectories, setFiles)=>{
    await axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/directory/read`, {inside_path:path})
        .then((res) => {
            const directories_ = res.data.directories.filter((data)=>{ return !(data==='.' || data==='..')}) // temp-filter
            const files_ = res.data.files
            setDirectories([...directories_])
            setFiles([...files_])
        })
        .catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                console.log(e.response)
            }
            else if(e.request) {}
            else console.log('Error', e.message)
        })
}
export const CreateDirectory = (projectId, dirname, path, callback) => {
    // dirname : null -> input form 제공
    // path : null 인 경우에 대한 처리 필요
    try {
        var path_ = path.slice(0, -1)
        dirname = dirname ? dirname : prompt('디렉토리명을 입력하세요', 'example') // temp alert
        if(dirname === null) return // propmpt cancel
        const data = { directory_name : dirname, inside_path : path_ }  
        axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/directory/create`, data).then(() => { callback ? callback() : alert("refresh Error") })
        .catch(e=> {
            if(e.response) {
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 폴더가 이미 존재합니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("폴더가 이미 존재합니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("폴더 생성에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return}
}

export const RenameDirectory = (projectId, changeName, path, callback) => {
    // { "directory_name": "testt", "change_directory_name": "lib2", "inside_path": "" }

    try {
        var dirname = path.slice(0, -1).match(/[^\\/\n]+$/)[0]
        var inside_path = path?.slice(0, -1).replace(dirname, '').slice(0, -1)
        changeName = changeName ? changeName : prompt('변경할 디렉토리명을 입력하세요', 'example') // temp alert
        if(changeName === null) return // propmpt cancel
        const data = {directory_name:dirname, change_directory_name  : changeName, inside_path : inside_path }  
        axios.put(`${SERVER_IP}/api/v1/projects/${projectId}/directory/rename`, data).then(() => { callback ? callback() : alert("refresh Error") })
        .catch(e=> {
            if(e.response) {
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 폴더가 이미 존재합니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("폴더가 이미 존재합니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("폴더 생성에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return}
}
// 남은 목록 : update(put), rename(put), delete(delete)

const FolderContextMenu = (props) => {
    const {target, route, projectId, refresh} = props
    
    const menuItems = [
        { title: '새폴더 만들기', shortcut: null, onClick: ()=>{CreateDirectory(projectId, null, route, refresh)}},
        { title: '복사', shortcut: "Ctrl+C", onClick: () => {alert(route)}},
        { title: '붙여넣기', shortcut: "Ctrl+V", onClick: () => {alert('Item 3 clicked')}},
        { title: '삭제', shortcut: "Delete", onClick: () => {alert('Item 4 clicked')}},
        { title: '이름변경', shortcut: "F2", onClick: () => {RenameDirectory(projectId, null, route, refresh )}},
        { title: '경로복사', shortcut: null, onClick: () => {alert('Item 6 clicked')}},
        { title: '폴더공유하기', shortcut: null, onClick: () => {alert('Item 7 clicked')}},
        { title: '파일 내보내기(다운로드)', shortcut: null, onClick: () => {alert('Item 8 clicked')}},
        { title: '속성', shortcut: "Ctrl+O", onClick: () => {alert('Item 9 clicked')}}
    ]
    
    return (<ContextMenu target={target} items={menuItems}/>)
}

export default FolderContextMenu