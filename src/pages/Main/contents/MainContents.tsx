import React, {FunctionComponent} from 'react'
import './style/MainContents.scss'
import AllProjectView from './AllProjectView/AllProjectView'

const MainContents:FunctionComponent = () => {
      return (
            <div className = "MainContents">
                  <div className="MainSection">
                        <AllProjectView/> 
                  </div> 
                  <div className="MainAside">

                  </div>
            </div>
      )
}

export default MainContents