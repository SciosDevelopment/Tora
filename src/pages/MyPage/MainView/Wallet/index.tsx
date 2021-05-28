import React from 'react'
import './style/Wallet.scss'
import Walleticon from '../../../../img/wallet.png'

const MyPageWallet = () => {
    return (
        <div className = "Mypage-view-wallet-main">
            <div className = "Mypage-view-wallet-balance">
                <img src = {Walleticon}/>
                <p>4200</p>
            </div>
            <div className = "Mypage-view-wallet-function">
                <div className = "Mypage-view-wallet-breakdown">
                    <span>지갑내역</span>
                </div>
                <div className = "Mypage-view-wallet-send">
                    <span>보내기</span>
                </div>
            </div>
        </div>
    )
}

export default MyPageWallet