import React,{FunctionComponent,useState} from 'react'
import {Link} from 'react-router-dom'
import FolderItem from './Item'
import TableView from '../TableView'
import './style/FolderView.scss'
import folder from '../../../../img/mypagefile.png'

const FolderView:FunctionComponent = () => {

    
    const ProjectQuery = null

    const initData = () => {
        if(ProjectQuery != null) return Array()
        return Array(
            {key : 0,  like:500},
            {key : 1,  like:500},
            {key : 2,  like:500},
            {key : 3,  like:500},
            {key : 4,  like:500},
        )
    }

    
    const [tabValue, setTabValue] = useState(0)
    const SwitchTab = (value) => {
        const [ProjectList] = useState(initData)

        switch(value){
            case 0:{
                return(
                    <div className = "Mypage-folder-view-container">
                        <div className="Mypage-folder-view-wrap">
                            <div className = "Mypage-folder-view-icon">
                                <img src = {folder}/>
                            </div>
                            <div className = "Mypage-folder-view-itemlist">
                                    {
                                        ProjectList.map(item => {
                                            return (
                                                <FolderItem key={item.key} like={item.like}/>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                        <div className="Mypage-folder-view-wrap">
                            <div className = "Mypage-folder-view-icon">
                                <img src = {folder}/>
                            </div>
                            <div className = "Mypage-folder-view-itemlist">
                                    {
                                        ProjectList.map(item => {
                                            return (
                                                <FolderItem key={item.key} like={item.like}/>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                        <div className="Mypage-folder-view-wrap">
                            <div className = "Mypage-folder-view-icon"><img src = {folder} alt=""/></div>
                            <div className = "Mypage-folder-view-itemlist">
                                    {ProjectList.map(item => <FolderItem key={item.key} like={item.like}/>)}
                            </div>
                        </div>
                    </div>
                )
            }

            case 1 : {
                return(
                    <div>
                        <div className = "Mypage-folder-view-container2">
                            <TableView/>
                        </div>
                    </div>
                )}
            
            case 2 : {
                return(
                    <div>
                        2
                    </div>
                )}
            
            case 3 : {
                return(
                    <div>
                        3                    
                    </div>
                )}
            }
    }

    return (
        <div>
            <div className = "Mypage-folder-tab-main">
                <div className = "Mypage-folder-tab-wrapper">
                    <div className = "Mypage-folder-tab-area"> 
                        <div className = {tabValue === 0 ? `Mypage-folder-tab-clicked` : `Mypage-folder-tab`} onClick = {()=>setTabValue(0)} key = {0}>All</div>
                        <div className = {tabValue === 1 ? `Mypage-folder-tab-clicked` : `Mypage-folder-tab`} onClick = {()=>setTabValue(1)} key = {1}>Project List</div>
                        <div className = {tabValue === 2 ? `Mypage-folder-tab-clicked` : `Mypage-folder-tab`} onClick = {()=>setTabValue(2)} key = {1}>Blog List</div>
                        <div className = {tabValue === 3 ? `Mypage-folder-tab-clicked` : `Mypage-folder-tab`} onClick = {()=>setTabValue(3)} key = {1}>Free board List</div>

                    </div>
                
                    <div className = "Mypage-folder-tab-button">
                        <input type='submit' value="New project"></input>
                    </div>
                </div>
                
                <div className = "Mypage-folder-tab-contents">
                    {SwitchTab(tabValue)}
                </div>
            </div>
        </div>
    )
}

export default FolderView