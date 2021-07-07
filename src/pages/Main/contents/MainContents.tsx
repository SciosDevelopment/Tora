import React, {FunctionComponent} from 'react'
import './style/MainContents.scss'
import AllProjectView from './AllProjectView/AllProjectView'
import SideButton from '../../../components/common/SideButton/ConnectSideButton/ConnectSideButton'

const MainContents:FunctionComponent = () => {
      return (
            <div className = "MainContents">
                  <div className="MainSection">
                        <AllProjectView/> 
                  </div> 
                  <div className="MainAside">
                        <SideButton/>
                  </div>
            </div>
      )
}

export default MainContents