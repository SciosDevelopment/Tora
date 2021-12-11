import React, {FunctionComponent} from 'react'
import AllProjectView from './AllProjectView'
import SideMenu from '../../../components/common/SideMenu'
import FloatingButton from '../../../components/common/FloatingButton'

const Contents:FunctionComponent = () => {
      return (
            <div className = "contents">
                  <div className="section">
                        <AllProjectView/> 
                  </div> 
                  <div className="aside">
                        <SideMenu/>
                  </div>
                  <FloatingButton/>
            </div>
      )
}

export default Contents