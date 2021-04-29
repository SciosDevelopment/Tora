import React from 'react'
import LicenseView from './LicenseView/LicenseView'
import Header from '../../components/common/Header/Header'
import './style/LicenseMain.scss'
const LicenseMain = () => {
    return (
        <div className = "License-main-container">
            <div className = "License-header">
                <Header/>
            </div>
            <div className = "License-main">
                <LicenseView/>
            </div>
        </div>
    )
}

export default LicenseMain