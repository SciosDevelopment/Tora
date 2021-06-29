import React, { FunctionComponent} from 'react';
import './style/TableItem.scss'
import likeImg from '../../../../../img/heart64.png'
import profile from '../../../../../img/profile.png'
import communication from '../../../../../img/communication80.png'
import videomessage from '../../../../../img/videomessage80.png'

interface TableItemProps {
    key : number,
    title : string,
    desc: string,
    lang: string,
    like: number
}

const TableItem:FunctionComponent<TableItemProps> = (Props:TableItemProps) =>{

    const {key, title, desc, lang, like} = Props
    
    return (
        <div className="table-item-main">
            <div className="table-item-container">
                <input type="hidden" id="ProjectKey">{key}</input>
                <div className = "table-item-profile-container">
                    <div className = "table-item-profile">
                        <img src = {''}/>
                    </div>

                </div>
                <div className = "table-item-info">
                    <div className = "table-item-text">
                        <div className = "table-item-title">
                            <p>{title}</p>
                            <div className="table-item-like"> <img src={likeImg} alt=""/>{like}</div>
                        </div>
                        <p className="table-item-desc">{desc}</p>
                    </div>

                    <div className = "table-item-participants">
                        <div className = "table-item-personnel">
                            <img src = {profile}/>
                            <img src = {profile}/>
                            <img src = {profile}/>
                        </div>
                        <div className ="table-item-participation">
                            <div className = "table-item-videomessage">
                                <img src = {videomessage}/>

                            </div>
                            <div className = "table-item-communication">
                                <img src = {communication}/>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
                
        </div>
    )
}

export default TableItem