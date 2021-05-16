import React from 'react'
import './style/PostMain.scss'
import Header from 'src/components/common/Header/Header'
import PostMainView from './MainView'

const PostMain:React.FC = () => {
    return (
        <>
        <Header/>
        <div className = "Post-Main">
            <div className = "Post-Main-result">
                <PostMainView/>
            </div>
        </div>
        </>
    );
};

export default PostMain