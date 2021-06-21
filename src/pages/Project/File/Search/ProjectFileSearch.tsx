import React,{useState} from 'react';
import './style/ProjectFileSearch.scss'
import Searchicon from '../../../../img/searchNavy@2x.png'
import Search from '../../../../components/common/Searchbar'

const ProjectFileSearch:React.FC = () => {
    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "FileSearch-branch">
                        <p>Master</p>
                        <p>release-v1</p>
                        <p>release-v2</p>
                        <p>release-v2</p>
                    
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "FileSearch-milestone">
                    </div>
                )
            }
        }
    }

    return (
        <div className = "FileSearch">
            <div className = "FileSearch-header">
                <p>Search</p>
                <img src = {Searchicon}/>
                {/* <Search/> */}
            </div>
            <div className = "FileSearch-tab">
                <div className = "FileSearch-tab-button">
                    <div className = {tabValue === 0 ? `FileSearch-tab-clicked` : `FileSearch-tab-closed` } onClick = {()=>setTabValue(0)} key = {0}>Branch</div>
                    <div className = {tabValue === 1 ? `FileSearch-tab-clicked` : `FileSearch-tab-closed`} onClick = {()=>setTabValue(1)} key = {1}>Milestone</div>
                </div>
                <div className = "FileSearch-tab-body">
                    {
                        switchTab(tabValue)
                    } 
                </div>
            </div>
        </div>
    );
};

export default ProjectFileSearch;