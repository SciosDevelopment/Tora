import React from 'react'
import '../LicenseItem/LicenseItem'
import LicenseItem from '../LicenseItem/LicenseItem';
import './style/LicenseView.scss'
import Searchbar from '../../../components/common/Searchbar'
const LicenseView = () => {
    return (
        <div className = "License-view-main-container">
            <div className = "License-view-head-area">
                <div className = "License-toolbar-area">
                    <div className = "License-searchbar">               
                        <Searchbar/>
                    </div>
                    <div className = "License-select">
                        <div className = "License-selectbox">
                            <select>
                                <option>License</option>
                                <option>License</option>
                                <option>License</option>
                                <option>License</option>
                            </select>
                            
                        </div>
                        <div className = "License-codeeyebox">
                            <input type='submit' value="CodeEye"></input>
                        </div>
                    </div>

                </div>
            </div>
            <div className = "License-view-main">
               
                <div className = "License-item-container">
                   <LicenseItem/>
                   <LicenseItem/>
                </div>
            </div>
        </div>
    )
}

export default LicenseView