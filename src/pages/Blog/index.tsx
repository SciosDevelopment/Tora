import React, {FunctionComponent} from 'react'
import './style/BlogMain.scss'
import BlogMainView from './MainView'
import Header from '../../components/common/Header/Header'

const BlogMain:FunctionComponent = (props) => {
    return (
        <>
        <Header/>
        <div className = "Blog-Main-Contents">
            {/* <SidebarContainer message="SideMenu"/> */}

            <div className="Blog-Main-Section">
                <BlogMainView props={props}/>     
            </div> 
            
            <div className="Blog-Main-Aside">

            </div>
        </div>
        </>
    )
}

export default BlogMain