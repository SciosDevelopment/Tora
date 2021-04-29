import React from 'react';
import './style/businessmain.scss'

const businessmain = () => {
    return (
        <div className = "Business-main">
            <div className = "Business-title">
                <p>Service Plan Introduction Inquiries</p>
            </div>
            <div className = "Business-view">
            <div className = "business-view-main">
            <div className = "business-view-free">
                <div className = "business-view-free-title">
                    <p>FREE</p>
                </div>
                <div className = "business-view-free-price">
                    <p>$ 0</p>
                </div>
                <div className = "business-view-free-term">
                    <p>per user/month</p>
                </div>
                <div className = "business-view-free-text">
                    <p>500MB 제공</p>
                    <p>화상코딩 50명까지</p>
                </div>
                <div className = "business-view-free-button">
                <input type='submit' value="Join for Free"></input>
                </div>
            </div>
            <div className = "business-view-premium">
                <div className = "business-view-premium-title">
                    <p>PREMIUM</p>
                </div>
                <div className = "business-view-premium-price">
                    <p>$ 3</p>
                </div>
                <div className = "business-view-premium-term">
                    <p>per user/month</p>
                </div>
                <div className = "business-view-premium-text">
                    <p>5GB 제공</p>
                    <p>화상코딩 무제한</p>
                    <p>프리미엄 앱 서버</p>
                    <p>광고 제거</p>
                </div>
                <div className = "business-view-premium-button">
                    <input type='submit' value="30 days of free experience"></input>
                </div>
            </div>
            <div className = "business-view-enterprise">
                <div className = "business-view-enterprise-title">
                    <p>ENTERPRISE</p>
                </div>
                <div className = "business-view-enterprise-price">
                    <p>$ 10</p>
                </div>
                <div className = "business-view-enterprise-term">
                    <p>per user/month</p>
                </div>
                <div className = "business-view-enterprise-text">
                    <p>10GB 제공</p>
                    <p>화상코딩 무제한</p>
                    <p>프리미엄 앱 서버</p>
                    <p>업무 캘린더</p>
                    <p>라이센스 서비스</p>
                    <p>모니터링</p>
                </div>
                <div className = "business-view-enterprise-button">
                    <input type='submit' value="30 days of free experience"></input>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default businessmain;