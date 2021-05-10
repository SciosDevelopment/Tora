import React,{useState} from 'react'
import './style/ServiceList.scss'
import ServiceListItem from './ServiceListItem'

const ServiceList:React.FC = () => {

    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Service-list-item">
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Service-list-item">
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Service-list-item">
                    </div>
                )
            }
            case 3 : {
                return(
                    <div className = "Service-list-item">
                    </div>
                )
            }
            case 4 : {
                return(
                    <div className = "Service-list-item">
                    </div>
                )
            }
        }
    }

    return (
        <div className = "Service-list-main">
            <div className = "Service-list-title">
                <p>Welcome to the Tora Help center</p>
            </div>
            <div className = "Service-list-view">
                <div className = "Service-list-tab">
                    <div className = "Service-list-tab-button">
                        <div className = {tabValue === 0 ? `Service-list-tab-clicked` : `Service-list-tab` } onClick = {()=>setTabValue(0)} key = {0}>Asking</div>
                        <div className = {tabValue === 1 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick = {()=>setTabValue(1)} key = {1}>Answering</div>
                        <div className = {tabValue === 2 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick = {()=>setTabValue(2)} key = {2}>My Account</div>
                        <div className = {tabValue === 3 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick = {()=>setTabValue(3)} key = {3}>Our model</div>
                        <div className = {tabValue === 4 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick = {()=>setTabValue(4)} key = {4}>Tora Jobs</div>
                    </div> 
                    <div className = "Service-list-tab-body">
                        {
                            switchTab(tabValue)
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceList