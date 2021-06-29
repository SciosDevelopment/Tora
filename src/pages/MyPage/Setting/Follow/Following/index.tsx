import React from 'react'
import Title from 'src/components/common/Title/Title'
import './style/SettingFollowing.scss'
import Personal from '../PersonalItem'

const SettingFollowing = () => {
    return (
        <div className = "Setting-following-main">
            <div className = "Setting-following-personal-view">
                <Title name ="Personal Follow"/>
                <div className = "Setting-following-personal-item">
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                    <Personal/>
                </div>
            </div>
        </div>
    )
}

export default SettingFollowing