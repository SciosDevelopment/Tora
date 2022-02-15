import React,{useState} from 'react'
import iconLeftStar from '../../../img/icon_left_star.png'
import iconLeftLive from '../../../img/icon_left_live.png'
import iconLeftShare from '../../../img/icon_left_share.png'
import PopupFileview from '../Modal/PopupFileView'
import SideButton from './SideButton'

const ProjectLeftSidebar = (props) => {
    const {projectId} = props
    const [isShowLeftFilesPopup, setIsShowLeftFilesPopup] = useState(false)
    const [isShowPopupProject, setIsShowPopupProject] = useState(false)
    const [isShowLeftSharePopup, setIsShowLeftSharePopup] = useState(false)
    const clickLeftShare = () => setIsShowLeftSharePopup(true)
    const clickLeftFiles = () => setIsShowLeftFilesPopup(true)
    const clickLeftFilesPopupClose = () => setIsShowLeftFilesPopup(false)
    
    const [cnt, setCnt] = useState(1)

    const buttonlist = [
        {image:iconLeftStar, content: cnt, onAction: ()=>setCnt(cnt+1)},
        {image:iconLeftLive, content: "Files", onAction: ()=>clickLeftFiles()},
        {image:iconLeftShare, content: "IDE", onAction: ()=>setCnt(cnt+1)},
        {image:iconLeftShare, content: "채팅", onAction: ()=>setCnt(cnt+1)},
        {image:iconLeftLive, content: "북마크", onAction: ()=>setCnt(cnt+1)},
        {image:iconLeftLive, content: "공유", onAction: ()=>clickLeftShare()},
    ]
    return (
        <>
        <div className="ProjectLeftSidebar">
            <div className="wrap">
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