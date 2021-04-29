import React from 'react'
import './style/ServiceList.scss'
import ServiceListItem from './ServiceListItem'

const ServiceList = () => {
    return (
        <div className = "Service-list-main">
            <div className = "Service-list-title">
                <p>Welcome to the Tora Help center</p>
            </div>
            <div className = "Service-list-view">
                <div className = "Service-list-tab">
                    <p>Asking</p>
                    <p>Answering</p>
                    <p>My Account</p>
                    <p>Our model</p>
                    <p>Tora Jobs</p>
                </div>
                <div className = "Service-list-item">
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                    <ServiceListItem/>
                </div>
            </div>
        </div>
    )
}

export default ServiceList