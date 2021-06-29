import React, { FunctionComponent, useState} from 'react';
import './style/FolderItem.scss'
import likeImg from '../../../../../img/heart64.png'
import profile from '../../../../../img/profile.png'
import communication from '../../../../../img/communication80.png'
import videomessage from '../../../../../img/videomessage80.png'


interface ProjectProps {
    key : number,
    like: number,
}

const FolderItem : FunctionComponent<ProjectProps> = (Props:ProjectProps) => {
    const {key, like} = Props

    return (
        <div className="Mypage-folder-item">
            <div className="Mypage-LeftSide">
                <input type="hidden" id="ProjectKey" value={key}/>
                <div className = "Mypage-folder-item-profile">
                    <div className = "Mypage-folder-item-profile-thumbnail">
                        <img src = {''}/>
                    </div>
                </div>
                <div className = "Mypage-folder-item-info">
                    <div className = "Mypage-folder-item-title">
                        <div className = "Mypage-folder-item-name">
                            <p>AWS Project New 721</p>
                            <div className="Mypage-folder-item-Like"> <img src={likeImg}/>{like}</div>
                        </div>

                    </div>

                    <div className = "Mypage-folder-item-participants">
                        <div className = "Mypage-folder-item-personnel">
                            <img src = {profile}/>
                            <img src = {profile}/>
                            <img src = {profile}/>
                        </div>
                        <div className ="Mypage-folder-item-participation">
                            <div className = "Mypage-folder-item-videomessage">
                                <img src = {videomessage}/>
                            </div>
                            <div className = "Mypage-folder-item-communication">
                                <img src = {communication}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FolderItem