import React, {useState} from 'react';
import './style/NewProject.scss'
import Main from './MainView/NewProjectMain'
import NewProjectGithub from './NewProjectGithub/NewProjectGithub'
import NewProjectAWS from './NewProjectAWS/NewProjectAWS'

const NewProject:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0)
    
    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : 
                return <Main/>

            case 1 : 
                return <NewProjectGithub/>
            
            case 2 : {
                return <NewProjectAWS/>
            }
        }
    }
    
    return (
        <div className = "NewProject">
            <div className = "NewProject-main">
                <div className = "NewProject-tab-header">
                    <div className = {tabValue === 0 ? 'NewProject-tab-clicked' : 'NewProject-tab-closed' } onClick = {()=>setTabValue(0)} key = {0}>Create new project</div>
                    <div className = {tabValue === 1 ? 'NewProject-tab-clicked' : 'NewProject-tab-closed' } onClick = {()=>setTabValue(1)} key = {1}>Import from Github</div>
                    <div className = {tabValue === 2 ? 'NewProject-tab-clicked' : 'NewProject-tab-closed' } onClick = {()=>setTabValue(2)} key = {2}>Import from AWS</div>
                </div>
                <div className = "NewProject-tab-body">
                    {
                        switchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewProject;