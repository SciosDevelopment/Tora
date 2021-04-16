import React, { FunctionComponent} from 'react'
import './style/AllProjectItem.scss'
import likeImg from '../../../../img/heart64.png'
import profile from '../../../../img/profile.png'
import communication from '../../../../img/communication80.png'
import videomessage from '../../../../img/videomessage80.png'


interface ProjectProps {
    key : number,
    title : string,
    desc: string,
    lang: string,
    like: number
}

// PC : Pagination, Mobile : Infinite Scroll UI.
const AllProjectItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) =>{

    const {key, title, desc, lang, like} = Props
    
    return (
        <div className="APV_ProjectItem">
            <div className="APV_LeftSide">
                <input type="hidden" id="ProjectKey">{key}</input>
                <div className = "APV-Project-profile-name">
                    <div className = "APV-Project-profile">
                        <img src = {''}/>
                    </div>

                </div>
                <div className = "APV-Project-text">
                    <div className = "APV-Project-text-sub">
                        <div className = "APV-Project-name">
                            <p>AWS Project New 721</p>
                            <div className="APV_Like"> <img src={likeImg}/>{like}</div>
                        </div>
                        <p className="APV_ProjectDesc">
                            {title} Gestalt: A set of React UI componets that supports Gestalt: A set of React UI componets that supports .......
                            {desc}
                        </p>

                    </div>

                    <div className = "APV-Project-participation-related">
                        <div className = "APV-Project-personnel">
                            <img src = {profile}/>
                            <img src = {profile}/>
                            <img src = {profile}/>
                        </div>
                        <div className ="APV-Project-participation">
                            <div className = "APV-Project-videomessage">
                                <img src = {videomessage}/>

                            </div>
                            <div className = "APV-Project-communication">
                                <img src = {communication}/>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
               
        </div>
    )
}


export default AllProjectItem