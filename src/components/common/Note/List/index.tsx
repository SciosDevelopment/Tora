import React, {useState} from 'react';
import './style/NoteList.scss'
import ListItem from './Item'

const NoteList  = (props) => {
    const {list} = props

    const [NoteList, setNoteList] = useState(list)
    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {

        switch(tabValue){
            case 0 : {
                return(
                    <div className = "NoteList-Mylist">
                        {   
                            // MyNote List
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