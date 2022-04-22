import React,{useEffect, useState} from 'react'
import iconLeftStar_F from '../../../img/ic_star_white.png'
import iconLeftFile from '../../../img/ic_file_folder.png'
import iconLeftChat from '../../../img/ic_chat.png'
import iconLeftIDE from '../../../img/ToraLogo@2x.png'
import iconScoreM1 from '../../../img/ic_score-1.png'
import iconScoreP1 from '../../../img/ic_score+1.png'
import iconScoreP2 from '../../../img/ic_score+2.png'
import iconScoreP3 from '../../../img/ic_score+3.png'
import iconBookMark from '../../../img/ic_bookmark_black.png'
import PopupFileview from '../Modal/PopupFileView'
import SideButton from './SideButton'
import axios from 'axios'
import { history } from 'src/configureStore'

const ProjectLeftSidebar = (props) => {
    const {projectId} = props
    const [isShowLeftFilesPopup, setIsShowLeftFilesPopup] = useState(false)
    const [isShowLeftStarPopup, setIsShowLeftStarPopup] = useState(false)
    const [checked, setChecked] = useState(false)
    const clickLeftStar = () => setIsShowLeftStarPopup(!isShowLeftStarPopup)
    const clickLeftFiles = () => setIsShowLeftFilesPopup(!isShowLeftFilesPopup)
    const clickLeftFilesPopupClose = () => setIsShowLeftFilesPopup(false)

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    
    const [cnt, setCnt] = useState(0)

    const buttonlist = [
        {image:iconLeftFile, content: "Files", onAction: ()=>clickLeftFiles()},
        {image:iconLeftIDE, content: "IDE", onAction: ()=>{history.push(`/ide/${projectId}`)}},
        {image:iconLeftChat, content: "채팅", onAction: ()=>{}},
        {image:iconBookMark, content: "북마크", onAction: ()=>{}},
    ] 
    useEffect(()=>{
        axios.get(`${SERVER_IP}/api/v1/projects/${projectId}`).then((res)=>{setCnt(res.data.data.attributes.score)})
    }, [])

    // server에도 저장 필요
    const CheckScore = (score)=> {
        //http://api.torapod.com/api/v1/scores/create
        if(!(score == -1 || score == 1 || score == 2 || score == 3)) return
        const data = { score: { scorable_id: projectId, scorable_type: "Project", score: score}}
        axios.post(`${SERVER_IP}/api/v1/scores/create`, data).then((res)=>{
            setCnt(res.data.data.atrributes.score)
            setChecked(true)
        }).catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                console.log(e.response.data.message)
                if(e.response.data.message[0] == "User has already been taken") {
                    EditScore(score)
                }
                else if(status >= 400 && status < 500) alert("점수주기에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }

            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        })
    }   

    const EditScore = (score) => {
        const data = { score: { scorable_id: projectId, scorable_type: "Project", score: score}}
        axios.post(`${SERVER_IP}/api/v1/scores/edit`, data).then((res)=>{
            setCnt(res.data.data.atrributes.score)
            setChecked(true)
        }).catch((e)=>{
            if(e.response) {
                var status = e.response.status // or use message
                if(status >= 400 && status < 500) alert("점수주기에 에러가 발생했습니다. 다시 시도해주세요.")
                else alert("server is dead")
            }

            else if(e.request) alert("server is dead") 
            else console.log('Error', e.message)
        }) 
    }
    
    const StarButton = ()=> {
        return (
            <SideButton key={3000} image={iconLeftStar_F} content={cnt} onAction={clickLeftStar}>
                {
                    <div className={isShowLeftStarPopup ? "starScore" : "starScore inactive"}>
                        <a onClick={()=>CheckScore(-1)}><img src={iconScoreM1} alt="-1"/></a>
                        <a onClick={()=>CheckScore(1)}><img src={iconScoreP1} alt="+1"/></a>
                        <a onClick={()=>CheckScore(2)}><img src={iconScoreP2} alt="+2"/></a>
                        <a onClick={()=>CheckScore(3)}><img src={iconScoreP3} alt="+3"/></a>
                    </div>
                }
            </SideButton>
        )
    }
    
    return (
        <>
        <div className="ProjectLeftSidebar">
            <div className="wrap">
                {/* 버튼 제작 */}
                <StarButton/>
                {
                    buttonlist.map((item,idx)=>{
                        return <SideButton key={idx}
                                image={item.image}
                                content={item.content}
                                onAction={item.onAction}/>})
                }
                {isShowLeftFilesPopup && 
                <PopupFileview projectId={projectId} 
                    close={clickLeftFilesPopupClose}/>}
            </div>
        </div>{/* // leftItems */}
        </>
    )
}

export default ProjectLeftSidebar