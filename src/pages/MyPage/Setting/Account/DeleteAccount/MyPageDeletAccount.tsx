import React from 'react';
import './style/MyPageDeleteAccount.scss'

const MyPageDeletAccount = () => {
    return (
        <div className = "MyPage-DeleteAccount">
            <div className = "MyPage-DeleteAccount-title">
                <p>Delete My Account</p>
            </div>
            <div className = "MyPage-DeleteAccount-account-check">
                <p>회원탈퇴 시 모든 자료가 삭제 됩니다. 동의하시겠습니까?</p>
                <input type = "checkbox" value = "account"></input>
            </div>
            <div className = "MyPage-DeleteAccount-btn">
                <div className = "MyPage-DeleteAccount-cancel-btn">
                    <input type = "button" value = "취소"></input>
                </div>
                <div className = "MyPage-DeleteAccount-agree-btn">
                    <input type = "button" value = "확인"></input>
                </div>
            </div>
        </div>
    );
};

export default MyPageDeletAccount;