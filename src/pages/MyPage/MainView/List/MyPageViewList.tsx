import React,{useState} from 'react';
import MypageViewItem from './MyPageViewItem/MyPageViewItem';
import './style/MyPageViewList.scss'
import folder from '../../../../img/mypagefile.png';

const MypageViewList = () => {
    const [tabValue, setTabValue] = useState(0);
    const switchTab = (value) => {
        switch(value){
            case 0:{
                return(
                    <div className = "Mypage-view-item-container">
                        <div className="Mypage-view-item-wrap">
                            <img src = {folder}/>
                            <div className = "Mypage-view-item-view">
                                <div className = "Mypage-view-item-close">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close2">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close3">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close4">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close5">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                            </div>
                        </div>
                        <div className="Mypage-view-item-wrap">
                            <img src = {folder}/>
                            <div className = "Mypage-view-item-view">
                                <div className = "Mypage-view-item-close">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close2">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close3">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close4">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close5">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                            </div>
                        </div>
                        <div className="Mypage-view-item-wrap">
                            <img src = {folder}/>
                            <div className = "Mypage-view-item-view">
                                <div className = "Mypage-view-item-close">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close2">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close3">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close4">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close5">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
            }
            case 1 : {
                return(
                    <div>
                        <div className = "Mypage-view-item-container2">
                            <img src = {folder}/>
                            <div className="Mypage-view-item-wrap2">
                                <div className = "Mypage-view-item-close6">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close7">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close8">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close9">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                                <div className = "Mypage-view-item-close10">
                                    <MypageViewItem key={1} like={20}/>
                                </div>
                            </div>
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
                    {switchTab(tabValue)}
                </div>
            </div>
        </div>
    );
};

export default MypageViewList;