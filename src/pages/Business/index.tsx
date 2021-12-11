import React from 'react'

const BusinessMain = () => {
    return (
        <div className = "business">
            <div className = "title">
                <p>Service Plan Introduction Inquiries</p>
            </div>
            <div className = "content">
                <div className = "container">
                    <div className = "free">
                        <div className = "title">
                            <p>FREE</p>
                        </div>
                        <div className = "price">
                            <p>$ 0</p>
                        </div>
                        <div className = "term">
                            <p>per user/month</p>
                        </div>
                        <div className = "text">
                            <p>500MB 제공</p>
                            <p>화상코딩 50명까지</p>
                        </div>
                        <div className = "button">
                            <input type='submit' value="Join for Free"/>
                        </div>
                    </div>
                    <div className = "premium">
                        <div className = "title">
                            <p>PREMIUM</p>
                        </div>
                        <div className = "price">
                            <p>$ 3</p>
                        </div>
                        <div className = "term">
                            <p>per user/month</p>
                        </div>
                        <div className = "text">
                            <p>5GB 제공</p>
                            <p>화상코딩 무제한</p>
                            <p>프리미엄 앱 서버</p>
                            <p>광고 제거</p>
                        </div>
                        <div className = "button">
                            <input type='submit' value="30 days of free experience"/>
                        </div>
                    </div>
                    <div className = "enterprise">
                        <div className = "title">
                            <p>ENTERPRISE</p>
                        </div>
                        <div className = "price">
                            <p>$ 10</p>
                        </div>
                        <div className = "term">
                            <p>per user/month</p>
                        </div>
                        <div className = "text">
                            <p>10GB 제공</p>
                            <p>화상코딩 무제한</p>
                            <p>프리미엄 앱 서버</p>
                            <p>업무 캘린더</p>
                            <p>라이센스 서비스</p>
                            <p>모니터링</p>
                        </div>
                        <div className = "button">
                            <input type='submit' value="30 days of free experience"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessMain