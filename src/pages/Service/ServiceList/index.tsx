import React,{useEffect, useState} from 'react'
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

    // /const setData = () => setTabValue(setToken())
    const changeURL = async(token) => history.push(`/service/${token}`)
    
    useEffect(()=>{setTabValue(setToken())}, [token])

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <>
                        <ServiceListItem isComment={true}/>
                        <ServiceListItem isComment={true}/>
                        <ServiceListItem isComment={true}/>
                        <ServiceListItem isComment={true}/>
                        <ServiceListItem isComment={false}/>
                        <ServiceListItem isComment={false}/>
                        </>
                )
            }
            case 1 : {
                return(
                    <>1</>
                )
            }
            case 2 : {
                return(
                    <>2</>
                )
            }
        }
    }

    return (
        <div className="servicelistPage">
            <Header/>
            <div className = "main">
                <div className = "title">
                    <p>Welcome to the Tora Help center</p>
                </div>
                <div className = "container">
                    <div className = "wrapper">
                        <div className = "tablist">
                            <div className = {tabValue === 0 ? `tab-clicked` : `tab`} onClick={()=>changeURL('asking')}>Asking</div>
                            <div className = {tabValue === 1 ? `tab-clicked` : `tab`} onClick={()=>changeURL('answering')}>Answering</div>
                            <div className = {tabValue === 2 ? `tab-clicked` : `tab`} onClick={()=>changeURL('myaccount')}>My Account</div>
                        </div> 
                        <div className = "itemlist">
                            {
                                switchTab(tabValue)
                            } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

   
}

export default ServiceList