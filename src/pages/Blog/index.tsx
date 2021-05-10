import React, {FunctionComponent} from 'react'
import './style/BlogMain.scss'
import BlogMainView from './MainView'
import Header from '../../components/common/Header/Header'

const BlogMain:FunctionComponent = () => {
    return (
        <>
        <Header/>
        <div className = "Blog-Main-Contents">
            {/* <SidebarContainer message="SideMenu"/> */}

            <div className="Blog-Main-Section">
                <BlogMainView/>     
            </div> 
            
            <div className="BlogAside">

            </div>
        </div>
        </>
    )
}

export default BlogMain