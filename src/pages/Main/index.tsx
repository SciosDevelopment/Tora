import {FunctionComponent} from 'react'
import Header from '../../components/common/Header/Header'
import Contents from './contents/MainContents'
const MainPage:FunctionComponent = ()=> {    
    return (
        <>
            <Header/>     
            <Contents/>
        </>
    )
}

export default MainPage