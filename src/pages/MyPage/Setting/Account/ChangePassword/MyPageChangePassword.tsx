import React from 'react';
import './style/MyPageChangePassword.scss'

const MyPageChangePassword = () => {
    return (
        <div className = "MyPage-Changepassword">
            <div className = "MyPage-Changepassword-current">
                <p>Current Password</p>
                <input type = "text"/>
            </div>
            <div className = "MyPage-Changepassword-change">
                <p>Change Password</p>
                <input type = "text"/>
            </div>
            <div className = "MyPage-Changepassword-varify">
                <p>Varify Password</p>
                <input type = "text"/>
            </div>
            <div className = "MyPage-Changepassword-btn">
                <div className = "MyPage-Changepassword-cancel-btn">
                    <input type = "button" value = "취소"></input>
                </div>
                <div className = "MyPage-Changepassword-agree-btn">
                    <input type = "button" value = "확인"></input>
                </div>
            </div>
        </div>
    );
};

export default MyPageChangePassword;