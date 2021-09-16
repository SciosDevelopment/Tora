import React, {FunctionComponent} from 'react'
import './style/MainContents.scss'
import AllProjectView from './AllProjectView/AllProjectView'
import SideMenu from '../../../components/common/SideMenu'
import FloatingButton from '../../../components/common/FloatingButton'

const MainContents:FunctionComponent = () => {
      return (
            <div className = "MainContents">
                  <div className="MainSection">
                        <AllProjectView/> 
                  </div> 
                  <div className="MainAside">
                        <SideMenu/>
                  </div>
                  <FloatingButton/>
            </div>
      )
}

export default MainContents