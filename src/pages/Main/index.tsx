import {FunctionComponent} from 'react'
import Header from '../../components/common/Header/Header'
import Contents from './contents'
const MainPage:FunctionComponent = ()=> {    
    return (
        <div className="mainpage">
            <Header/>     
            <Contents/>
        </div>
    )
}

export default MainPage