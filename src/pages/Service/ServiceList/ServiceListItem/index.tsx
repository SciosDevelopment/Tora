import React from 'react'
import './style/ServiceListItem.scss'

const ServiceListItem = () => {
    return (
        <div className = "Service-listitem-main">
            <div className = "Service-listitem-text">
                <p>What types of questions should I avoid asking?</p>
            </div>
            <div className = "Service-listitem-date">
                <p>2020.10.23</p>
            </div>            
        </div>
    )
}

export default ServiceListItem