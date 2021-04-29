import React from 'react'
import '../LicenseItem/LicenseItem'
import LicenseItem from '../LicenseItem/LicenseItem';
import searchNavy from '../../../img/search-navy.png'
import './style/LicenseView.scss'
const LicenseView = () => {
    return (
        <div className = "License-view-main-container">

            <div className = "License-view-head-area">
                <div className = "License-toolbar-area">
                    <div className = "License-searchbar">               
                    <form>
                        <input type="input" placeholder="Search"/>
                        <button type='submit' value="검색"><img src = {searchNavy}/></button>
                    </form>
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