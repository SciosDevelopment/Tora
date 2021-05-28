import React, { FunctionComponent, useState} from 'react';
import './style/MyPageViewItem.scss'
import likeImg from '../../../../../img/heart64.png'
import profile from '../../../../../img/profile.png'
import communication from '../../../../../img/communication80.png'
import videomessage from '../../../../../img/videomessage80.png'


interface ProjectProps {
    key : number,
    like: number,
}

const MypageViewItem : FunctionComponent<ProjectProps> = (Props:ProjectProps) => {

    const {key, like,} = Props
    return (
        <div className="Mypage_ProjectItem">
            <div className="Mypage_LeftSide">
                <input type="hidden" id="ProjectKey">{key}</input>
                <div className = "Mypage-Project-profile-name">
                    <div className = "Mypage-Project-profile">
                        <img src = {''}/>
                    </div>

                </div>
                <div className = "Mypage-Project-text">
                    <div className = "Mypage-Project-text-sub">
                        <div className = "Mypage-Project-name">
                            <p>AWS Project New 721</p>
                            <div className="Mypage_Like"> <img src={likeImg}/>{like}</div>
                        </div>

                    </div>

                    <div className = "Mypage-Project-participation-related">
                        <div className = "Mypage-Project-personnel">
                            <img src = {profile}/>
                            <img src = {profile}/>
                            <img src = {profile}/>
                        </div>
                        <div className ="Mypage-Project-participation">
                            <div className = "Mypage-Project-videomessage">
                                <img src = {videomessage}/>

                            </div>
                            <div className = "Mypage-Project-communication">
                                <img src = {communication}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageViewItem;