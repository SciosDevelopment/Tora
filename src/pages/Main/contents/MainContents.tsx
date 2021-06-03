import React, {FunctionComponent} from 'react'
import './style/MainContents.scss'
import AllProjectView from './AllProjectView/AllProjectView'
import Note from '../../../components/common/Note'

const MainContents:FunctionComponent = () => {
      return (
            <div className = "MainContents">
                  <div className="MainSection">
                        <AllProjectView/> 
                  </div> 
                  <div className="MainAside">

                  </div>
                  <div className = "MainNote">
                        <Note/>
                  </div>
            </div>
      )
}

export default MainContents