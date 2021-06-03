import React, { FunctionComponent} from 'react';
import './style/NoteListItem.scss'
import Profile from '../../../../../img/profile4.png'
import NoteListSet from '../../../../../img/notelistsetbutton.png'

interface ProjectProps {
    key : number,
    text : string,
    name: string
}

const NoteListItem:FunctionComponent<ProjectProps> = (Props:ProjectProps) => {

    const {key, text, name} = Props

    return (
        <div className = "NoteListItem">
            <input type="hidden" id="NoteListKey">{key}</input>
            <div className = "NoteListItem-text-main">
                <p className = "NoteListItem-text">
                {text} dkssudgktpdywjsmsroqkfdmfgksmswnddlqslek qksrkqgtmqslek
                </p>
            </div>
            <div className = "NoteListItem-side">
                <div className = "NoteListItem-set">
                    <img src = {NoteListSet}/>
                </div>
                <div className = "NoteListItem-profile">
                    <img src={Profile}/>{name}
                </div>
            </div>
        </div>
    );
};

export default NoteListItem;