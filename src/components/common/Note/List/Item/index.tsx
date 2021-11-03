import React, { FunctionComponent} from 'react';
import './style/NoteItem.scss'
import Profile from '../../../../../img/profile4.png'
import NoteSetting from '../../../../../img/notelistsetbutton.png'

interface ProjectProps {
    key : number,
    text : string,
    name: string
}

const NoteItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) => {

    const {key, text, name} = Props

    return (
        <div className = "NoteItem">
            <input type="hidden" id="NoteKey" value={key}/>
            <div className = "NoteItem-text">
                <p>
                    {text} dkssudgktpdywjsmsroqkfdmfgksmswnddlqslek qksrkqgtmqslek
                </p>
            </div>
            <div className = "NoteItem-side">
                <div className = "NoteItem-setting">
                    <img src = {NoteSetting}/>
                </div>
                <div className = "NoteItem-profile">
                    <img src={Profile}/>{name}
                </div>
            </div>
        </div>
    );
};

export default NoteItem