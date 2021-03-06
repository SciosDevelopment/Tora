import ContextMenu from '../../../../components/common/ContextMenu'
import { handleFileList_ } from 'src/pages/IDE/Editor'
import axios from 'axios'
const SERVER_IP = process.env.REACT_APP_BACKEND_HOST

// 내용 추가 필요
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

// 파일 불러오기
export const ReadFile = (projectId, nodeIds, setFile)=> {
    try {
        // directory인 경우, Error로 return
        var filename_ = nodeIds.match(/[^\\/\n]+$/)[0]
        var filepath_ = nodeIds?.replace(filename_, '')
    }
    catch(e) {return}

    var fileData = { filename: null, filetype: null, filepath: null, fileContent : null}    
    var filetype_ = getFiletype()
    
    const data = { inside_path: filepath_, file_name: filename_ }
    axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/file/read`, data).then(res => res.data)
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
// 파일 생성
export const CreateFile = (projectId, filename, path, callback) => {
    try {
        var filename_ = path.match(/[^\\/\n]+$/)[0]
        var path_ = path?.replace(filename_, '').slice(0, -1)
        filename = filename ? filename : prompt('파일명을 입력하세요', 'example.py') // temp alert        
        if(filename === null) return // propmpt cancel
        const data = { file_name : filename, inside_path : path_ }  
        axios.post(`${SERVER_IP}/api/v1/projects/${projectId}/file/create`, data).then(() => { callback ? callback() : alert("refresh Error") })
        .catch(e=> {
            if(e.response) {
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 파일이 이미 존재합니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("파일이 이미 존재합니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("파일 생성에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return}
}
// 파일명 변경
export const RenameFile = (projectId, changeName, path, callback) => {
    try {
        var filename_ = path.match(/[^\\/\n]+$/)[0]
        var path_ = path?.replace(filename_, '').slice(0, -1)
        changeName = changeName ? changeName : prompt('변경할 파일명을 입력하세요', filename_) // temp alert
        if(changeName === null) return // propmpt cancel
        const data = { file_name : filename_, change_file_name: changeName, inside_path : path_ }  
        axios.put(`${SERVER_IP}/api/v1/projects/${projectId}/file/rename`, data).then(() => { 
            callback ? callback() : alert("refresh Error")
            // data 형식 : filename, filepath, change_name
            handleFileList_({filename:filename_, filepath:path?.replace(filename_, ''), change_name:changeName}, "change")
        })
        .catch(e=> {
            if(e.response) {
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 파일이 이미 존재합니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("파일이 이미 존재합니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("파일명 변경에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return}
}
// 파일 저장
export const UpdateFile = (projectId, filename, path, filecontent) => {
    try {
        const data = { file_name : filename, inside_path : path.slice(0, -1), file_content: filecontent }
        axios.put(`${SERVER_IP}/api/v1/projects/${projectId}/file/update`, data)
        .then(() => { return true })
        .catch(e=> {
            if(e.response) {
                console.log(e.response)
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 파일이 존재하지않습니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("파일저장이 실패했습니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("파일저장 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return false}

    return true
}
// 파일 삭제
export const DeleteFile = (projectId, path, callback) => {
    try {
        var filename_ = path.match(/[^\\/\n]+$/)[0]
        var path_ = path?.replace(filename_, '').slice(0, -1)
        // 임시로 capsule화
        // cors setting - delete부분 필요
        const data = { data: { file_name : filename_, inside_path : path_ } }
        axios.delete(`${SERVER_IP}/api/v1/projects/${projectId}/file/delete`, data).then(() => { 
            callback ? callback() : alert("refresh Error")
            handleFileList_({filename:filename_, filepath:path?.replace(filename_, '')}, "delete")
        })
        .catch(e=> {
            console.log(e.request)
            if(e.response) {
                var status = e.response.status // or use message
                // 404 : Project could not be found, User could not be found, Directory does not exist, File already exist
                if(status === 404) {alert("경로를 찾을수 없거나, 파일이 이미 삭제되었습니다.")}
                // 401, 403 : do not have project permission
                else if(status === 403 || status === 401) {alert(" 해당 프로젝트에 대한 권한이 없습니다.")}
                // 409 : error create file <40x>
                else if(status === 409) {alert("파일이 이미 삭제되었습니다.")}
                // 400 - 500 : not-handling error
                else if(status >= 400 && status < 500) alert("파일 삭제에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }
            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    } catch(e) {return}
}

const FileContextMenu = (props) => {
    const {target, info, projectId, setFile, refresh} = props
    const menuItems = [
        { title: '열기', shortcut: "Ctrl+O", onClick: ()=>ReadFile(projectId, info.path, setFile)},
        { title: '새 파일 추가', shortcut: null, onClick: () => CreateFile(projectId, null, info.path, refresh)},
        { title: '파일복사', shortcut: "Ctrl+C", onClick: () => {alert('Item 2 clicked')}},
        { title: '파일붙여넣기', shortcut: "Ctrl+V", onClick: () => {alert('Item 3 clicked')}},
        { title: '삭제', shortcut: "Delete", onClick: () => {DeleteFile(projectId, info.path, refresh)}},
        { title: '파일명변경', shortcut: "F2", onClick: () => {RenameFile(projectId, null, info.path, refresh)}},
        { title: '경로복사', shortcut: null, onClick: () => {alert('Item 6 clicked')}},
        { title: '파일공유하기', shortcut: null, onClick: () => {alert('Item 7 clicked')}},
        { title: '채팅으로 파일경로전송', shortcut: null, onClick: () => {alert('Item 8 clicked')}},
        { title: '파일 내보내기(다운로드)', shortcut: null, onClick: () => {alert('Item 9 clicked')}},
        { title: '파일속성', shortcut: "Ctrl+O", onClick: () => {alert('Item 11 clicked')}}
    ]
    
    return (<ContextMenu target={target} items={menuItems}/>)
}

export default FileContextMenu