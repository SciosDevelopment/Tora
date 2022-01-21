import React, {useState} from 'react'
import Folder from '../../../img/idefolder.png'
import ERD from '../../../img/ideerd.png'
import CodeCalendar from '../../../img/tora-git-sidebar-icon@2x.png'
import ImageCoding from '../../../img/imagecoding.png'
import Share from '../../../img/ideshare.png'
import SideNav from './SideNav'
import FileView from '../../../components/common/FileView'
import GitSystem from './GitSystem'
import SidebarShare from './Share'

const IDESideBar = (props) => {
    const {onSelect, projectId} = props
    const [showNav, setShowNav] = useState(-1)
    
    // temp list, 추후 구현예정
    //common Component - FileView, ERD, CodeCalendar, ImageCoding, Share.
    const list = [  <FileView setFile={onSelect} projectId ={projectId} isIde={true}/>,
                    <GitSystem projectId={projectId}/>,
                    <div/>,
                    <div/>,
                    <SidebarShare projectId={projectId}/> ]

    const setSideNav = (num)=>{
        // need toggleBtn active
        if(num > list.length) setShowNav(-1)
        if(showNav === num) setShowNav(-1)
        else setShowNav(num)
    }

    return (
        <div className = "sidebar">
            <div className = "quickMenuBox">
                <button value = {0} onClick ={() => setSideNav(0)}><img src = {Folder} alt=""/></button>
                <button value = {1} onClick ={() => setSideNav(1)}><img src = {ERD} alt=""/></button>
                <button value = {2} onClick ={() => setSideNav(2)}><img src = {CodeCalendar} alt=""/></button>
                <button value = {3} onClick ={() => setSideNav(3)}><img src = {ImageCoding} alt=""/></button>
                <button value = {4} onClick ={() => setSideNav(4)}><img src = {Share} alt=""/></button>
            </div>
            {showNav!==-1 && <SideNav nav={showNav} list={list}/>}
        </div>
    )
}

export default IDESideBar