import './style/MainView.scss'
import Title from 'src/components/common/Title/Title'
import ItemList from './FolderView'
import Profile from './Profile'
import Activity from './Activity'
import Wallet from './Wallet'

const MypageView = () => {
    return (
        <div className = "Mypage-view-main">
            <div className = "Mypage-view-profile-container">
                <Profile/>
            </div>
            <div className = "Mypage-view-list-container">
                <ItemList/>
            </div>

            {/* footer */}
            <div className = "Mypage-view-footer">
                <div className = "Mypage-view-footer-myAc">
                    <Title name = "My Activity"/>
                    <Activity/>
                </div>
                <div className = "Mypage-view-footer-FollowAc">
                    <Title name = "Follow Activity"/>
                    <Activity/>
                </div>
                <div className = "Mypage-view-footer-wallet">
                    <Title name = "My Wallet"/>
                    <Wallet/>
                </div>           
            </div>
        </div>
    )
}

export default MypageView