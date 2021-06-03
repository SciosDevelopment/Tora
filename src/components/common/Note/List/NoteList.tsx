import React, {FunctionComponent, useState} from 'react';
import './style/NoteList.scss'
import ListItem from './ListItem/NoteListItem'

const NoteList:FunctionComponent  = () => {

    const initData = () => {
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

    const [NoteList, setNoteList] = useState(initData)


    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {

        switch(tabValue){
            case 0 : {
                return(
                    <div className = "NoteList-Mylist">
                        {
                            NoteList.map(item => {
                                return (
                            <ListItem key={item.key} text={item.text} name={item.name} />
                                )
                            })
                        }   
                    </div>
                    )
            }

            case 1 : {
                return(
                    <div className = "NoteList-Followerlist">
                        {
                            NoteList.map(item => {
                                return (
                            <ListItem key={item.key} text={item.text} name={item.name} />
                                )
                            })
                        }
                    </div>
                )
            }
        }
    }

    return (
        <div className = "NoteList">
            <div className = "NoteList-tab">
                <div className = {tabValue === 0 ? `NoteList-clicked` : `NoteList-closed` } onClick = {()=>setTabValue(0)} key = {0}>My Notes</div>
                <hr/>
                <div className = {tabValue === 1 ? `NoteList-clicked` : `NoteList-closed` } onClick = {()=>setTabValue(1)} key = {1}>Follower Notes</div>
            </div>
            <div className = "NoteList-View ">
                {
                    switchTab(tabValue)
                } 
            </div>
        </div>
    );
};

export default NoteList;