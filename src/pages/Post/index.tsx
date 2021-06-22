import React, {FunctionComponent} from 'react'
import './style/PostMain.scss'
import Header from 'src/components/common/Header/Header'
import PostMainView from './MainView'

const PostMain:FunctionComponent = (props) => {
    return (
        <>
        <Header/>
        <div className = "Post-Main">
            <div className = "Post-Main-result">
                <PostMainView props={props}/>
            </div>
        </div>
        </>
    );
};

export default PostMain