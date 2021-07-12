import React,{FunctionComponent} from 'react'
import Header from 'src/components/common/Header/Header'
import MypageView from './MainView'
import './style/MyPageMain.scss'

const MyPageMain = (props) => {

    return (
    <>
        <Header/>

        <div className = "Mypage-main-container"> 
            <div className = "Mypage-view-container">
                <MypageView props={props}/>
            </div>
        </div>
    </>       
    )
}

export default MyPageMain