import React, {FunctionComponent} from 'react'
import BlogMainView from './MainView'
import Header from '../../components/common/Header/Header'

const BlogMain:FunctionComponent = (props) => {
    return (
        <div className="blogPage">
            <Header/>
            <div className = "content">
                {/* <SidebarContainer message="SideMenu"/> */}

                <div className="section">
                    <BlogMainView props={props}/>     
                </div> 
                
                <div className="aside">

                </div>
            </div>
        </div>
    )
}

export default BlogMain