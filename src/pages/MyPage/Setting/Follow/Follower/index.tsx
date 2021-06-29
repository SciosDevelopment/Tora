import React from 'react'
import Title from 'src/components/common/Title/Title'
import './style/SettingFollower.scss'
import Personal from '../PersonalItem'
import Project from '../ProjectItem'

const SettingFollower = () => {
    return (
        <div className = "Setting-follower-main">
            <div className = "Setting-follower-project-view">
                <Title name ="Project Follow"/>
                <div className = "Setting-follower-project-item">
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    
                </div>
            </div>
            <div className = "Setting-follower-personal-view">
                <Title name ="Personal Follow"/>
                <div className = "Setting-follower-personal-item">
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

export default SettingFollower