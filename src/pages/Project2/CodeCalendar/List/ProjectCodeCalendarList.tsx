import React,{useState} from 'react';
import './style/ProjectCodeCalendarList.scss'
import Searchbar from 'src/components/common/Searchbar';
import Modify from '../../../../img/modify.png'
import Searchicon from '../../../../img/searchNavy@2x.png'
import ListItem from './ListItem/CodeCalendarListItem'
import ListView from './ListView/CodeCalendarListView'

const ProjectCodeCalendarList:React.FC = () => {

    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
    switch(tabValue){
        case 0 : {
            return(
                <div className = "CodeCalendar-List-all">
                    <ListItem/>
                    <ListItem/>
                </div>
            )
        }
        case 1 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 2 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 3 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 4 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 5 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 6 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 7 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
        case 8 : {
            return(
                <div className = "CodeCalendar-List-all">

                </div>
            )
        }
    }
}

    return (
        <div className = "CodeCalendar-List">
            <div className = "CodeCalendar-List-tab">
                <div className = "CodeCalendar-List-tab-buttom">
                        <div className = "CodeCalendar-List-tab-button-main">
                        <div className = {tabValue === 0 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(0)} key = {0}>All</div>
                        <div className = {tabValue === 1 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(1)} key = {1}>Commit</div>
                        <div className = {tabValue === 2 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(2)} key = {2}>Pull</div>
                        <div className = {tabValue === 3 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(3)} key = {3}>Push</div>
                        <div className = {tabValue === 4 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(4)} key = {4}>Patch</div>
                        <div className = {tabValue === 5 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(5)} key = {5}>Branch</div>
                        <div className = {tabValue === 6 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(6)} key = {6}>Merge</div>
                        <div className = {tabValue === 7 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(7)} key = {7}>Tags</div>
                        <div className = {tabValue === 8 ? `CodeCalendar-List-tab-clicked` : `CodeCalendar-List-tab-closed` } onClick = {()=>setTabValue(8)} key = {8}>Full Request</div>  
                    </div>

                    <div className = "CodeCalendar-List-Searchbar">
                        <input type = "input" placeholder = 'Search' />
                                <img src = {Searchicon}/>
                    </div>
                    <div className = "CodeCalendar-List-Modify">
                        <img src = {Modify}/>
                    </div>

                </div>
                <div className = "CodeCalendar-List-main">
                    <div className = "CodeCalendar-List-mainview">
                        <div className = "CodeCalendar-List-header">
                            <div className = "CodeCalendar-List-tab-title">
                                <p>Name</p>
                                <p>Branch</p>
                                <p>Contect</p>
                            </div>
                        </div>
                        <div className = "CodeCalendar-List-tab-body">
                            {
                                switchTab(tabValue)
                            } 
                        </div>
                    </div>
                    <div className = "CodeCalendar-List-view">
                        <ListView/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCodeCalendarList;