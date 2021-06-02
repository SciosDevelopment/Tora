import React, { FunctionComponent} from 'react';
import './style/ListFolderItem.scss'
import likeImg from '../../../../../img/heart64.png'
import profile from '../../../../../img/profile.png'
import communication from '../../../../../img/communication80.png'
import videomessage from '../../../../../img/videomessage80.png'

interface ProjectProps {
    key : number,
    title : string,
    desc: string,
    lang: string,
    like: number
}

const ListFolderItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) =>{

    const {key, title, desc, lang, like} = Props
    
    return (
        <div className="List-FolderItem-main">
            <div className="List-FolderItem-view">
                <input type="hidden" id="ProjectKey">{key}</input>
                <div className = "List-FolderItem-profile-name">
                    <div className = "List-FolderItem-profile">
                        <img src = {''}/>
                    </div>

                </div>
                <div className = "List-FolderItem-text">
                    <div className = "List-FolderItem-text-sub">
                        <div className = "List-FolderItem-name">
                            <p>AWS Project New 721</p>
                            <div className="List-FolderItem_like"> <img src={likeImg}/>{like}</div>
                        </div>
                        <p className="List-FolderItemDesc">
                            {title} Gestalt: A set of React UI componets that supports Gestalt: A set of React UI componets that supports .......
                            {desc}
                        </p>

                    </div>

                    <div className = "List-FolderItem-participation-related">
                        <div className = "List-FolderItem-personnel">
                            <img src = {profile}/>
                            <img src = {profile}/>
                            <img src = {profile}/>
                        </div>
                        <div className ="List-FolderItem-participation">
                            <div className = "List-FolderItem-videomessage">
                                <img src = {videomessage}/>

                            </div>
                            <div className = "List-FolderItem-communication">
                                <img src = {communication}/>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
                
        </div>
    )
}

export default ListFolderItem;