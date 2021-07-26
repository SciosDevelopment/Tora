import React, {useState} from 'react';
import './style/Note.scss'
import Createicon from '../../../img/createicon-white.png'
import Shareicon from '../../../img/tora-git-sidebar-branch-icon@2x.png'
import Closeicon from '../../../img/closeicon-white.png'
import Modifyicon from '../../../img/modifyicon-white.png'
import NoteList from './List'
import { useEffect } from 'react';

const Note:React.FC = () => {

    const [tabValue, setTabValue] = useState<Number>(0);
    const [Cur, setCur] = useState<Number>(0) // current Note idx
    const [Notes, setNotes] = useState(Array()) // Note data. (by LocalStorage)

    const initNotes = () => {
        // Load LocalStorage
        return Array(
            {key: 0, text : "text", name : "james"},
            {key: 1, text : "text", name : "kim"},
            {key: 2, text : "text", name : "back"},
            {key: 3, text : "text", name : "back"},
            {key: 4, text : "text", name : "james"},
            {key: 5, text : "text", name : "kim"},
            {key: 6, text : "text", name : "back"},
            {key: 7, text : "text", name : "back"},
        )
    }
    useEffect(()=>{
        // get Notes
        setNotes(initNotes)
    },[])

    // need : initNotes, createNotes, LoadNotes, SaveNotes.

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "NoteView">
                        <div className = "NoteView-tool"> {/* temp area */}
                        </div>
                        <div className = "NoteView-text">
                            <textarea>test</textarea>
                        </div>
                    </div>
                )
            }

            case 1 : {
                return(
                    <div>
                    </div>
                )
            }

            case 2 : {
                return(
                    <div>
                        <NoteList list={Notes}/>
                    </div>
                )
            }

            case 3 : {
                return(
                    <div>

                    </div>
                )
            }
        }
    }
    return (
        <div className = "Note">
            <div className = "Note-Header">
                <div className = "Note-Header-left-button">
                    <div className = "Note-create-button">
                        <div className = {tabValue === 0 ? `Note-header-clicked` : `Note-header-closed` } onClick = {()=>setTabValue(0)} key = {0}>
                        <img src = {Createicon}/>
                        </div>
                    </div>
                    <div className  = "Note-share-button">
                        <div className = {tabValue === 1 ? `Note-header-clicked` : `Note-header-closed` } onClick = {()=>setTabValue(1)} key = {1}>
                        <img src = {Shareicon}/>
                        </div>
                    </div>
                </div>
                <div className = "Note-Header-right-button">
                    <div className = {tabValue === 2 ? `Note-header-clicked` : `Note-header-closed` } onClick = {()=>setTabValue(2)} key = {2}>
                    <img src = {Modifyicon}/>
                    </div>
                    <div className = {tabValue === 4 ? `Note-header-clicked` : `Note-header-closed` } onClick = {()=>setTabValue(3)} key = {3}>
                    <img src = {Closeicon}/>
                    </div>
                </div>
            </div>
            <div className = "Note-Contents">
                {
                    switchTab(tabValue)
                } 
            </div>
        </div>
    );
};

export default Note;