import React,{FunctionComponent,useState} from 'react';
import {Link} from 'react-router-dom'
import MypageViewItem from './MyPageViewItem'
import MypageFolder from '../Folder/MyPageListFolder'
import './style/MyPageViewList.scss'
import folder from '../../../../img/mypagefile.png'

const MypageViewList:FunctionComponent = () => {

    
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

        const [ProjectListView] = useState(initData)

        switch(value){
            case 0:{
                return(
                    <div className = "Mypage-view-item-container">
                        <div className="Mypage-view-item-wrap">
                            <div className = "Mypage-view-item-icon">
                                <img src = {folder}/>
                            </div>
                            <div className = "Mypage-view-item-view">
                                    {
                                        ProjectListView.map(item => {
                                            return (
                                                <MypageViewItem key={item.key} like={item.like}/>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                        <div className="Mypage-view-item-wrap">
                            <div className = "Mypage-view-item-icon">
                                <img src = {folder}/>
                            </div>
                            <div className = "Mypage-view-item-view">
                                    {
                                        ProjectListView.map(item => {
                                            return (
                                                <MypageViewItem key={item.key} like={item.like}/>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                        <div className="Mypage-view-item-wrap">
                            <div className = "Mypage-view-item-icon">
                                <img src = {folder}/>
                            </div>
                            <div className = "Mypage-view-item-view">
                                    {
                                        ProjectListView.map(item => {
                                            return (
                                                <MypageViewItem key={item.key} like={item.like}/>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                    
                )
            }
            case 1 : {
                return(
                    <div>
                        <div className = "Mypage-view-item-container2">
                            <MypageFolder/>
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
                        2
                    </div>
                )}
            }
    }


    return (
        <div>
                        <div className = "Mypage-view-tab-main">
                <div className = "Mypage-view-tab-wrapper">
                    <div className = "Mypage-view-tab-area"> 
                        <div className = {tabValue === 0 ? `Mypage-view-tab-clicked` : `Mypage-view-tab`} onClick = {()=>setTabValue(0)} key = {0}>All</div>
                        <div className = {tabValue === 1 ? `Mypage-view-tab-clicked` : `Mypage-view-tab`} onClick = {()=>setTabValue(1)} key = {1}>Project List</div>
                        <div className = {tabValue === 2 ? `Mypage-view-tab-clicked` : `Mypage-view-tab`} onClick = {()=>setTabValue(2)} key = {1}>Blog List</div>
                        <div className = {tabValue === 3 ? `Mypage-view-tab-clicked` : `Mypage-view-tab`} onClick = {()=>setTabValue(3)} key = {1}>Free board List</div>

                    </div>
                
                    <div className = "Mypage-view-tab-button">
                        <input type='submit' value="New project"></input>
                    </div>
                </div>
                
                <div className = "Mypage-view-tab-contents">
                    {SwitchTab(tabValue)}
                </div>
            </div>
        </div>
    )
}

export default MypageViewList