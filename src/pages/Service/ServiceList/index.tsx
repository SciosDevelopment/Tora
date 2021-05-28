import React,{useEffect, useState} from 'react'
import './style/ServiceList.scss'
import ServiceListItem from './ServiceListItem'
import Header from '../../../components/common/Header/Header'
import {history} from '../../../configureStore'
const ServiceList = (props) => {
    const {token, id} = props.match.params
    const [tabValue, setTabValue] = useState<Number>(0);
    
    enum token_ { NOTHING=-1, ASKING, ANSWERING, MY_ACCOUNT }

    const setToken = ()=> {
        switch(token) {
            case "asking": 
                return token_.ASKING
            case "answering": 
                return token_.ANSWERING
            case "myaccount":
                return token_.MY_ACCOUNT
            default:
                return token_.NOTHING
        }
    }

    const setData = () => setTabValue(setToken())
    const changeURL = async(token) => history.push(`/service/${token}`)
    
    useEffect(()=>{setData()}, [token])

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
                        1
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Service-list-item">
                        2
                    </div>
                )
            }
        }
    }

    return (
        <>
        <Header/>
        <div className = "Service-list-main">
            <div className = "Service-list-title">
                <p>Welcome to the Tora Help center</p>
            </div>
            <div className = "Service-list-view">
                <div className = "Service-list-tab">
                    <div className = "Service-list-tab-button">
                        <div className = {tabValue === 0 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick={()=>changeURL('asking')}>Asking</div>
                        <div className = {tabValue === 1 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick={()=>changeURL('answering')}>Answering</div>
                        <div className = {tabValue === 2 ? `Service-list-tab-clicked` : `Service-list-tab`} onClick={()=>changeURL('myaccount')}>My Account</div>
                    </div> 
                    <div className = "Service-list-tab-body">
                        {
                            switchTab(tabValue)
                        } 
                    </div>
                </div>
            </div>
        </div>
        </>
    )

   
}

export default ServiceList