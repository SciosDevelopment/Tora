import React from 'react'
import '../LicenseItem'
import LicenseItem from '../LicenseItem'
import Searchbar from '../../../components/common/Searchbar'

const LicenseView = () => {
    return (
        <div className = "content">
            <div className = "header">
                <div className = "toolbar">
                    <div className = "searchbar"><Searchbar/></div>
                    <div className = "selectcontainer">
                        <div className = "selector">
                            <select>
                                <option>License</option>
                                <option>License</option>
                                <option>License</option>
                                <option>License</option>
                            </select>
                        </div>
                        <div className = "codeeye">
                            <input type='submit' value="CodeEye"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "list">               
                <LicenseItem/>
                <LicenseItem/>
            </div>
        </div>
    )
}

export default LicenseView