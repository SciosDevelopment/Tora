import React, { useRef, useState } from 'react';
import './style/ProjectLicense.scss'
import leftBtn from '../../../img/triangle-left.png'
import rightBtn from '../../../img/triangle-right.png'
import MainView from './MainView/ProjectLicenseMainView'
import { NavLink } from 'react-router-dom';

interface TabRefs{
    scroller? : HTMLInputElement | string;
}

const ProjectLicense:React.FC<TabRefs> = () => {
    const scroller = useRef<HTMLDivElement>(null);

    const [tabValue, setTabValue] = useState(0);
    const handleTabMoveLeft = ()=>{
        return scroller.current ? (scroller.current.scrollLeft -=250) : null;
    }
    const handleTabMoveRight = () =>{
        return scroller.current ? (scroller.current.scrollLeft +=250) : null;
    }

    
    const swithchTab = (value) => {
        switch(value){
            case 0: {
                return(
                    <div>
                        <MainView/>
                    </div>
                )
            }
        }
    }
    return (
        <div className = "Project-License">
            <div className = "Project-License-button">
                <NavLink exact to = "/project/issuewrite"><button className = "Issue-main-existing-license-button">Existing License</button></NavLink>
                <NavLink exact to = "/project/licensewrite"><button className = "Issue-main-new-license-button">New License</button></NavLink>
            </div>
            <div className = "Project-License-tab-main">
                <div className = "Project-License-tab-title" >
                    <button className = "tab-left-btn" onClick = {handleTabMoveLeft}>
                        <img src = {leftBtn}/>
                    </button>
                    <div className = "Project-License-tab" ref = {scroller}>
                        <div className = {tabValue === 0 ? `Project-License-tab-clicked` : `Project-License-tab-closed`} onClick = {()=>setTabValue(0)} key = {0}>{`BSD 2 Clause License`}</div>
                        <div className = {tabValue === 1 ? `Project-License-tab-clicked` : `Project-License-tab-closed`} onClick = {()=>setTabValue(1)} key = {1}>{`Hello License`}</div>
                        <div className = {tabValue === 2 ? `Project-License-tab-clicked` : `Project-License-tab-closed`} onClick = {()=>setTabValue(2)} key = {2}>{`OOOOO License`}</div>
                        <div className = {tabValue === 3 ? `Project-License-tab-clicked` : `Project-License-tab-closed`} onClick = {()=>setTabValue(3)} key = {3}>{`SCIOS License`}</div>
                        <div className = {tabValue === 4 ? `Project-License-tab-clicked` : `Project-License-tab-closed`} onClick = {()=>setTabValue(4)} key = {4}>{`Test1 License`}</div>
                    </div>
                    <button className = "tab-right-btn" onClick = {handleTabMoveRight}>
                        <img src = {rightBtn}/>
                    </button>
                </div>
                <div className = "Project-License-tab-body">
                    {
                        swithchTab(tabValue)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectLicense;