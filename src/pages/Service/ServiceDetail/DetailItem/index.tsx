import React,{useState} from 'react'
import './style/ServiceDetailItem.scss'
import modify from '../../../../img/modify.png'
import commentitem from '../../../../img/serviceitem.png'

const ServiceDetailItem:React.FC = () => {

    const [tabValue, setTabValue] = useState<Number>(0);

    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "Service-detail-item">
                        <div className = "Service-detail-modify">
                            <img src = {modify}/>
                        </div>
                        <div className = "Service-detail-ask">
                            <p>What types of questions should I avoid asking?</p>
                        </div>
                        <div className = "Service-detail-ask-text">
                            <p>How do I write a good answer?</p>
                            <p>What does it mean when an answer is "accepted"?</p>
                            <p>Why and how are some answers deleted?</p>
                            <p>Why are answers no longer being accepted from my account?</p>
                            <p>How to reference material written by others</p>
                        </div>
                        <div className = "Service-detail-guide">
                            <div className = "Service-detail-guide-text">
                                <p>이러한 방법으로 해결되었습니다.</p>
                            </div>
                            <div className = "Service-detail-guide-date">
                                <p>2020.10.23</p>
                            </div>
                        </div>
                        <div className = "Service-detail-comment">
                            <div className = "Service-detail-comment-item">
                                <img src = {commentitem}/>  
                            </div>
                            <div className = "Service-detail-comment-text">
                                <p>댓글 추가</p>
                            </div>
                            <div className = "Service-detail-comment-button">
                            <input type='submit' value="Comment"></input>
                            </div>
                        </div>
                    </div>
                )
            }
            case 1 : {
                return(
                    <div className = "Service-detail-item">
                    </div>
                )
            }
            case 2 : {
                return(
                    <div className = "Service-detail-item">
                    </div>
                )
            }
            case 3 : {
                return(
                    <div className = "Service-detail-item">
                    </div>
                )
            }
            case 4 : {
                return(
                    <div className = "Service-detail-item">
                    </div>
                )
            }
        }
    }


    return (
        <div className = "Service-detail-main">
            <div className = "Service-detail-title">
                <p>Welcome to the Tora Help center</p>
            </div>
            <div className = "Service-detail-view">
                <div className = "Service-detail-tab">
                    <div className = "Service-detail-tab-button">
                        <div className = {tabValue === 0 ? `Service-detail-tab-clicked` : `Service-detail-tab` } onClick = {()=>setTabValue(0)} key = {0}>Asking</div>
                        <div className = {tabValue === 1 ? `Service-detail-tab-clicked` : `Service-detail-tab`} onClick = {()=>setTabValue(1)} key = {1}>Answering</div>
                        <div className = {tabValue === 2 ? `Service-detail-tab-clicked` : `Service-detail-tab`} onClick = {()=>setTabValue(2)} key = {2}>My Account</div>
                        <div className = {tabValue === 3 ? `Service-detail-tab-clicked` : `Service-detail-tab`} onClick = {()=>setTabValue(3)} key = {3}>Our model</div>
                        <div className = {tabValue === 4 ? `Service-detail-tab-clicked` : `Service-detail-tab`} onClick = {()=>setTabValue(4)} key = {4}>Tora Jobs</div>
                    </div> 
                    <div className = "Service-detail-tab-body">
                        {
                            switchTab(tabValue)
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailItem