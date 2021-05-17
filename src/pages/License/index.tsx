import React from 'react'
import LicenseView from './LicenseView/LicenseView'
import Header from '../../components/common/Header/Header'
import './style/LicenseMain.scss'
const LicenseMain = () => {
    return (
        <div className = "License-main-container">
            <Header/>
            <LicenseView/>   
        </div>
    )
}

export default LicenseMain