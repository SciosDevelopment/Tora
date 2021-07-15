import React, {FunctionComponent} from 'react'
import './style/MainContents.scss'
import AllProjectView from './AllProjectView/AllProjectView'
import SideMenu from '../../../components/common/SideMenu'

const MainContents:FunctionComponent = () => {
      return (
            <div className = "MainContents">
                  <div className="MainSection">
                        <AllProjectView/> 
                  </div> 
                  <div className="MainAside">
                        <SideMenu/>
                  </div>
            </div>
      )
}

export default MainContents