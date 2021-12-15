import React, {FunctionComponent} from 'react'
import Header from 'src/components/common/Header/Header'
import PostMainView from './MainView'

const PostMain:FunctionComponent = (props) => {
    return (
        <div className="postPage">
        <Header/>
            <div className = "content">
                <div className = "wrapper">
                    <PostMainView props={props}/>
                </div>
            </div>
        </div>
    )
}

export default PostMain