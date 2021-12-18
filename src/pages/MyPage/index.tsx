import React,{FunctionComponent} from 'react'
import Header from '../../components/common/Header/Header'
import MypageView from './MainView'

const MyPageMain = (props) => {

    return (
        <div className="mypage">
            <Header/>
            <div className = "content"> 
                <div className = "section">
                    <MypageView props={props}/>
                </div>
            </div>
        </div>       
    )
}

export default MyPageMain